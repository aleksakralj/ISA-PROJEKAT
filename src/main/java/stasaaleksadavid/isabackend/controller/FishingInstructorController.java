package stasaaleksadavid.isabackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import stasaaleksadavid.isabackend.model.FishingInstructor;
import stasaaleksadavid.isabackend.repository.FishingInstructorRepository;

@RestController
@RequestMapping("/api/v1/")
public class FishingInstructorController    {

    @Autowired
    private FishingInstructorRepository fishingInstructorRepository;

    //get all

    @GetMapping("/fishinginstructors")
    public List<FishingInstructor> getAllFishingInstructors(){
        return fishingInstructorRepository.findAll();
    }
}
