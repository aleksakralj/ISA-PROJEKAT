package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.Admin;
import stasaaleksadavid.isabackend.model.ClientPenalties;
import stasaaleksadavid.isabackend.repository.ClientPenaltiesRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ClientPenaltiesController {

    @Autowired
    private ClientPenaltiesRepository clientPenaltiesRepository;

    @GetMapping("/clientPenalties")
    public List<ClientPenalties> getAllClientPenalties(){return clientPenaltiesRepository.findAll();}

    @PostMapping("/clientPenalties")
    public  ClientPenalties createClientPenalty(@RequestBody ClientPenalties clientPenalties){
        return clientPenaltiesRepository.save(clientPenalties);
    }

    @GetMapping("/clientPenalties/{userId}")
    public List<ClientPenalties> getClientPenaltiesByUserId(@PathVariable Long userId){
          return clientPenaltiesRepository.getClientPenaltiesByUserId(userId);
    }

    @DeleteMapping("/clientPenalties/{id}")
    public Map<String, Boolean> deleteClientPenalty(@PathVariable Long id){

        ClientPenalties clientPenalties = clientPenaltiesRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Client penalty does not exist with id:"+ id));

        clientPenaltiesRepository.delete(clientPenalties);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

}
