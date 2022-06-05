package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.AdventureFreeAppointment;
import stasaaleksadavid.isabackend.model.ShipFreeAppointment;
import stasaaleksadavid.isabackend.repository.ShipFreeAppointmentRepository;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
@EnableTransactionManagement
public class ShipFreeAppointmentController {
    @Autowired
    private ShipFreeAppointmentRepository shipFreeAppointmentRepository;


    //get all

    @GetMapping("/shipfreeappointments")
    public List<ShipFreeAppointment> getAllShipFreeAppointments() {
        return shipFreeAppointmentRepository.findAll();
    }

    @GetMapping("/shipfreeappointments/{startingDate}/{endingDate}")
    public List<ShipFreeAppointment> getAllShipsFreeAppointmentsByStartingDateAndEndingDate(@PathVariable String startingDate, @PathVariable String endingDate){

        LocalDate startingTime = LocalDate.parse(startingDate);
        LocalDate endingTime = LocalDate.parse(endingDate);

        return shipFreeAppointmentRepository.findShipFreeAppointmentByStartingDateAndEndingDate(startingTime, endingTime);
    }


    //create
    @PostMapping("/shipfreeappointments/{type}")
    @Transactional
    public ShipFreeAppointment createShipFreeAppointment(@PathVariable String type,@RequestBody ShipFreeAppointment shipFreeAppointment) {
        if (type.equals("ship_owner") || type.equals("admin") || type.equals("main_admin")) {
            return shipFreeAppointmentRepository.save(shipFreeAppointment);
        }
        else return null;
    }

    //get by id
    @GetMapping("/shipfreeappointments/{id}")
    public ResponseEntity<ShipFreeAppointment> getShipFreeAppointmentById(@PathVariable Long id) {
        ShipFreeAppointment shipFreeAppointment = shipFreeAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ShipFreeAppointment does not exist with id:" + id));
        return ResponseEntity.ok(shipFreeAppointment);
    }

    //update
    @PutMapping("/shipfreeappointments/{id}")
    @Transactional
    public ResponseEntity<ShipFreeAppointment> updateShipFreeAppointment(@PathVariable Long id, @RequestBody ShipFreeAppointment shipFreeAppointmentDetails) {
        ShipFreeAppointment shipFreeAppointment = shipFreeAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ShipFreeAppointment does not exist with id:" + id));

        shipFreeAppointment.setShipId(shipFreeAppointmentDetails.getShipId());
        shipFreeAppointment.setStartingDate(shipFreeAppointmentDetails.getStartingDate());
        shipFreeAppointment.setEndingDate(shipFreeAppointmentDetails.getEndingDate());
        shipFreeAppointment.setNumberOfPeople(shipFreeAppointmentDetails.getNumberOfPeople());
        shipFreeAppointment.setAdditionalServices(shipFreeAppointmentDetails.getAdditionalServices());
        shipFreeAppointment.setPrice(shipFreeAppointmentDetails.getPrice());


        ShipFreeAppointment updatedShipFreeAppointment = shipFreeAppointmentRepository.save(shipFreeAppointment);
        return ResponseEntity.ok(updatedShipFreeAppointment);
    }


    //delete
    @DeleteMapping("/shipfreeappointments/{id}")
    @Transactional
    public Map<String, Boolean> deleteShipFreeAppointment(@PathVariable Long id) {

        ShipFreeAppointment shipFreeAppointment = shipFreeAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ShipFreeAppointment does not exist with id:" + id));

        shipFreeAppointmentRepository.delete(shipFreeAppointment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

    @GetMapping("/shipfreeappointments/ship/{shipid}")
    public List<ShipFreeAppointment> getFreeAppointmentByShipId(@PathVariable Long shipid) {
         return shipFreeAppointmentRepository.findByShipId(shipid);
    }

}
