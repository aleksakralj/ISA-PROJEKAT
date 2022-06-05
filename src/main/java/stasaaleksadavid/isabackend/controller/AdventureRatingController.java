package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.model.AdventureRating;
import stasaaleksadavid.isabackend.model.UserRateAdventure;
import stasaaleksadavid.isabackend.repository.AdventureRatingRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
@EnableTransactionManagement
public class AdventureRatingController {

    @Autowired
    private AdventureRatingRepository adventureRatingRepository;

    @GetMapping("/adventure-rating")
    public List<AdventureRating> getAllRatings() {
        return adventureRatingRepository.findAll();
    }

    @PostMapping("/adventure-rating")
    @Transactional
    public AdventureRating createAdventureRating(@RequestBody AdventureRating adventureRating){
        return adventureRatingRepository.save(adventureRating);
    }

    @GetMapping("/adventure-rating/{adventureId}")
    public AdventureRating getById(@PathVariable Long adventureId){
        return adventureRatingRepository.getAdventureRatingByAdventureId(adventureId);
    }

    @PutMapping("/adventure-rating")
    @Transactional
    public ResponseEntity<AdventureRating> updateRating(@RequestBody UserRateAdventure userRateAdventure){

            AdventureRating adventureRating = adventureRatingRepository.getById(userRateAdventure.getAdventureId());

            adventureRating.setRatingSum(adventureRating.getRatingSum() + userRateAdventure.getRating());
            adventureRating.setRatingCount(adventureRating.getRatingCount() + 1);
            adventureRating.setFinalRating(adventureRating.getRatingSum() / adventureRating.getRatingCount());

            AdventureRating updatedRating = adventureRatingRepository.save(adventureRating);

            return ResponseEntity.ok(updatedRating);
    }

    @DeleteMapping("/adventure-rating/{id}")
    @Transactional
    public Map<String,Boolean> deleteAdventureGrade(@PathVariable Long id){
            AdventureRating adventureRating = adventureRatingRepository.getById((id));

            adventureRatingRepository.delete(adventureRating);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);

    }

}
