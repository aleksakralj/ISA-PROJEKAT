package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.Complaint;
import stasaaleksadavid.isabackend.repository.ComplaintRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ComplaintController {
    @Autowired
    private ComplaintRepository complaintRepository;


    //get all

    @GetMapping("/complaints")
    public List<Complaint> getAllComplaints(){return complaintRepository.findAll();}

    //create
    @PostMapping("/complaints")
    public  Complaint createComplaint(@RequestBody Complaint complaint){
        return complaintRepository.save(complaint);
    }

    //get by id
    @GetMapping("/complaints/{id}")
    public ResponseEntity<Complaint> getAdminById(@PathVariable Long id){
        Complaint complaint = complaintRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Complaint does not exist with id:"+ id));
        return ResponseEntity.ok(complaint);
    }

    //update
    @PutMapping("/complaints/{id}")
    public ResponseEntity<Complaint> updateComplaint(@PathVariable Long id,@RequestBody Complaint complaintDetails){
        Complaint complaint = complaintRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Complaint does not exist with id:"+ id));

        complaint.setOnWhat(complaintDetails.getOnWhat());
        complaint.setComplaintMessage(complaintDetails.getComplaintMessage());
        complaint.setEmailOfComplaintRecipient(complaintDetails.getEmailOfComplaintRecipient());
        complaint.setEmailOfComplaintSender(complaintDetails.getEmailOfComplaintSender());


        Complaint updatedComplaint = complaintRepository.save(complaint);
        return ResponseEntity.ok(updatedComplaint);
    }


    //delete
    @DeleteMapping("/complaints/{id}")
    public Map<String, Boolean> deleteComplaint(@PathVariable Long id){

        Complaint complaint = complaintRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Complaint does not exist with id:"+ id));

        complaintRepository.delete(complaint);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }
}
