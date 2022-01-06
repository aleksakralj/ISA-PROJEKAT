package stasaaleksadavid.isabackend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.CottageAppointment;
import stasaaleksadavid.isabackend.model.CottageFreeAppointment;
import stasaaleksadavid.isabackend.repository.CottageFreeAppointmentRepository;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CottageFreeAppointmentController {

    @Autowired
    private CottageFreeAppointmentRepository cottageFreeAppointmentRepository;

    //get all

    @GetMapping("/cottagefreeappointments")
    public List<CottageFreeAppointment> getAllCottageFreeAppointments() {
        return cottageFreeAppointmentRepository.findAll();
    }

    //create
    @PostMapping("/cottagefreeappointments")
    public CottageFreeAppointment createCottageFreeAppointment(@RequestBody CottageFreeAppointment cottageFreeAppointment) {
        return cottageFreeAppointmentRepository.save(cottageFreeAppointment);
    }

    //get by id
    @GetMapping("/cottagefreeappointments/{id}")
    public ResponseEntity<CottageFreeAppointment> getCottageFreeAppointmentById(@PathVariable Long id) {
        CottageFreeAppointment cottageFreeAppointment = cottageFreeAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("CottageFreeAppointment does not exist with id:" + id));
        return ResponseEntity.ok(cottageFreeAppointment);
    }

    //update
    @PutMapping("/cottagefreeappointments/{id}")
    public ResponseEntity<CottageFreeAppointment> updateCottageFreeAppointment(@PathVariable Long id, @RequestBody CottageFreeAppointment cottageFreeAppointmentDetails) {
        CottageFreeAppointment cottageFreeAppointment = cottageFreeAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("CottageFreeAppointment does not exist with id:" + id));

        cottageFreeAppointment.setCottageId(cottageFreeAppointmentDetails.getCottageId());
        cottageFreeAppointment.setStartingDate(cottageFreeAppointmentDetails.getStartingDate());
        cottageFreeAppointment.setEndingDate(cottageFreeAppointmentDetails.getEndingDate());
        cottageFreeAppointment.setNumberOfPeople(cottageFreeAppointmentDetails.getNumberOfPeople());
        cottageFreeAppointment.setAdditionalServices(cottageFreeAppointmentDetails.getAdditionalServices());
        cottageFreeAppointment.setPrice(cottageFreeAppointment.getPrice());


        CottageFreeAppointment updatedCottageFreeAppointment = cottageFreeAppointmentRepository.save(cottageFreeAppointment);
        return ResponseEntity.ok(updatedCottageFreeAppointment);
    }


    //delete
    @DeleteMapping("/cottagefreeappointments/{id}")
    public Map<String, Boolean> deleteCottageFreeAppointment(@PathVariable Long id) {

        CottageFreeAppointment cottageFreeAppointment = cottageFreeAppointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("CottageFreeAppointment does not exist with id:" + id));

        cottageFreeAppointmentRepository.delete(cottageFreeAppointment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

    @GetMapping("/cottagefreeappointments/cottage/{cottageid}")
    public List<CottageFreeAppointment> getFreeAppointmentByCottageId(@PathVariable Long cottageid) {
        return cottageFreeAppointmentRepository.findByCottageId(cottageid);
    }
}
