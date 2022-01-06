package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.CottageAppointment;
import stasaaleksadavid.isabackend.repository.CottageAppointmentRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CottageAppointmentController {

    @Autowired
    private CottageAppointmentRepository cottageAppointmentRepository;

    //get all

    @GetMapping("/cottageappointments")
    public List<CottageAppointment> getAllCottageAppointments() {
        return cottageAppointmentRepository.findAll();
    }

    //create
    @PostMapping("/cottageappointments")
    public CottageAppointment createCottageAppointment(@RequestBody CottageAppointment cottageAppointment) {
        return cottageAppointmentRepository.save(cottageAppointment);
    }

    //get by id
    @GetMapping("/cottageappointments/{id}")
    public ResponseEntity<CottageAppointment> getCottageAppointmentById(@PathVariable Long id) {
        CottageAppointment cottageAppointment = cottageAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("CottageAppointment does not exist with id:" + id));
        return ResponseEntity.ok(cottageAppointment);
    }

    //update
    @PutMapping("/cottageappointments/{id}")
    public ResponseEntity<CottageAppointment> updateCottageAppointment(@PathVariable Long id, @RequestBody CottageAppointment cottageAppointmentDetails) {
        CottageAppointment cottageAppointment = cottageAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("CottageAppointment does not exist with id:" + id));

        cottageAppointment.setClientId(cottageAppointmentDetails.getClientId());
        cottageAppointment.setCottageId(cottageAppointmentDetails.getCottageId());
        cottageAppointment.setStartingDate(cottageAppointmentDetails.getStartingDate());
        cottageAppointment.setEndingDate(cottageAppointmentDetails.getEndingDate());
        cottageAppointment.setNumberOfPeople(cottageAppointmentDetails.getNumberOfPeople());
        cottageAppointment.setAdditionalServices(cottageAppointmentDetails.getAdditionalServices());
        cottageAppointment.setPrice(cottageAppointment.getPrice());


        CottageAppointment updatedCottageAppointment = cottageAppointmentRepository.save(cottageAppointment);
        return ResponseEntity.ok(updatedCottageAppointment);
    }


    //delete
    @DeleteMapping("/cottageappointments/{id}")
    public Map<String, Boolean> deleteCottageAppointment(@PathVariable Long id) {

        CottageAppointment cottageAppointment = cottageAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("CottageAppointment does not exist with id:" + id));

        cottageAppointmentRepository.delete(cottageAppointment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }


    @GetMapping("/cottageappointments/cottage/{cottageid}")
    public List<CottageAppointment> getAppointmentByCottageId(@PathVariable Long cottageid) {
        return cottageAppointmentRepository.findByCottageId(cottageid);
    }
}