package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;

import stasaaleksadavid.isabackend.model.CottageQuickAppointment;
import stasaaleksadavid.isabackend.repository.CottageQuickAppointmentRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CottageQuickAppointmentController {
    @Autowired
    private CottageQuickAppointmentRepository cottageQuickAppointmentRepository;

    //get all

    @GetMapping("/cottagequickappointments")
    public List<CottageQuickAppointment> getAllCottageQuickAppointments() {
        return cottageQuickAppointmentRepository.findAll();
    }

    //create
    @PostMapping("/cottagequickappointments")
    public CottageQuickAppointment createCottageQuickAppointment(@RequestBody CottageQuickAppointment cottageQuickAppointment) {
        return cottageQuickAppointmentRepository.save(cottageQuickAppointment);
    }

    //get by id
    @GetMapping("/cottagequickappointments/{id}")
    public ResponseEntity<CottageQuickAppointment> getCottageQuickAppointmentById(@PathVariable Long id) {
        CottageQuickAppointment cottageQuickAppointment = cottageQuickAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("CottageQuickAppointment does not exist with id:" + id));
        return ResponseEntity.ok(cottageQuickAppointment);
    }

    //update
    @PutMapping("/cottagequickappointments/{id}")
    public ResponseEntity<CottageQuickAppointment> updateCottageQuickAppointment(@PathVariable Long id, @RequestBody CottageQuickAppointment cottageQuickAppointmentDetails) {
        CottageQuickAppointment cottageQuickAppointment = cottageQuickAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("CottageQuickAppointment does not exist with id:" + id));


        cottageQuickAppointment.setCottageId(cottageQuickAppointmentDetails.getCottageId());
        cottageQuickAppointment.setStartingDate(cottageQuickAppointmentDetails.getStartingDate());
        cottageQuickAppointment.setEndingDate(cottageQuickAppointmentDetails.getEndingDate());
        cottageQuickAppointment.setNumberOfPeople(cottageQuickAppointmentDetails.getNumberOfPeople());
        cottageQuickAppointment.setAdditionalServices(cottageQuickAppointmentDetails.getAdditionalServices());
        cottageQuickAppointment.setPrice(cottageQuickAppointmentDetails.getPrice());


        CottageQuickAppointment updatedCottageQuickAppointment = cottageQuickAppointmentRepository.save(cottageQuickAppointment);
        return ResponseEntity.ok(updatedCottageQuickAppointment);
    }


    //delete
    @DeleteMapping("/cottagequickappointments/{id}")
    public Map<String, Boolean> deleteCottageQuickAppointment(@PathVariable Long id) {

        CottageQuickAppointment cottageQuickAppointment = cottageQuickAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("CottageQuickAppointment does not exist with id:" + id));

        cottageQuickAppointmentRepository.delete(cottageQuickAppointment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }


    @GetMapping("/cottagequickappointments/cottage/{cottageid}")
    public List<CottageQuickAppointment> getAppointmentByCottageId(@PathVariable Long cottageid) {
        return cottageQuickAppointmentRepository.findByCottageId(cottageid);
    }


}
