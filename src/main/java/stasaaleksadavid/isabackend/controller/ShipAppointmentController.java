package stasaaleksadavid.isabackend.controller;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import stasaaleksadavid.isabackend.repository.ShipFreeAppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.*;
import stasaaleksadavid.isabackend.repository.ShipAppointmentRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
@EnableTransactionManagement
public class ShipAppointmentController {
    @Autowired
    private ShipAppointmentRepository shipAppointmentRepository;

    @Autowired
    private ShipFreeAppointmentRepository shipFreeAppointmentRepository;

//get all

    @GetMapping("/shipappointments")
    public List<ShipAppointment> getAllShipAppointments() {
        return shipAppointmentRepository.findAll();
    }

    //create
    @PostMapping("/shipappointments")
    @Transactional
    public ShipAppointment createShipAppointment(@RequestBody ShipAppointment shipAppointment) {

        List<ShipFreeAppointment> shipFreeAppointments = shipFreeAppointmentRepository.findByShipId(shipAppointment.getShipId());
        timePartition(shipFreeAppointments, shipAppointment);

        return shipAppointmentRepository.save(shipAppointment);
    }

    public void timePartition(List<ShipFreeAppointment> freeAppointments, ShipAppointment newAppointment){
        for (ShipFreeAppointment appointment:freeAppointments) {
            if(appointment.getStartingDate().isBefore(newAppointment.getStartingDate()) && appointment.getEndingDate().isAfter(newAppointment.getEndingDate())){

                ShipFreeAppointment firstAppointment = new ShipFreeAppointment(
                        appointment.getShipOwner(),
                        appointment.getShipId(),
                        appointment.getLocation(),
                        appointment.getStartingDate(),
                        newAppointment.getStartingDate(),
                        appointment.getNumberOfPeople(),
                        appointment.getAdditionalServices(),
                        appointment.getPrice()
                );

                ShipFreeAppointment secondAppointment = new ShipFreeAppointment(
                        appointment.getShipOwner(),
                        appointment.getShipId(),
                        appointment.getLocation(),
                        newAppointment.getEndingDate(),
                        appointment.getEndingDate(),
                        appointment.getNumberOfPeople(),
                        appointment.getAdditionalServices(),
                        appointment.getPrice()
                );

                shipFreeAppointmentRepository.delete(appointment);
                shipFreeAppointmentRepository.save(firstAppointment);
                shipFreeAppointmentRepository.save(secondAppointment);

            }
        }

    }

    //get by id
    @GetMapping("/shipappointments/{id}")
    public ResponseEntity<ShipAppointment> getShipAppointmentById(@PathVariable Long id) {
        ShipAppointment shipAppointment = shipAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ShipAppointment does not exist with id:" + id));
        return ResponseEntity.ok(shipAppointment);
    }

    //update
    @PutMapping("/shipappointments/{id}")
    @Transactional
    public ResponseEntity<ShipAppointment> updateShipAppointment(@PathVariable Long id, @RequestBody ShipAppointment shipAppointmentDetails) {
        ShipAppointment shipAppointment = shipAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ShipAppointment does not exist with id:" + id));

        shipAppointment.setClientId(shipAppointmentDetails.getClientId());
        shipAppointment.setShipId(shipAppointmentDetails.getShipId());
        shipAppointment.setStartingDate(shipAppointmentDetails.getStartingDate());
        shipAppointment.setEndingDate(shipAppointmentDetails.getEndingDate());
        shipAppointment.setNumberOfPeople(shipAppointmentDetails.getNumberOfPeople());
        shipAppointment.setAdditionalServices(shipAppointmentDetails.getAdditionalServices());
        shipAppointment.setPrice(shipAppointmentDetails.getPrice());


        ShipAppointment updatedShipAppointment = shipAppointmentRepository.save(shipAppointment);
        return ResponseEntity.ok(updatedShipAppointment);
    }


    //delete
    @DeleteMapping("/shipappointments/{id}")
    @Transactional
    public void deleteShipAppointment(@PathVariable Long id) {

        ShipAppointment shipAppointment = shipAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ShipAppointment does not exist with id:" + id));
        List<ShipFreeAppointment> shipFreeAppointments = shipFreeAppointmentRepository.findByShipId(shipAppointment.getShipId());

        fixTimesOfFreeAppointments(shipAppointment, shipFreeAppointments);
    }


    public void fixTimesOfFreeAppointments(ShipAppointment appointment, List<ShipFreeAppointment> freeAppointments) {

        ShipFreeAppointment adjustedFreeAppointmentBefore = findFreeAppointmentsBeforeChoosenAppointment(appointment, freeAppointments);
        ShipFreeAppointment adjustedFreeAppointmentAfter = findFreeAppointmentsAfterChoosenAppointment(appointment, freeAppointments);
        fuseShipFreeAppointments(adjustedFreeAppointmentAfter, adjustedFreeAppointmentBefore, appointment);

    }

    public ShipFreeAppointment findFreeAppointmentsBeforeChoosenAppointment(ShipAppointment appointment, List<ShipFreeAppointment> freeAppointments) {

        for (ShipFreeAppointment freeAppointment : freeAppointments
        ) {
            if ((freeAppointment.getEndingDate().isEqual(appointment.getStartingDate())) &&
                    freeAppointment.getPrice() == appointment.getPrice()
            ) {
                return freeAppointment;
            }
        }
        return null;
    }

    public ShipFreeAppointment findFreeAppointmentsAfterChoosenAppointment(ShipAppointment appointment, List<ShipFreeAppointment> freeAppointments) {

        for (ShipFreeAppointment freeAppointment: freeAppointments) {
            if (freeAppointment.getStartingDate().isEqual(appointment.getEndingDate())){
                return freeAppointment;
            }
        }
        return null;
    }

    public void fuseShipFreeAppointments(ShipFreeAppointment nextFreeAppointment, ShipFreeAppointment previousFreeAppointment, ShipAppointment appointment) {

        if(nextFreeAppointment == null && previousFreeAppointment == null) {
            shipAppointmentRepository.delete(appointment);

            ShipFreeAppointment newFreeAppointment = new ShipFreeAppointment(
                    appointment.getShipId(),
                    appointment.getShipOwner(),
                    appointment.getLocation(),
                    appointment.getStartingDate(),
                    appointment.getEndingDate(),
                    appointment.getNumberOfPeople(),
                    appointment.getAdditionalServices(),
                    appointment.getPrice()
            );

            shipFreeAppointmentRepository.save(newFreeAppointment);
        }
        else if (nextFreeAppointment == null && previousFreeAppointment !=null) {
            shipAppointmentRepository.delete(appointment);

            ShipFreeAppointment newFreeAppointment = new ShipFreeAppointment(
                    appointment.getShipId(),
                    appointment.getShipOwner(),
                    appointment.getLocation(),
                    previousFreeAppointment.getStartingDate(),
                    appointment.getEndingDate(),
                    previousFreeAppointment.getNumberOfPeople(),
                    appointment.getAdditionalServices(),
                    appointment.getPrice()
            );
            shipFreeAppointmentRepository.delete(previousFreeAppointment);
            shipFreeAppointmentRepository.save(newFreeAppointment);
        }

        else if (nextFreeAppointment != null && previousFreeAppointment == null) {
            shipAppointmentRepository.delete(appointment);

            ShipFreeAppointment newFreeAppointment = new ShipFreeAppointment(
                    appointment.getShipId(),
                    appointment.getShipOwner(),
                    appointment.getLocation(),
                    appointment.getStartingDate(),
                    nextFreeAppointment.getEndingDate(),
                    nextFreeAppointment.getNumberOfPeople(),
                    appointment.getAdditionalServices(),
                    appointment.getPrice()
            );
            shipFreeAppointmentRepository.delete(nextFreeAppointment);
            shipFreeAppointmentRepository.save(newFreeAppointment);
        }

        else {
            shipAppointmentRepository.delete(appointment);

            ShipFreeAppointment newFreeAppointment = new ShipFreeAppointment(
                    appointment.getShipId(),
                    appointment.getShipOwner(),
                    appointment.getLocation(),
                    previousFreeAppointment.getStartingDate(),
                    nextFreeAppointment.getEndingDate(),
                    nextFreeAppointment.getNumberOfPeople(),
                    appointment.getAdditionalServices(),
                    appointment.getPrice()
            );
            shipFreeAppointmentRepository.delete(previousFreeAppointment);
            shipFreeAppointmentRepository.delete(nextFreeAppointment);
            shipFreeAppointmentRepository.save(newFreeAppointment);
        }
    }

    @GetMapping("/shipappointments/client/{clientId}")
    public List<ShipAppointment> getAllAppointmentsForSpecificUser(@PathVariable Long clientId) {
        return shipAppointmentRepository.findAllByClientId(clientId);
    }


    @GetMapping("/shipappointments/ship/{shipid}")
    public List<ShipAppointment> getAppointmentByShipId(@PathVariable Long shipid) {
            return shipAppointmentRepository.findByShipId(shipid);
    }
}

