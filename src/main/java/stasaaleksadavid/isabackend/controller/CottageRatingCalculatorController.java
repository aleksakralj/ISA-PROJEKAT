package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.model.AdventureRating;
import stasaaleksadavid.isabackend.model.CottageRatingCalculator;
import stasaaleksadavid.isabackend.model.UserRateAdventure;
import stasaaleksadavid.isabackend.model.UserRatesCottage;
import stasaaleksadavid.isabackend.repository.AdventureRatingRepository;
import stasaaleksadavid.isabackend.repository.CottageRatingCalculatorRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
@EnableTransactionManagement
public class CottageRatingCalculatorController {

    @Autowired
    private CottageRatingCalculatorRepository cottageRatingCalculatorRepository;

    @GetMapping("/cottage-rating")
    public List<CottageRatingCalculator> getAllRatings() {
        return cottageRatingCalculatorRepository.findAll();
    }

    @PostMapping("/cottage-rating")
    @Transactional
    public CottageRatingCalculator createCottageRatingCalculator(@RequestBody CottageRatingCalculator cottageRatingCalculator){
        return cottageRatingCalculatorRepository.save(cottageRatingCalculator);
    }

    @GetMapping("/cottage-rating/{cottageId}")
    public CottageRatingCalculator getByCottageId(@PathVariable Long cottageId){
        return cottageRatingCalculatorRepository.getCottageRatingCalculatorByCottageId(cottageId);
    }

    @PutMapping("/cottage-rating")
    @Transactional
    public ResponseEntity<CottageRatingCalculator> updateRating(@RequestBody UserRatesCottage userRatesCottage){

        CottageRatingCalculator cottageRatingCalculator = cottageRatingCalculatorRepository.getById(userRatesCottage.getCottageId());

        cottageRatingCalculator.setRatingSum(cottageRatingCalculator.getRatingSum() + userRatesCottage.getRating());
        cottageRatingCalculator.setRatingCount(cottageRatingCalculator.getRatingCount() + 1);
        cottageRatingCalculator.setFinalRating(cottageRatingCalculator.getRatingSum() / cottageRatingCalculator.getRatingCount());

        CottageRatingCalculator updatedRating = cottageRatingCalculatorRepository.save(cottageRatingCalculator);

        return ResponseEntity.ok(updatedRating);
    }

    @DeleteMapping("/cottage-rating/{id}")
    @Transactional
    public Map<String,Boolean> deleteCottageGrade(@PathVariable Long id){
        CottageRatingCalculator cottageRatingCalculator = cottageRatingCalculatorRepository.getById((id));

        cottageRatingCalculatorRepository.delete(cottageRatingCalculator);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);

    }

}
