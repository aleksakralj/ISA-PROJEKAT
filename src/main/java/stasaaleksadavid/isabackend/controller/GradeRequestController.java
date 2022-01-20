package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.GradeRequest;
import stasaaleksadavid.isabackend.repository.GradeRequestRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class GradeRequestController {
    @Autowired
    private GradeRequestRepository gradeRequestRepository;

    //get all

    @GetMapping("/graderequests")
    public List<GradeRequest> getAllGradeRequests(){return gradeRequestRepository.findAll();}

    //create
    @PostMapping("/graderequests")
    public  GradeRequest createGradeRequest(@RequestBody GradeRequest gradeRequest){
        return gradeRequestRepository.save(gradeRequest);
    }

    //get by id
    @GetMapping("/graderequests/{id}")
    public ResponseEntity<GradeRequest> getGradeById(@PathVariable Long id){
        GradeRequest gradeRequest = gradeRequestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("GradeRequest does not exist with id:"+ id));
        return ResponseEntity.ok(gradeRequest);
    }

    //update
    @PutMapping("/graderequests/{id}")
    public ResponseEntity<GradeRequest> updateGrade(@PathVariable Long id,@RequestBody GradeRequest gradeRequestDetails){
        GradeRequest gradeRequest = gradeRequestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("GradeRequest does not exist with id:"+ id));

        gradeRequest.setGrade(gradeRequestDetails.getGrade());
        gradeRequest.setType(gradeRequestDetails.getType());
        gradeRequest.setMessage(gradeRequestDetails.getMessage());
        gradeRequest.setEmail(gradeRequestDetails.getEmail());
        
        GradeRequest updatedGradeRequest = gradeRequestRepository.save(gradeRequest);
        return ResponseEntity.ok(updatedGradeRequest);
    }


    //delete
    @DeleteMapping("/graderequests/{id}")
    public Map<String, Boolean> deleteGrade(@PathVariable Long id){

        GradeRequest gradeRequest = gradeRequestRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("GradeRequest does not exist with id:"+ id));

        gradeRequestRepository.delete(gradeRequest);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }
}
