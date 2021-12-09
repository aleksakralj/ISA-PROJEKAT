package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.Admin;
import stasaaleksadavid.isabackend.model.Adventure;
import stasaaleksadavid.isabackend.model.User;
import stasaaleksadavid.isabackend.repository.AdventureRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AdventureController {
    @Autowired
    private AdventureRepository adventureRepository;
    //get all

    @GetMapping("/adventures")
    public List<Adventure> getAllAdmins(){return adventureRepository.findAll();}

    //create
    @PostMapping("/adventures")
    public Adventure createAdventure(@RequestBody Adventure adventure){
        return adventureRepository.save(adventure);
    }

    //get by id
    @GetMapping("/adventures/{id}")
    public ResponseEntity<Adventure> getAdventureById(@PathVariable Long id){
        Adventure adventure = adventureRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Adventure does not exist with id:"+ id));
        return ResponseEntity.ok(adventure);
    }

    //update
    @PutMapping("/adventures/{id}")
    public ResponseEntity<Adventure> updateAdventure(@PathVariable Long id,@RequestBody Adventure adventureDetails){
        Adventure adventure = adventureRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Adventure does not exist with id:"+ id));

        adventure.setAddress(adventureDetails.getAddress());
        adventure.setDescription(adventureDetails.getDescription());
        adventure.setMaxPeople(adventureDetails.getMaxPeople());
        adventure.setName(adventureDetails.getName());
        adventure.setRulesOfConduct(adventureDetails.getRulesOfConduct());
        adventure.setTermsOfReservation(adventureDetails.getTermsOfReservation());

        Adventure updatedAdventure = adventureRepository.save(adventure);
        return ResponseEntity.ok(updatedAdventure);
    }


    //delete
    @DeleteMapping("/adventures/{id}")
    public Map<String, Boolean> deleteAdventure(@PathVariable Long id){

        Adventure adventure = adventureRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Adventure does not exist with id:"+ id));

        adventureRepository.delete(adventure);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

    //get by instructorId
    @GetMapping("/adventures/instructorid/{instructorId}")
    public List<Adventure> getAdventuresByInstructorId(@PathVariable Long instructorId){return adventureRepository.findByInstructorId(instructorId);}

}
