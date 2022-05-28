package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.UserRateAdventure;
import stasaaleksadavid.isabackend.repository.UserRateAdventureRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserRateAdventureController {

    @Autowired
    private UserRateAdventureRepository userRateAdventureRepository;

    @GetMapping("/user-rate-adventure")
    public List<UserRateAdventure> getAllRatings() {return userRateAdventureRepository.findAll();}

    @PostMapping("/user-rate-adventure")
    public UserRateAdventure createRate(@RequestBody UserRateAdventure userRateAdventure ){
        return userRateAdventureRepository.save(userRateAdventure);
    }

    @GetMapping("/user-rate-adventure/{id}")
    public ResponseEntity<UserRateAdventure> getById(@PathVariable Long id){
        UserRateAdventure userRateAdventure = userRateAdventureRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("There is no rate whit  this id"));
        return ResponseEntity.ok(userRateAdventure);
    }


}
