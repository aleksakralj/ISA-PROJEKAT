package stasaaleksadavid.isabackend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.AdventureFreeAppointment;
import stasaaleksadavid.isabackend.repository.AdventureFreeAppointmentRepository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
@EnableTransactionManagement
public class AdventureFreeAppointmentController {

    @Autowired
    private AdventureFreeAppointmentRepository adventureFreeAppointmentRepository;

    //get all

    @GetMapping("/adventurefreeappointments")
    public List<AdventureFreeAppointment> getAllAdventureFreeAppointments() {
        return adventureFreeAppointmentRepository.findAll();
    }

    @GetMapping("/adventurefreeappointments/{startingDate}/{endingDate}")
    public List<AdventureFreeAppointment> getAllAdventureFreeAppointmentsByStartingDateAndEndingDate(@PathVariable String startingDate, @PathVariable String endingDate) throws ParseException {


        LocalDate startingTime = LocalDate.parse(startingDate);
        LocalDate endingTime = LocalDate.parse(endingDate);

        return adventureFreeAppointmentRepository.findAdventureFreeAppointmentByStartingDateAndEndingDate(startingTime,endingTime);
    }

    //create
    @PostMapping("/adventurefreeappointments/{type}")
    @Transactional
    public AdventureFreeAppointment createAdventureFreeAppointment(@PathVariable String type,@RequestBody AdventureFreeAppointment adventureFreeAppointment) {
        if(type.equals("fishing_instructor") || type.equals("admin") || type.equals("main_admin")) {
        return adventureFreeAppointmentRepository.save(adventureFreeAppointment);
        }
        else{return null;}
    }

    //get by id
    @GetMapping("/adventurefreeappointments/{id}")
    public ResponseEntity<AdventureFreeAppointment> getAdventureFreeAppointmentById(@PathVariable Long id) {
        AdventureFreeAppointment adventureFreeAppointment = adventureFreeAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureFreeAppointment does not exist with id:" + id));
        return ResponseEntity.ok(adventureFreeAppointment);
    }

    //update
    @PutMapping("/adventurefreeappointments/{id}")
    @Transactional
    public ResponseEntity<AdventureFreeAppointment> updateAdventureFreeAppointment(@PathVariable Long id, @RequestBody AdventureFreeAppointment adventureFreeAppointmentDetails) {
        AdventureFreeAppointment adventureFreeAppointment = adventureFreeAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureFreeAppointment does not exist with id:" + id));

        adventureFreeAppointment.setAdventureId(adventureFreeAppointmentDetails.getAdventureId());
        adventureFreeAppointment.setLocation(adventureFreeAppointmentDetails.getLocation());
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
    @Transactional
    public Map<String, Boolean> deleteAdventureFreeAppointment(@PathVariable Long id) {

        AdventureFreeAppointment adventureFreeAppointment = adventureFreeAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureFreeAppointment does not exist with id:" + id));

        adventureFreeAppointmentRepository.delete(adventureFreeAppointment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

    @GetMapping("/adventurefreeappointments/instructor/{instructorid}/{type}")
    public List<AdventureFreeAppointment> getFreeAppointmentByInstructorId(@PathVariable String type,@PathVariable Long instructorid) {
        if(type.equals("fishing_instructor") || type.equals("admin") || type.equals("main_admin")) {
        return adventureFreeAppointmentRepository.findByInstructorId(instructorid);
        }
        else{return null;}
    }

    @GetMapping("/adventurefreeappointments/adventure/{adventureid}")
    public List<AdventureFreeAppointment> getFreeAppointmentByAdventureId(@PathVariable Long adventureid) {
        return adventureFreeAppointmentRepository.findByAdventureId(adventureid);
    }
}
