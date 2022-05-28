package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.UserRateShip;
import stasaaleksadavid.isabackend.repository.UserRateShipRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserRateShipController {

    @Autowired
    private UserRateShipRepository userRateShipRepository;

    @GetMapping("/user-rate-ship")
    public List<UserRateShip> getAllRatings() {return userRateShipRepository.findAll();}

    @PostMapping("/user-rate-ship")
    public UserRateShip createRate(@RequestBody UserRateShip userRateShip ){
        return userRateShipRepository.save(userRateShip);
    }

    @GetMapping("/user-rate-ship/{id}")
    public ResponseEntity<UserRateShip> getById(@PathVariable Long id){
        UserRateShip userRateShip = userRateShipRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("There is no rate whit  this id"));
        return ResponseEntity.ok(userRateShip);
    }


}
