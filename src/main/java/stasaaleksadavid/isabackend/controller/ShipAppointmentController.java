package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.ShipAppointment;
import stasaaleksadavid.isabackend.repository.ShipAppointmentRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ShipAppointmentController {
    @Autowired
    private ShipAppointmentRepository shipAppointmentRepository;

//get all

    @GetMapping("/shipappointments")
    public List<ShipAppointment> getAllShipAppointments() {
        return shipAppointmentRepository.findAll();
    }

    //create
    @PostMapping("/shipappointments")
    public ShipAppointment createShipAppointment(@RequestBody ShipAppointment shipAppointment) {
        return shipAppointmentRepository.save(shipAppointment);
    }

    //get by id
    @GetMapping("/shipappointments/{id}")
    public ResponseEntity<ShipAppointment> getShipAppointmentById(@PathVariable Long id) {
        ShipAppointment shipAppointment = shipAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ShipAppointment does not exist with id:" + id));
        return ResponseEntity.ok(shipAppointment);
    }

    //update
    @PutMapping("/shipappointments/{id}")
    public ResponseEntity<ShipAppointment> updateShipAppointment(@PathVariable Long id, @RequestBody ShipAppointment shipAppointmentDetails) {
        ShipAppointment shipAppointment = shipAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ShipAppointment does not exist with id:" + id));

        shipAppointment.setClientId(shipAppointmentDetails.getClientId());
        shipAppointment.setShipId(shipAppointmentDetails.getShipId());
        shipAppointment.setStartingDate(shipAppointmentDetails.getStartingDate());
        shipAppointment.setEndingDate(shipAppointmentDetails.getEndingDate());
        shipAppointment.setNumberOfPeople(shipAppointmentDetails.getNumberOfPeople());
        shipAppointment.setAdditionalServices(shipAppointmentDetails.getAdditionalServices());
        shipAppointment.setPrice(shipAppointmentDetails.getPrice());


        ShipAppointment updatedShipAppointment = shipAppointmentRepository.save(shipAppointment);
        return ResponseEntity.ok(updatedShipAppointment);
    }


    //delete
    @DeleteMapping("/shipappointments/{id}")
    public Map<String, Boolean> deleteShipAppointment(@PathVariable Long id) {

        ShipAppointment shipAppointment = shipAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ShipAppointment does not exist with id:" + id));

        shipAppointmentRepository.delete(shipAppointment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }


    @GetMapping("/shipappointments/ship/{shipid}")
    public List<ShipAppointment> getAppointmentByShipId(@PathVariable Long shipid) {
        return shipAppointmentRepository.findByShipId(shipid);
    }

}
