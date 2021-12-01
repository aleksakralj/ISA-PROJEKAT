package stasaaleksadavid.isabackend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.model.Admin;
import stasaaleksadavid.isabackend.repository.AdminRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    //get all

    @GetMapping("/admins")
    public List<Admin> getAllAdmins(){return adminRepository.findAll();}

    @PostMapping("/admins")
    public Admin createAdmin(@RequestBody Admin admin){
        return adminRepository.save(admin);
    }
}
