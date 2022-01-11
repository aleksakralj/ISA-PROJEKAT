package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.AdventureAppointment;
import stasaaleksadavid.isabackend.repository.AdventureAppointmentRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AdventureAppointmentController {

    @Autowired
    private AdventureAppointmentRepository adventureAppointmentRepository;

    //get all

    @GetMapping("/adventureappointments")
    public List<AdventureAppointment> getAllAdventureAppointments() {
        return adventureAppointmentRepository.findAll();
    }

    //create
    @PostMapping("/adventureappointments")
    public AdventureAppointment createAdventureAppointment(@RequestBody AdventureAppointment adventureAppointment) {
        return adventureAppointmentRepository.save(adventureAppointment);
    }

    //get by id
    @GetMapping("/adventureappointments/{id}")
    public ResponseEntity<AdventureAppointment> getAdventureAppointmentById(@PathVariable Long id) {
        AdventureAppointment adventureAppointment = adventureAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureAppointment does not exist with id:" + id));
        return ResponseEntity.ok(adventureAppointment);
    }

    //update
    @PutMapping("/adventureappointments/{id}")
    public ResponseEntity<AdventureAppointment> updateAdventureAppointment(@PathVariable Long id, @RequestBody AdventureAppointment adventureAppointmentDetails) {
        AdventureAppointment adventureAppointment = adventureAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureAppointment does not exist with id:" + id));

        adventureAppointment.setClientId(adventureAppointmentDetails.getClientId());
        adventureAppointment.setInstructorId(adventureAppointmentDetails.getInstructorId());
        adventureAppointment.setStartingDate(adventureAppointmentDetails.getStartingDate());
        adventureAppointment.setEndingDate(adventureAppointmentDetails.getEndingDate());
        adventureAppointment.setNumberOfPeople(adventureAppointmentDetails.getNumberOfPeople());
        adventureAppointment.setAdditionalServices(adventureAppointmentDetails.getAdditionalServices());
        adventureAppointment.setPrice(adventureAppointmentDetails.getPrice());


        AdventureAppointment updatedAdventureAppointment = adventureAppointmentRepository.save(adventureAppointment);
        return ResponseEntity.ok(updatedAdventureAppointment);
    }


    //delete
    @DeleteMapping("/adventureappointments/{id}")
    public Map<String, Boolean> deleteAdventureAppointment(@PathVariable Long id) {

        AdventureAppointment adventureAppointment = adventureAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureAppointment does not exist with id:" + id));

        adventureAppointmentRepository.delete(adventureAppointment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }


    @GetMapping("/adventureappointments/adventure/{instructorid}")
    public List<AdventureAppointment> getAppointmentByAdventureId(@PathVariable Long instructorid) {
        return adventureAppointmentRepository.findByInstructorId(instructorid);
    }
}