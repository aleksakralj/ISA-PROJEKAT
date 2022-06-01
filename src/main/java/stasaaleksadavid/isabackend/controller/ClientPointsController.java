package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.*;
import stasaaleksadavid.isabackend.repository.ClientPenaltiesRepository;
import stasaaleksadavid.isabackend.repository.ClientPointsRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ClientPointsController {

    @Autowired
    private ClientPointsRepository clientPointsRepository;

    @Autowired
    private ClientPenaltiesRepository clientPenaltiesRepository;

    @GetMapping("/clientPoints")
    public List<ClientPoints> getAllClientPoints(){return clientPointsRepository.findAll();}

    @PostMapping("/clientPoints")
    public  ClientPoints createClientPoints(@RequestBody ClientPoints userPoints){
        return clientPointsRepository.save(userPoints);
    }

    @GetMapping("/clientPoints/{id}")
    public ResponseEntity<ClientPoints> getClientPointsById(@PathVariable Long id){
        ClientPoints clientPoints = clientPointsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Client points does not exist with id:"+ id));
        return ResponseEntity.ok(clientPoints);
    }

    @DeleteMapping("/clientPoints/{id}")
    public Map<String, Boolean> deleteClientPoints(@PathVariable Long id){

        ClientPoints clientPoints = clientPointsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Client points does not exist with id:"+ id));

        clientPointsRepository.delete(clientPoints);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

    @PutMapping("/clientPoints/{points}/{userId}")
    public ResponseEntity<ClientPoints> updateClientPoints(@PathVariable int points, @PathVariable Long userId) {

        ClientPoints clientPoints = clientPointsRepository.getById(userId);

        if(clientPoints.getPoints() + points < 0) {

            ClientPenalties penalty = new ClientPenalties(
                    userId,
                    LocalDateTime.now()
            );

            clientPenaltiesRepository.save(penalty);
            clientPoints.setPoints(clientPoints.getPoints()+points);
            clientPoints.setUserCategory(LoyaltyCategory.BRONZE);
            ClientPoints updatedPoints = clientPointsRepository.save(clientPoints);
            return ResponseEntity.ok(updatedPoints);
        }
        else if(clientPoints.getPoints() + points >= 0 && clientPoints.getPoints() + points <500) {
            clientPoints.setPoints(clientPoints.getPoints()+points);
            clientPoints.setUserCategory(LoyaltyCategory.BRONZE);
            ClientPoints updatedPoints = clientPointsRepository.save(clientPoints);
            return ResponseEntity.ok(updatedPoints);
        }
        else if(clientPoints.getPoints() + points >= 500 && clientPoints.getPoints() + points < 1500) {

            clientPoints.setPoints(clientPoints.getPoints()+points);
            clientPoints.setUserCategory(LoyaltyCategory.SILVER);
            ClientPoints updatedPoints = clientPointsRepository.save(clientPoints);
            return ResponseEntity.ok(updatedPoints);
        }
        else if(clientPoints.getPoints() + points >= 1500 && clientPoints.getPoints() + points < 3000) {
            clientPoints.setPoints(clientPoints.getPoints()+points);
            clientPoints.setUserCategory(LoyaltyCategory.GOLD);
            ClientPoints updatedPoints = clientPointsRepository.save(clientPoints);
            return ResponseEntity.ok(updatedPoints);
        }
        else {
            clientPoints.setPoints(clientPoints.getPoints()+points);
            clientPoints.setUserCategory(LoyaltyCategory.PLATINUM);
            ClientPoints updatedPoints = clientPointsRepository.save(clientPoints);
            return ResponseEntity.ok(updatedPoints);
        }
    }
}
