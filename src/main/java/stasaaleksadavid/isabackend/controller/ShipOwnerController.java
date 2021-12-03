package stasaaleksadavid.isabackend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.model.CottageOwner;
import stasaaleksadavid.isabackend.model.ShipOwner;
import stasaaleksadavid.isabackend.repository.ShipOwnerRepository;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ShipOwnerController {

    @Autowired
    private ShipOwnerRepository shipOwnerRepository;

    //get all

    @GetMapping("/shipowners")
    public List<ShipOwner> getAllShipOwners(){ return shipOwnerRepository.findAll();}

    //create
    @PostMapping("/shipowners")
    public ShipOwner createShipOwner(@RequestBody ShipOwner shipOwner){
        return shipOwnerRepository.save(shipOwner);
    }
}
