package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.AdventureSubscription;
import stasaaleksadavid.isabackend.repository.AdventureSubscriptionRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
@EnableTransactionManagement
public class AdventureSubscriptionController {

    @Autowired
    private AdventureSubscriptionRepository adventureSubscriptionRepository;

    //get all
    @GetMapping("/adventuresubscriptions")
    public List<AdventureSubscription> getAllAdventureSubscriptions(){return adventureSubscriptionRepository.findAll();}

    @GetMapping("/adventuresubscriptions/user/{userId}")
    public List<AdventureSubscription> getAllAdventureSubscriptionsForSpecificUser(@PathVariable Long userId) {
        return adventureSubscriptionRepository.findAllByUserId(userId);
    }

    //create
    @PostMapping("/adventuresubscriptions")
    @Transactional
    public AdventureSubscription createAdventureSubscription(@RequestBody AdventureSubscription adventureSubscription){
        return adventureSubscriptionRepository.save(adventureSubscription);
    }

    @GetMapping("/adventuresubscriptions/{userId}/{adventureId}")
    public ResponseEntity<AdventureSubscription> isUserSubscribedForSpecificAdventure(@PathVariable Long userId, @PathVariable Long adventureId){
        AdventureSubscription adventureSubscription = adventureSubscriptionRepository.findByUserIdAndAdventureId(userId, adventureId);

        return ResponseEntity.ok(adventureSubscription);
    }

    //get by id
    @GetMapping("/adventuresubscriptions/{id}")
    public ResponseEntity<AdventureSubscription> getAdventureSubscriptionById(@PathVariable Long id){
        AdventureSubscription adventureSubscription = adventureSubscriptionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureSubscription does not exist with id:"+ id));
        return ResponseEntity.ok(adventureSubscription);
    }


    //update
    @PutMapping("/adventuresubscriptions/{id}")
    @Transactional
    public ResponseEntity<AdventureSubscription> updateAdventureSubscription(@PathVariable Long id,@RequestBody AdventureSubscription adventureSubscriptionDetails){
        AdventureSubscription adventureSubscription = adventureSubscriptionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureSubscription does not exist with id:"+ id));

        adventureSubscription.setAdventureId(adventureSubscriptionDetails.getAdventureId());
        adventureSubscription.setUserId(adventureSubscriptionDetails.getUserId());
        

        AdventureSubscription updatedAdventureSubscription = adventureSubscriptionRepository.save(adventureSubscription);
        return ResponseEntity.ok(updatedAdventureSubscription);
    }


    //delete
    @DeleteMapping("/adventuresubscriptions/{id}")
    @Transactional
    public Map<String, Boolean> deleteAdventureSubscription(@PathVariable Long id){

        AdventureSubscription adventureSubscription = adventureSubscriptionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("AdventureSubscription does not exist with id:"+ id));

        adventureSubscriptionRepository.delete(adventureSubscription);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

    @DeleteMapping("/adventuresubscriptions/{userId}/{adventureId}")
    @Transactional
    public Map<String, Boolean> deleteAdventureSubscriptionByUserIdAndAdventureId(@PathVariable Long userId, @PathVariable Long adventureId){

        AdventureSubscription adventureSubscription = adventureSubscriptionRepository.findByUserIdAndAdventureId(userId, adventureId);
        adventureSubscriptionRepository.delete(adventureSubscription);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

// get by Email and Password
    @GetMapping("/adventuresubscriptions/adventureid/{adventureid}")
    public List<AdventureSubscription> getAdventureSubsByAdventureId(@PathVariable Long adventureid){
    return adventureSubscriptionRepository.findByAdventureId(adventureid);
    }

    
}
