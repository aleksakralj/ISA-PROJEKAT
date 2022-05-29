package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.AdventureSubscription;
import stasaaleksadavid.isabackend.model.ShipSubscription;
import stasaaleksadavid.isabackend.repository.ShipSubscriptionRepository;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ShipSubscriptionController {

    @Autowired
    private ShipSubscriptionRepository shipSubscriptionRepository;

    //get all
    @GetMapping("/shipsubscriptions")
    public List<ShipSubscription> getAllShipSubscriptions(){return shipSubscriptionRepository.findAll();}

    @GetMapping("/shipsubscriptions/user/{userId}")
    public List<ShipSubscription> gettAllShipSubscriptionsForrSpecificUser(@PathVariable Long userId) {
        return shipSubscriptionRepository.findAllByUserId(userId);
    }

    //create
    @PostMapping("/shipsubscriptions")
    public ShipSubscription createShipSubscription(@RequestBody ShipSubscription shipSubscription){
        return shipSubscriptionRepository.save(shipSubscription);
    }

    //get by id
    @GetMapping("/shipsubscriptions/{id}")
    public ResponseEntity<ShipSubscription> getShipSubscriptionById(@PathVariable Long id){
        ShipSubscription shipSubscription = shipSubscriptionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ShipSubscription does not exist with id:"+ id));
        return ResponseEntity.ok(shipSubscription);
    }


    //update
    @PutMapping("/shipsubscriptions/{id}")
    public ResponseEntity<ShipSubscription> updateShipSubscription(@PathVariable Long id,@RequestBody ShipSubscription shipSubscriptionDetails){
        ShipSubscription shipSubscription = shipSubscriptionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ShipSubscription does not exist with id:"+ id));

        shipSubscription.setShipId(shipSubscriptionDetails.getShipId());
        shipSubscription.setUserId(shipSubscriptionDetails.getUserId());


        ShipSubscription updatedShipSubscription = shipSubscriptionRepository.save(shipSubscription);
        return ResponseEntity.ok(updatedShipSubscription);
    }


    //delete
    @DeleteMapping("/shipsubscriptions/{id}")
    public Map<String, Boolean> deleteShipSubscription(@PathVariable Long id){

        ShipSubscription shipSubscription = shipSubscriptionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ShipSubscription does not exist with id:"+ id));

        shipSubscriptionRepository.delete(shipSubscription);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

    @DeleteMapping("/shipsubscriptions/{userId}/{shipId}")
    public Map<String, Boolean> deleteShipSubscriptionByUserIdAndShipId(@PathVariable Long userId, @PathVariable Long shipId){

        ShipSubscription subscription = shipSubscriptionRepository.findByUserIdAndShipId(userId, shipId);
        shipSubscriptionRepository.delete(subscription);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

// get by Email and Password
    @GetMapping("/shipsubscriptions/shipid/{shipid}")
    public List<ShipSubscription> getShipSubsByShipId(@PathVariable Long shipid){
    return shipSubscriptionRepository.findByShipId(shipid);
    }

    
}
