package stasaaleksadavid.isabackend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.DTO.AdventureAppointmentsDTO;
import stasaaleksadavid.isabackend.DTO.Mapper;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.AdventureAppointment;
import stasaaleksadavid.isabackend.model.AdventureHistoryAppointment;
import stasaaleksadavid.isabackend.repository.AdventureAppointmentRepository;
import stasaaleksadavid.isabackend.repository.AdventureHistoryAppointmentRepository;
import stasaaleksadavid.isabackend.repository.AdventureRepository;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static java.util.stream.Collectors.toList;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
@EnableTransactionManagement
public class AdventureHistoryAppointmentController {

    @Autowired
    private AdventureHistoryAppointmentRepository adventureHistoryAppointmentRepository;

    @Autowired
    private AdventureRepository adventureRepository;

    @Autowired
    private AdventureAppointmentRepository adventureAppointmentRepository;

    private Mapper mapper;
    //get all

    @GetMapping("/adventurehistoryappointments/type/{type}")
    public List<AdventureHistoryAppointment> getAllAdventureHistoryAppointments(@PathVariable String type) {
        if(type.equals("admin")|| type.equals("main_admin")) {
        return adventureHistoryAppointmentRepository.findAll();
        }
        else{return null;}
    }

    //create
    @PostMapping("/adventurehistoryappointments")
    @Transactional
    public AdventureHistoryAppointment createAdventureHistoryAppointment(@RequestBody AdventureHistoryAppointment adventureHistoryAppointment) {

        return adventureHistoryAppointmentRepository.save(adventureHistoryAppointment);
    }

    /*
    //get by id
    @GetMapping("/adventurehistoryappointments/{id}")
    public ResponseEntity<AdventureHistoryAppointment> getAdventureHistoryAppointmentById(@PathVariable Long id) {
        AdventureHistoryAppointment adventureHistoryAppointment = adventureHistoryAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureHistoryAppointment does not exist with id:" + id));
        return ResponseEntity.ok(adventureHistoryAppointment);
    }
*/

    @GetMapping("/adventurehistoryappointments/{clientId}")
    public List<AdventureHistoryAppointment> getAdventureHistoryAppointmentByUserId(@PathVariable Long clientId) {

        List<AdventureAppointment> clientAdventures = adventureAppointmentRepository.findByClientId(clientId);
        List<AdventureHistoryAppointment> fixedAppointments = CheckDidTheyPass(clientAdventures, clientId);

        return fixedAppointments;
    }

    public List<AdventureHistoryAppointment> CheckDidTheyPass(List<AdventureAppointment> appointments, Long id) {

        for (AdventureAppointment a: appointments
        ) {
            if(a.getEndingDate().isEqual(LocalDate.now())){

                AdventureHistoryAppointment past = new AdventureHistoryAppointment(
                        a.getAdventureId(),
                        a.getInstructorId(),
                        a.getClientId(),
                        a.getLocation(),
                        a.getStartingDate(),
                        a.getEndingDate(),
                        a.getNumberOfPeople(),
                        a.getAdditionalServices(),
                        a.getPrice()
                );

                adventureHistoryAppointmentRepository.save(past);
                adventureAppointmentRepository.delete(a);
            }
        }


        List<AdventureHistoryAppointment> fixedAppointments = adventureHistoryAppointmentRepository.findByClientId(id);
        return fixedAppointments;
    }



    //update
    @PutMapping("/adventurehistoryappointments/{id}")
    @Transactional
    public ResponseEntity<AdventureHistoryAppointment> updateAdventureHistoryAppointment(@PathVariable Long id, @RequestBody AdventureHistoryAppointment adventureHistoryAppointmentDetails) {
        AdventureHistoryAppointment adventureHistoryAppointment = adventureHistoryAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureHistoryAppointment does not exist with id:" + id));

        adventureHistoryAppointment.setAdventureId(adventureHistoryAppointmentDetails.getAdventureId());
        adventureHistoryAppointment.setLocation(adventureHistoryAppointmentDetails.getLocation());
        adventureHistoryAppointment.setInstructorId(adventureHistoryAppointmentDetails.getInstructorId());
        adventureHistoryAppointment.setStartingDate(adventureHistoryAppointmentDetails.getStartingDate());
        adventureHistoryAppointment.setEndingDate(adventureHistoryAppointmentDetails.getEndingDate());
        adventureHistoryAppointment.setNumberOfPeople(adventureHistoryAppointmentDetails.getNumberOfPeople());
        adventureHistoryAppointment.setAdditionalServices(adventureHistoryAppointmentDetails.getAdditionalServices());
        adventureHistoryAppointment.setPrice(adventureHistoryAppointmentDetails.getPrice());
        adventureHistoryAppointment.setClientId(adventureHistoryAppointmentDetails.getClientId());


        AdventureHistoryAppointment updatedAdventureHistoryAppointment = adventureHistoryAppointmentRepository.save(adventureHistoryAppointment);
        return ResponseEntity.ok(updatedAdventureHistoryAppointment);
    }


    //delete
    @DeleteMapping("/adventurehistoryappointments/{id}")
    @Transactional
    public Map<String, Boolean> deleteAdventureHistoryAppointment(@PathVariable Long id) {

        AdventureHistoryAppointment adventureHistoryAppointment = adventureHistoryAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureHistoryAppointment does not exist with id:" + id));

        adventureHistoryAppointmentRepository.delete(adventureHistoryAppointment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

    @GetMapping("/adventurehistoryappointments/instructor/{instructorid}")
    public List<AdventureHistoryAppointment> getHistoryAppointmentByInstructorId(@PathVariable Long instructorid) {
        return adventureHistoryAppointmentRepository.findByInstructorId(instructorid);
    }

    @GetMapping("/adventurehistoryappointments/adventure/{type}/{adventureid}")
    public List<AdventureHistoryAppointment> getHistoryAppointmentByAdventureId(@PathVariable String type,@PathVariable Long adventureid) {
        if(type.equals("fishing_instructor") || type.equals("admin") || type.equals("main_admin")) {
        return adventureHistoryAppointmentRepository.findByAdventureId(adventureid);
        }
        else{return null;}
    }
}
