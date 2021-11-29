package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import stasaaleksadavid.isabackend.model.Cottage;
import stasaaleksadavid.isabackend.repository.CottageRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class CottageController {

    @Autowired
    private CottageRepository cottageRepository;

    //get all
    @GetMapping("/cottages")
    public List<Cottage> getAllCottages(){return cottageRepository.findAll();}
}
