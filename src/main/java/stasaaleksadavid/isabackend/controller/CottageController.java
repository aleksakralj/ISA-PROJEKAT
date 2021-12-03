package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.Cottage;
import stasaaleksadavid.isabackend.repository.CottageRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class CottageController {

    @Autowired
    private CottageRepository cottageRepository;

    //get all
    @GetMapping("/cottages")
    public List<Cottage> getAllCottages(){return cottageRepository.findAll();}

    //create
    @PostMapping("/cottages")
    public Cottage createCottage(@RequestBody Cottage cottage){
        return cottageRepository.save(cottage);
    }

    //get by id
    @GetMapping("/cottages/{id}")
    public ResponseEntity<Cottage> getCottageById(@PathVariable Long id){
        Cottage cottage = cottageRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Cottage does not exist with id:"+ id));
        return ResponseEntity.ok(cottage);
    }

    //get by owner id

   // @GetMapping("/cottages/owner/{ownerid}")
   // public List<Cottage> getCottageByOwnerId(@PathVariable Long ownerid){
   //     return cottageRepository.findByOwnerId(ownerid);
  //  }

    //update
    @PutMapping("/cottages/{id}")
    public ResponseEntity<Cottage> updateCottage(@PathVariable Long id,@RequestBody Cottage cottageDetails){
        Cottage cottage = cottageRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Cottage does not exist with id:"+ id));

        cottage.setName(cottageDetails.getName());
        cottage.setAddress(cottageDetails.getAddress());
        cottage.setDescription(cottageDetails.getAddress());
        cottage.setRating(cottageDetails.getRating());
        cottage.setNumberOfRooms(cottageDetails.getNumberOfRooms());
        cottage.setOwnerId(cottageDetails.getOwnerId());
        cottage.setRules(cottageDetails.getRules());

        Cottage updatedCottage = cottageRepository.save(cottage);
        return ResponseEntity.ok(updatedCottage);
    }


    //delete
    @DeleteMapping("/cottages/{id}")
    public Map<String, Boolean> deleteCottage(@PathVariable Long id){

        Cottage cottage = cottageRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Cottage does not exist with id:"+ id));

        cottageRepository.delete(cottage);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }
}
