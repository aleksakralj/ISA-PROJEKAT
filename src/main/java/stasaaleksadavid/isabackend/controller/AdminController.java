package stasaaleksadavid.isabackend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import stasaaleksadavid.isabackend.model.Admin;
import stasaaleksadavid.isabackend.repository.AdminRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    //get all

    @GetMapping("/admins")
    public List<Admin> getAllAdmins(){return adminRepository.findAll();}
}
