package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.AdventureQuickAppointment;
import stasaaleksadavid.isabackend.repository.AdventureQuickAppointmentRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AdventureQuickAppointmentController {
    @Autowired
    private AdventureQuickAppointmentRepository adventureQuickAppointmentRepository;

    //get all

    @GetMapping("/adventurequickappointments")
    public List<AdventureQuickAppointment> getAllAdventureQuickAppointments() {
        return adventureQuickAppointmentRepository.findAll();
    }

    //create
    @PostMapping("/adventurequickappointments")
    public AdventureQuickAppointment createAdventureQuickAppointment(@RequestBody AdventureQuickAppointment adventureQuickAppointment) {
        return adventureQuickAppointmentRepository.save(adventureQuickAppointment);
    }

    //get by id
    @GetMapping("/adventurequickappointments/{id}")
    public ResponseEntity<AdventureQuickAppointment> getAdventureQuickAppointmentById(@PathVariable Long id) {
        AdventureQuickAppointment adventureQuickAppointment = adventureQuickAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureQuickAppointment does not exist with id:" + id));
        return ResponseEntity.ok(adventureQuickAppointment);
    }

    //update
    @PutMapping("/adventurequickappointments/{id}")
    public ResponseEntity<AdventureQuickAppointment> updateAdventureQuickAppointment(@PathVariable Long id, @RequestBody AdventureQuickAppointment adventureQuickAppointmentDetails) {
        AdventureQuickAppointment adventureQuickAppointment = adventureQuickAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureQuickAppointment does not exist with id:" + id));


        adventureQuickAppointment.setInstructorId(adventureQuickAppointmentDetails.getInstructorId());
        adventureQuickAppointment.setStartingDate(adventureQuickAppointmentDetails.getStartingDate());
        adventureQuickAppointment.setEndingDate(adventureQuickAppointmentDetails.getEndingDate());
        adventureQuickAppointment.setNumberOfPeople(adventureQuickAppointmentDetails.getNumberOfPeople());
        adventureQuickAppointment.setAdditionalServices(adventureQuickAppointmentDetails.getAdditionalServices());
        adventureQuickAppointment.setPrice(adventureQuickAppointmentDetails.getPrice());


        AdventureQuickAppointment updatedAdventureQuickAppointment = adventureQuickAppointmentRepository.save(adventureQuickAppointment);
        return ResponseEntity.ok(updatedAdventureQuickAppointment);
    }


    //delete
    @DeleteMapping("/adventurequickappointments/{id}")
    public Map<String, Boolean> deleteAdventureQuickAppointment(@PathVariable Long id) {

        AdventureQuickAppointment adventureQuickAppointment = adventureQuickAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureQuickAppointment does not exist with id:" + id));

        adventureQuickAppointmentRepository.delete(adventureQuickAppointment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }


    @GetMapping("/adventurequickappointments/adventure/{instructorid}")
    public List<AdventureQuickAppointment> getAppointmentByAdventureId(@PathVariable Long instructorid) {
        return adventureQuickAppointmentRepository.findByInstructorId(instructorid);
    }


}
