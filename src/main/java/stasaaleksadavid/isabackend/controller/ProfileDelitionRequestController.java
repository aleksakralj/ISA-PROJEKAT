package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.ProfileDelitionRequest;
import stasaaleksadavid.isabackend.model.RegistrationRequest;
import stasaaleksadavid.isabackend.repository.ProfileDelitionRequestRepository;
import stasaaleksadavid.isabackend.repository.RegistrationRequestRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ProfileDelitionRequestController {


    @Autowired
    private ProfileDelitionRequestRepository profileDelitionRequestRepository;

    @GetMapping("/profiledeletionrequests")
    public List<ProfileDelitionRequest> getAllRegistrationRequets() {
        return profileDelitionRequestRepository.findAll();
    }

    @PostMapping("/profiledeletionrequests")
    public ProfileDelitionRequest createProfileDeletionRequest(@RequestBody ProfileDelitionRequest profileDelitionRequest) {
        return profileDelitionRequestRepository.save(profileDelitionRequest);
    }

    @GetMapping("/profiledeletionrequests/{id}")
    public ResponseEntity<ProfileDelitionRequest> getProfileDeletionRequestById(@PathVariable Long id) {
        ProfileDelitionRequest profileDelitionRequest = profileDelitionRequestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Deletion request doesn not exist with id:" + id));
        return ResponseEntity.ok(profileDelitionRequest);
    }

    @DeleteMapping("profiledeletionrequests/{id}")
    public Map<String, Boolean> deleteProfileDeletionRequest(@PathVariable Long id) {

        ProfileDelitionRequest profileDelitionRequest = profileDelitionRequestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Deletion request doesn not exist with id:" + id));

        profileDelitionRequestRepository.delete(profileDelitionRequest);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return  (Map<String,Boolean>) ResponseEntity.ok(response);
    }
}