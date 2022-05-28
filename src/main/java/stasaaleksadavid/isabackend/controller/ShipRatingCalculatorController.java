package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.model.*;
import stasaaleksadavid.isabackend.repository.ShipRatingCalculatorRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ShipRatingCalculatorController {

    @Autowired
    private ShipRatingCalculatorRepository shipRatingCalculatorRepository;

    @GetMapping("/ship-rating")
    public List<ShipRatingCalculator> getAllRatings() {
        return shipRatingCalculatorRepository.findAll();
    }

    @PostMapping("/ship-rating")
    public ShipRatingCalculator createShipRatingCalculator(@RequestBody ShipRatingCalculator shipRatingCalculator){
        return shipRatingCalculatorRepository.save(shipRatingCalculator);
    }

    @GetMapping("/ship-rating/{id}")
    public ShipRatingCalculator getById(@PathVariable Long id){
        return shipRatingCalculatorRepository.getById(id);
    }

    @PutMapping("/ship-rating")
    public ResponseEntity<ShipRatingCalculator> updateRating(@RequestBody UserRateShip userRateShip){

        ShipRatingCalculator shipRatingCalculator = shipRatingCalculatorRepository.getById(userRateShip.getShipId());

        shipRatingCalculator.setRatingSum(shipRatingCalculator.getRatingSum() + userRateShip.getRating());
        shipRatingCalculator.setRatingCount(shipRatingCalculator.getRatingCount() + 1);
        shipRatingCalculator.setFinalRating(shipRatingCalculator.getRatingSum() / shipRatingCalculator.getRatingCount());

        ShipRatingCalculator updatedRating = shipRatingCalculatorRepository.save(shipRatingCalculator);

        return ResponseEntity.ok(updatedRating);
    }

    @DeleteMapping("/ship-rating/{id}")
    public Map<String,Boolean> deleteShipGrade(@PathVariable Long id){
        ShipRatingCalculator shipRatingCalculator = shipRatingCalculatorRepository.getById((id));

        shipRatingCalculatorRepository.delete(shipRatingCalculator);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);

    }

}
