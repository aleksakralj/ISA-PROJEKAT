package stasaaleksadavid.isabackend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.AdventureFreeAppointment;
import stasaaleksadavid.isabackend.repository.AdventureFreeAppointmentRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AdventureFreeAppointmentController {

    @Autowired
    private AdventureFreeAppointmentRepository adventureFreeAppointmentRepository;

    //get all

    @GetMapping("/adventurefreeappointments")
    public List<AdventureFreeAppointment> getAllAdventureFreeAppointments() {
        return adventureFreeAppointmentRepository.findAll();
    }

    //create
    @PostMapping("/adventurefreeappointments")
    public AdventureFreeAppointment createAdventureFreeAppointment(@RequestBody AdventureFreeAppointment adventureFreeAppointment) {
        return adventureFreeAppointmentRepository.save(adventureFreeAppointment);
    }

    //get by id
    @GetMapping("/adventurefreeappointments/{id}")
    public ResponseEntity<AdventureFreeAppointment> getAdventureFreeAppointmentById(@PathVariable Long id) {
        AdventureFreeAppointment adventureFreeAppointment = adventureFreeAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureFreeAppointment does not exist with id:" + id));
        return ResponseEntity.ok(adventureFreeAppointment);
    }

    //update
    @PutMapping("/adventurefreeappointments/{id}")
    public ResponseEntity<AdventureFreeAppointment> updateAdventureFreeAppointment(@PathVariable Long id, @RequestBody AdventureFreeAppointment adventureFreeAppointmentDetails) {
        AdventureFreeAppointment adventureFreeAppointment = adventureFreeAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureFreeAppointment does not exist with id:" + id));

        adventureFreeAppointment.setInstructorId(adventureFreeAppointmentDetails.getInstructorId());
        adventureFreeAppointment.setStartingDate(adventureFreeAppointmentDetails.getStartingDate());
        adventureFreeAppointment.setEndingDate(adventureFreeAppointmentDetails.getEndingDate());
        adventureFreeAppointment.setNumberOfPeople(adventureFreeAppointmentDetails.getNumberOfPeople());
        adventureFreeAppointment.setAdditionalServices(adventureFreeAppointmentDetails.getAdditionalServices());
        adventureFreeAppointment.setPrice(adventureFreeAppointmentDetails.getPrice());


        AdventureFreeAppointment updatedAdventureFreeAppointment = adventureFreeAppointmentRepository.save(adventureFreeAppointment);
        return ResponseEntity.ok(updatedAdventureFreeAppointment);
    }


    //delete
    @DeleteMapping("/adventurefreeappointments/{id}")
    public Map<String, Boolean> deleteAdventureFreeAppointment(@PathVariable Long id) {

        AdventureFreeAppointment adventureFreeAppointment = adventureFreeAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureFreeAppointment does not exist with id:" + id));

        adventureFreeAppointmentRepository.delete(adventureFreeAppointment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

    @GetMapping("/adventurefreeappointments/adventure/{instructorid}")
    public List<AdventureFreeAppointment> getFreeAppointmentByAdventureId(@PathVariable Long instructorid) {
        return adventureFreeAppointmentRepository.findByInstructorId(instructorid);
    }
}
