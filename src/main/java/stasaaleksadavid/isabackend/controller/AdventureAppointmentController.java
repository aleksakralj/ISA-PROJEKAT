package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.AdventureAppointment;
import stasaaleksadavid.isabackend.model.CottageAppointment;
import stasaaleksadavid.isabackend.model.CottageFreeAppointment;
import stasaaleksadavid.isabackend.repository.AdventureAppointmentRepository;
import stasaaleksadavid.isabackend.repository.AdventureFreeAppointmentRepository;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import stasaaleksadavid.isabackend.model.*;
import stasaaleksadavid.isabackend.repository.AdventureHistoryAppointmentRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
@EnableTransactionManagement
public class AdventureAppointmentController {

    @Autowired
    private AdventureAppointmentRepository adventureAppointmentRepository;

    @Autowired
    private AdventureFreeAppointmentRepository adventureFreeAppointmentRepository;
    //get all

    @Autowired
    private AdventureHistoryAppointmentRepository adventureHistoryAppointmentRepository;


    /*
    @GetMapping("/adventureappointments/{type}")
  public List<AdventureAppointment> getAllAdventureAppointments(@PathVariable String type) {
        if(type.equals("admin")|| type.equals("main_admin")) {
            return adventureAppointmentRepository.findAll();
        }
        else{return null;}

    }
*/

    //create
    @PostMapping("/adventureappointments")
    @Transactional
    public AdventureAppointment createAdventureAppointment(@RequestBody AdventureAppointment adventureAppointment) {

        List<AdventureFreeAppointment> adventureFreeAppointments = adventureFreeAppointmentRepository.findByAdventureId(adventureAppointment.getAdventureId());
        timePartition(adventureFreeAppointments, adventureAppointment);

        return adventureAppointmentRepository.save(adventureAppointment);
    }

    public void timePartition(List<AdventureFreeAppointment> freeAppointments, AdventureAppointment newAppointment){

        for (AdventureFreeAppointment appointment:freeAppointments) {
            if(appointment.getStartingDate().isBefore(newAppointment.getStartingDate()) && appointment.getEndingDate().isAfter(newAppointment.getEndingDate())){

                AdventureFreeAppointment firstAppointment = new AdventureFreeAppointment(
                        appointment.getInstructorId(),
                        appointment.getAdventureId(),
                        appointment.getLocation(),
                        appointment.getStartingDate(),
                        newAppointment.getStartingDate(),
                        appointment.getNumberOfPeople(),
                        appointment.getAdditionalServices(),
                        appointment.getPrice()
                );

                AdventureFreeAppointment secondAppointment = new AdventureFreeAppointment(
                        appointment.getInstructorId(),
                        appointment.getAdventureId(),
                        appointment.getLocation(),
                        newAppointment.getEndingDate(),
                        appointment.getEndingDate(),
                        appointment.getNumberOfPeople(),
                        appointment.getAdditionalServices(),
                        appointment.getPrice()
                );

                adventureFreeAppointmentRepository.delete(appointment);
                adventureFreeAppointmentRepository.save(firstAppointment);
                adventureFreeAppointmentRepository.save(secondAppointment);

            }
        }



    }
  /*
    //get by id
    @GetMapping("/adventureappointments/{id}")
    public ResponseEntity<AdventureAppointment> getAdventureAppointmentById(@PathVariable Long id) {
        AdventureAppointment adventureAppointment = adventureAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureAppointment does not exist with id:" + id));
        return ResponseEntity.ok(adventureAppointment);
    }
*/
    //update
    @PutMapping("/adventureappointments/{id}")
    @Transactional
    public ResponseEntity<AdventureAppointment> updateAdventureAppointment(@PathVariable Long id, @RequestBody AdventureAppointment adventureAppointmentDetails) {
        AdventureAppointment adventureAppointment = adventureAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureAppointment does not exist with id:" + id));

        adventureAppointment.setClientId(adventureAppointmentDetails.getClientId());
        adventureAppointment.setAdventureId(adventureAppointmentDetails.getAdventureId());
        adventureAppointment.setStartingDate(adventureAppointmentDetails.getStartingDate());
        adventureAppointment.setEndingDate(adventureAppointmentDetails.getEndingDate());
        adventureAppointment.setNumberOfPeople(adventureAppointmentDetails.getNumberOfPeople());
        adventureAppointment.setAdditionalServices(adventureAppointmentDetails.getAdditionalServices());
        adventureAppointment.setPrice(adventureAppointmentDetails.getPrice());
        adventureAppointment.setLocation(adventureAppointmentDetails.getLocation());
        adventureAppointment.setInstructorId(adventureAppointmentDetails.getInstructorId());


        AdventureAppointment updatedAdventureAppointment = adventureAppointmentRepository.save(adventureAppointment);
        return ResponseEntity.ok(updatedAdventureAppointment);
    }


    //delete
    @DeleteMapping("/adventureappointments/{id}")
    @Transactional
    public void deleteAdventureAppointment(@PathVariable Long id) {

        AdventureAppointment adventureAppointment = adventureAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureAppointment does not exist with id:" + id));
        List<AdventureFreeAppointment> adventureFreeAppointments = adventureFreeAppointmentRepository.findByAdventureId(adventureAppointment.getAdventureId());
        FixTimesOfFreeAppointments(adventureAppointment, adventureFreeAppointments);

    }


    public void FixTimesOfFreeAppointments(AdventureAppointment appointment, List<AdventureFreeAppointment> freeAppointments) {

        AdventureFreeAppointment adjustedFreeAppointmentBefore = findFreeAppointmentsBeforeChoosenAppointment(appointment, freeAppointments);
        AdventureFreeAppointment adjustedFreeAppointmentAfter = findFreeAppointmentsAfterChoosenAppointment(appointment, freeAppointments);
        fuseAdventureFreeAppointments(adjustedFreeAppointmentAfter, adjustedFreeAppointmentBefore, appointment);
    }

    public AdventureFreeAppointment findFreeAppointmentsBeforeChoosenAppointment(AdventureAppointment appointment, List<AdventureFreeAppointment> freeAppointments) {

        for (AdventureFreeAppointment freeAppointment : freeAppointments
        ) {
            if (freeAppointment.getEndingDate().isEqual(appointment.getStartingDate())) {
                return freeAppointment;
            }
        }
        return null;
    }

    public AdventureFreeAppointment findFreeAppointmentsAfterChoosenAppointment(AdventureAppointment appointment, List<AdventureFreeAppointment> freeAppointments) {

        for (AdventureFreeAppointment freeAppointment: freeAppointments) {
            if (freeAppointment.getStartingDate().isEqual(appointment.getEndingDate())){
                return freeAppointment;
            }
        }
        return null;
    }

    public void fuseAdventureFreeAppointments(AdventureFreeAppointment nextFreeAppointment, AdventureFreeAppointment previusFreeAppointment, AdventureAppointment appointment) {

        if(nextFreeAppointment == null && previusFreeAppointment == null) {

            adventureAppointmentRepository.delete(appointment);

            AdventureFreeAppointment newFreeAppointment = new AdventureFreeAppointment(
                    appointment.getInstructorId(),
                    appointment.getAdventureId(),
                    appointment.getLocation(),
                    appointment.getStartingDate(),
                    appointment.getEndingDate(),
                    appointment.getNumberOfPeople(),
                    appointment.getAdditionalServices(),
                    appointment.getPrice()
            );

            adventureFreeAppointmentRepository.save(newFreeAppointment);

        }
        else if(nextFreeAppointment == null && previusFreeAppointment != null) {

            adventureAppointmentRepository.delete(appointment);

            AdventureFreeAppointment newFreeAppointment = new AdventureFreeAppointment(
                appointment.getInstructorId(),
                appointment.getAdventureId(),
                appointment.getLocation(),
                previusFreeAppointment.getStartingDate(),
                appointment.getEndingDate(),
                appointment.getNumberOfPeople(),
                appointment.getAdditionalServices(),
                appointment.getPrice()
            );
            adventureFreeAppointmentRepository.delete(previusFreeAppointment);
            adventureFreeAppointmentRepository.save(newFreeAppointment);
        }

        else if(nextFreeAppointment != null && previusFreeAppointment == null) {

            adventureAppointmentRepository.delete(appointment);

            AdventureFreeAppointment newFreeAppointment = new AdventureFreeAppointment(
                    appointment.getInstructorId(),
                    appointment.getAdventureId(),
                    appointment.getLocation(),
                    appointment.getStartingDate(),
                    nextFreeAppointment.getEndingDate(),
                    appointment.getNumberOfPeople(),
                    appointment.getAdditionalServices(),
                    appointment.getPrice()
            );
            adventureFreeAppointmentRepository.delete(nextFreeAppointment);
            adventureFreeAppointmentRepository.save(newFreeAppointment);

        }
        else {

            adventureAppointmentRepository.delete(appointment);

            AdventureFreeAppointment newFreeAppointment = new AdventureFreeAppointment(
                    appointment.getInstructorId(),
                    appointment.getAdventureId(),
                    appointment.getLocation(),
                    previusFreeAppointment.getStartingDate(),
                    nextFreeAppointment.getEndingDate(),
                    appointment.getNumberOfPeople(),
                    appointment.getAdditionalServices(),
                    appointment.getPrice()
            );
            adventureFreeAppointmentRepository.delete(previusFreeAppointment);
            adventureFreeAppointmentRepository.delete(nextFreeAppointment);
            adventureFreeAppointmentRepository.save(newFreeAppointment);
        }
    }

    @GetMapping("/adventureappointments/instructor/{type}/{instructorid}")
    public List<AdventureAppointment> getAppointmentByInstructorId(@PathVariable String type,@PathVariable Long instructorid) {
        if(type.equals("fishing_instructor") || type.equals("admin") || type.equals("main_admin")) {
        //return adventureAppointmentRepository.findByInstructorId(instructorid);
            return null;
        }
        else{return null;}
    }

    @GetMapping("/adventureappointments/adventure/{type}/{adventureid}")
    public List<AdventureAppointment> getAppointmentByAdventureId(@PathVariable String type,@PathVariable Long adventureid) {
        if(type.equals("fishing_instructor") || type.equals("admin") || type.equals("main_admin")) {
     //   return adventureAppointmentRepository.findByAdventureId(adventureid);
            return null;
        }
        else{return null;}
    }

    @GetMapping("/adventureappointments/{clientId}")
    public List<AdventureAppointment> getAdventureAppointmentsForSpecificUser(@PathVariable Long clientId ){

        List<AdventureAppointment> clientAdventures = adventureAppointmentRepository.findByClientId(clientId);
        List<AdventureAppointment> fixedAppointments = CheckDidTheyPass(clientAdventures, clientId);

        return fixedAppointments;
    }

    public List<AdventureAppointment> CheckDidTheyPass(List<AdventureAppointment> appointments, Long id) {

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


        List<AdventureAppointment> fixedAppointments = adventureAppointmentRepository.findByClientId(id);
        return fixedAppointments;
    }



}