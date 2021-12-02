package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.Admin;
import stasaaleksadavid.isabackend.model.RegistrationRequest;
import stasaaleksadavid.isabackend.repository.RegistrationRequestRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class RegistrationRequestController {

    @Autowired
    private RegistrationRequestRepository registrationRequestRepository;

    //get all

    @GetMapping("/registrationrequests")
    public List<RegistrationRequest> getAllRegistrationRequets(){return registrationRequestRepository.findAll();}

    //create

    @PostMapping("/registrationrequests")
    public RegistrationRequest createRegistrationRequest(@RequestBody RegistrationRequest registrationRequest){return registrationRequestRepository.save(registrationRequest);}

    //get by id

    @GetMapping("/registrationrequests/{id}")
    public ResponseEntity <RegistrationRequest> getRegistrationRequestById(@PathVariable Long id) {
        RegistrationRequest registrationRequest = registrationRequestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Registration Request does not exist with id:" + id));
        return ResponseEntity.ok(registrationRequest);
    }

    //delete
    @DeleteMapping("/registrationrequests/{id}")
    public Map<String, Boolean> deleteRegistrationRequest(@PathVariable Long id){

        RegistrationRequest registrationRequest = registrationRequestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Registration Request does not exist with id:" + id));

        registrationRequestRepository.delete(registrationRequest);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }
}
