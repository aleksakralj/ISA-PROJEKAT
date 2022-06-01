package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.AdventureAppointment;
import stasaaleksadavid.isabackend.model.AdventureFreeAppointment;
import stasaaleksadavid.isabackend.model.CottageAppointment;
import stasaaleksadavid.isabackend.model.CottageFreeAppointment;
import stasaaleksadavid.isabackend.repository.CottageAppointmentRepository;
import stasaaleksadavid.isabackend.repository.CottageFreeAppointmentRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CottageAppointmentController {

    @Autowired
    private CottageAppointmentRepository cottageAppointmentRepository;

    @Autowired
    private CottageFreeAppointmentRepository cottageFreeAppointmentRepository;

    //get all

    @GetMapping("/cottageappointments")
    public List<CottageAppointment> getAllCottageAppointments() {
        return cottageAppointmentRepository.findAll();
    }

    //create
    @PostMapping("/cottageappointments")
    public CottageAppointment createCottageAppointment(@RequestBody CottageAppointment cottageAppointment) {

            List<CottageFreeAppointment> cottageFreeAppointments = cottageFreeAppointmentRepository.findByCottageId(cottageAppointment.getCottageId());
            timePartition(cottageFreeAppointments, cottageAppointment);

            return cottageAppointmentRepository.save(cottageAppointment);
    }

    public void timePartition(List<CottageFreeAppointment> freeAppointments, CottageAppointment newAppointment){

        for (CottageFreeAppointment appointment:freeAppointments) {
            if (appointment.getStartingDate().isBefore(newAppointment.getStartingDate()) && appointment.getEndingDate().isAfter(newAppointment.getEndingDate())) {

                CottageFreeAppointment firstAppointment = new CottageFreeAppointment(
                        appointment.getCottageId(),
                        appointment.getOwnerId(),
                        appointment.getLocation(),
                        appointment.getStartingDate(),
                        newAppointment.getStartingDate(),
                        appointment.getNumberOfPeople(),
                        appointment.getAdditionalServices(),
                        appointment.getPrice()
                );
                CottageFreeAppointment secondAppointment = new CottageFreeAppointment(
                        appointment.getOwnerId(),
                        appointment.getCottageId(),
                        appointment.getLocation(),
                        newAppointment.getEndingDate(),
                        appointment.getEndingDate(),
                        appointment.getNumberOfPeople(),
                        appointment.getAdditionalServices(),
                        appointment.getPrice()
                );

                cottageFreeAppointmentRepository.delete(appointment);
                cottageFreeAppointmentRepository.save(firstAppointment);
                cottageFreeAppointmentRepository.save(secondAppointment);
            }
        }
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
        cottageAppointment.setPrice(cottageAppointmentDetails.getPrice());


        CottageAppointment updatedCottageAppointment = cottageAppointmentRepository.save(cottageAppointment);
        return ResponseEntity.ok(updatedCottageAppointment);
    }


    //delete
    @DeleteMapping("/cottageappointments/{id}")
    public void deleteCottageAppointment(@PathVariable Long id) {

        CottageAppointment cottageAppointment = cottageAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("CottageAppointment does not exist with id:" + id));
        List<CottageFreeAppointment> cottageFreeAppointments = cottageFreeAppointmentRepository.findByCottageId(cottageAppointment.getCottageId());

        fixTimesOfFreeAppointments(cottageAppointment, cottageFreeAppointments);
    }

    public void fixTimesOfFreeAppointments(CottageAppointment appointment, List<CottageFreeAppointment> freeAppointments) {

        CottageFreeAppointment adjustedFreeAppointmentBefore = findFreeAppointmentsBeforeChoosenAppointment(appointment, freeAppointments);
        CottageFreeAppointment adjustedFreeAppointmentAfter = findFreeAppointmentsAfterChoosenAppointment(appointment, freeAppointments);
        fuseCottageFreeAppointments(adjustedFreeAppointmentAfter, adjustedFreeAppointmentBefore, appointment);
    }

    public CottageFreeAppointment findFreeAppointmentsBeforeChoosenAppointment(CottageAppointment appointment, List<CottageFreeAppointment> freeAppointments) {

        for (CottageFreeAppointment freeAppointment : freeAppointments
        ) {
            if ((freeAppointment.getEndingDate().isEqual(appointment.getStartingDate())) &&
                freeAppointment.getPrice() == appointment.getPrice()
            ) {
                return freeAppointment;
            }
        }
        return null;
    }

    public CottageFreeAppointment findFreeAppointmentsAfterChoosenAppointment(CottageAppointment appointment, List<CottageFreeAppointment> freeAppointments) {

        for (CottageFreeAppointment freeAppointment: freeAppointments) {
            if (freeAppointment.getStartingDate().isEqual(appointment.getEndingDate())){
                return freeAppointment;
            }
        }
        return null;
    }

    public void fuseCottageFreeAppointments(CottageFreeAppointment nextFreeAppointment, CottageFreeAppointment previousFreeAppointment, CottageAppointment appointment){

        if(nextFreeAppointment == null && previousFreeAppointment == null) {

            cottageAppointmentRepository.delete(appointment);

            CottageFreeAppointment newFreeAppointment = new CottageFreeAppointment(
                    appointment.getCottageId(),
                    appointment.getOwnerId(),
                    appointment.getLocation(),
                    appointment.getStartingDate(),
                    appointment.getEndingDate(),
                    appointment.getNumberOfPeople(),
                    appointment.getAdditionalServices(),
                    appointment.getPrice()
            );

            cottageFreeAppointmentRepository.save(newFreeAppointment);
        }

        else if (nextFreeAppointment == null && previousFreeAppointment != null) {

            cottageAppointmentRepository.delete(appointment);

            CottageFreeAppointment newFreeAppointment = new CottageFreeAppointment(
                    appointment.getCottageId(),
                    appointment.getOwnerId(),
                    appointment.getLocation(),
                    previousFreeAppointment.getStartingDate(),
                    appointment.getEndingDate(),
                    previousFreeAppointment.getNumberOfPeople(),
                    appointment.getAdditionalServices(),
                    appointment.getPrice()
            );

            cottageFreeAppointmentRepository.delete(previousFreeAppointment);
            cottageFreeAppointmentRepository.save(newFreeAppointment);
        }

        else if (nextFreeAppointment != null && previousFreeAppointment == null) {

            cottageAppointmentRepository.delete(appointment);

            CottageFreeAppointment newFreeAppointment = new CottageFreeAppointment(
                    appointment.getCottageId(),
                    appointment.getOwnerId(),
                    appointment.getLocation(),
                    appointment.getStartingDate(),
                    nextFreeAppointment.getEndingDate(),
                    nextFreeAppointment.getNumberOfPeople(),
                    appointment.getAdditionalServices(),
                    appointment.getPrice()
            );

            cottageFreeAppointmentRepository.delete(nextFreeAppointment);
            cottageFreeAppointmentRepository.save(newFreeAppointment);
        }

        else {

            cottageAppointmentRepository.delete(appointment);

            CottageFreeAppointment newFreeAppointment = new CottageFreeAppointment(
                    appointment.getCottageId(),
                    appointment.getOwnerId(),
                    appointment.getLocation(),
                    previousFreeAppointment.getStartingDate(),
                    nextFreeAppointment.getEndingDate(),
                    previousFreeAppointment.getNumberOfPeople(),
                    appointment.getAdditionalServices(),
                    appointment.getPrice()
            );

            cottageFreeAppointmentRepository.delete(previousFreeAppointment);
            cottageFreeAppointmentRepository.delete(nextFreeAppointment);
            cottageFreeAppointmentRepository.save(newFreeAppointment);
        }
    }



    //get by cottage id\
    @GetMapping("/cottageappointments/cottage/{type}/{cottageid}")
    public List<CottageAppointment> getAppointmentByCottageId(@PathVariable String type,@PathVariable Long cottageid) {
        if (type.equals("admin") || type.equals("cottage_owner") || type.equals("main_admin")) {
            return cottageAppointmentRepository.findByCottageId(cottageid);
        }
        else return null;
    }

    @GetMapping("/cottageappointments/client/{clientId}")
    public List<CottageAppointment> getAllAppointmentsForSpecificUser(@PathVariable Long clientId){

        return cottageAppointmentRepository.findAllByClientId(clientId);
    }

}

