package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.ClientAdventuresComplaint;
import stasaaleksadavid.isabackend.model.ClientCottageComplaints;
import stasaaleksadavid.isabackend.repository.ClientAdventureComplaintRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
@EnableTransactionManagement
public class ClientAdventureComplaintController {
    
    @Autowired
    private ClientAdventureComplaintRepository clientAdventureComplaintRepository;

    @GetMapping("/adventureComplaints")
    public List<ClientAdventuresComplaint> getAllAdventureComplaints() {return clientAdventureComplaintRepository.findAll();}

    @PostMapping("/adventureComplaints")
    @Transactional
    public ClientAdventuresComplaint createAdventureComplaint(@RequestBody ClientAdventuresComplaint clientAdventuresComplaint) {return clientAdventureComplaintRepository.save(clientAdventuresComplaint);}

    @GetMapping("/adventureComplaints/{id}")
    public ResponseEntity<ClientAdventuresComplaint> getAdventureComplaintById(@PathVariable Long id){
        ClientAdventuresComplaint clientAdventuresComplaint = clientAdventureComplaintRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Adventure complaint does not exist with id:"+ id));
        return ResponseEntity.ok(clientAdventuresComplaint);
    }

    @DeleteMapping("/adventureComplaints/{id}")
    @Transactional
    public Map<String, Boolean> deleteAdventureComplaint(@PathVariable Long id){

        ClientAdventuresComplaint clientAdventuresComplaint = clientAdventureComplaintRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Adventure complaint does not exist with id:"+ id));

        clientAdventureComplaintRepository.delete(clientAdventuresComplaint);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

}
