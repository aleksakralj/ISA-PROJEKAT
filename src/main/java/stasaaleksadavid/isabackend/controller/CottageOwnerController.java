package stasaaleksadavid.isabackend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import stasaaleksadavid.isabackend.model.CottageOwner;
import stasaaleksadavid.isabackend.repository.CottageOwnerRepository;

@RestController
@RequestMapping("/api/v1/")
public class CottageOwnerController {

    @Autowired
    private CottageOwnerRepository cottageOwnerRepository;

    //get all

    @GetMapping("/cottageowners")
    public List<CottageOwner> getAllCottageOwners(){return cottageOwnerRepository.findAll();}
}
