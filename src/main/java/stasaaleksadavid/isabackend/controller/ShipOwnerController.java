package stasaaleksadavid.isabackend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import stasaaleksadavid.isabackend.model.ShipOwner;
import stasaaleksadavid.isabackend.repository.ShipOwnerRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class ShipOwnerController {

    @Autowired
    private ShipOwnerRepository shipOwnerRepository;

    //get all

    @GetMapping("/shipowners")
    public List<ShipOwner> getAllShipOwners(){ return shipOwnerRepository.findAll();}
}
