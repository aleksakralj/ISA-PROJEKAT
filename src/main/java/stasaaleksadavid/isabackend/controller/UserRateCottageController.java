package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.UserRatesCottage;
import stasaaleksadavid.isabackend.repository.UserRateCottageRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
@EnableTransactionManagement
public class UserRateCottageController {

    @Autowired
    private UserRateCottageRepository userRateCottageRepository;

    @GetMapping("/user-rate-cottage")
    public List<UserRatesCottage> getAllRatings() {return userRateCottageRepository.findAll();}

    @PostMapping("/user-rate-cottage")
    @Transactional
    public UserRatesCottage createRate(@RequestBody UserRatesCottage userRatesCottage ){
        return userRateCottageRepository.save(userRatesCottage);
    }

    @GetMapping("/user-rate-cottage/{id}")
    public ResponseEntity<UserRatesCottage> getById(@PathVariable Long id){
        UserRatesCottage userRatesCottage = userRateCottageRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("There is no rate whit  this id"));
        return ResponseEntity.ok(userRatesCottage);
    }


}
