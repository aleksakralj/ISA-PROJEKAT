package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.Admin;
import stasaaleksadavid.isabackend.model.ClientReview;
import stasaaleksadavid.isabackend.repository.ClientReviewRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ClientReviewController {
    @Autowired
    private ClientReviewRepository clientReviewRepository;

    //get all

    @GetMapping("/clientreviews")
    public List<ClientReview> getAllAdmins(){return clientReviewRepository.findAll();}

    //create
    @PostMapping("/clientreviews")
    public  ClientReview createClientReview(@RequestBody ClientReview clientReview){
        return clientReviewRepository.save(clientReview);
    }

    //get by id
    @GetMapping("/clientreviews/{id}")
    public ResponseEntity<ClientReview> getClientReviewById(@PathVariable Long id){
        ClientReview clientReview = clientReviewRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ClientReview does not exist with id:"+ id));
        return ResponseEntity.ok(clientReview);
    }

    //update
    @PutMapping("/clientreviews/{id}")
    public ResponseEntity<ClientReview> updateClientReview(@PathVariable Long id,@RequestBody ClientReview clientReviewDetails){
        ClientReview clientReview = clientReviewRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ClientReview does not exist with id:"+ id));

        clientReview.setIdOfReceiver(clientReviewDetails.getIdOfReceiver());
        clientReview.setIdOfSender(clientReviewDetails.getIdOfSender());
        clientReview.setEmailOfReceiver(clientReviewDetails.getEmailOfReceiver());
        clientReview.setEmailOfSender(clientReviewDetails.getEmailOfSender());
        clientReview.setReviewMessage(clientReviewDetails.getReviewMessage());

        ClientReview updatedClientReview = clientReviewRepository.save(clientReview);
        return ResponseEntity.ok(updatedClientReview);
    }


    //delete
    @DeleteMapping("/clientreviews/{id}")
    public Map<String, Boolean> deleteClientReview(@PathVariable Long id){

        ClientReview clientReview = clientReviewRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ClientReview does not exist with id:"+ id));

        clientReviewRepository.delete(clientReview);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

}
