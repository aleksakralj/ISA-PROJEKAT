package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.Admin;
import stasaaleksadavid.isabackend.model.User;
import stasaaleksadavid.isabackend.repository.UserRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    //get all

    @GetMapping("/users")
    public List<User> getAllUsers(){return userRepository.findAll();}

    //create
    @PostMapping("/users")
    public  User createUser(@RequestBody User user){
        return userRepository.save(user);
    }

    //get by id
    @GetMapping("/users/id/{type}/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String type,@PathVariable Long id){
        if(type.equals("ship_owner") || type.equals("admin")|| type.equals("cottage_owner")|| type.equals("fishing_instructor")|| type.equals("main_admin")) {
            User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User does not exist with id:" + id));
            return ResponseEntity.ok(user);
        }
        else return null;
    }
    //update
    @PutMapping("/users/{type}/{id}")
    public ResponseEntity<User> updateUser(@PathVariable String type,@PathVariable Long id,@RequestBody User userDetails){

        if(type.equals("ship_owner") || type.equals("admin")|| type.equals("cottage_owner")|| type.equals("fishing_instructor")|| type.equals("main_admin")){
            User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User does not exist with id:" + id));

                user.setPassword(userDetails.getPassword());
                user.setFirstName(userDetails.getFirstName());
                user.setLastName(userDetails.getLastName());
                user.setDateOfBirth(userDetails.getDateOfBirth());
                user.setEmail(userDetails.getEmail());
                user.setPhoneNumber(userDetails.getPhoneNumber());
                user.setAddress(userDetails.getAddress());
                user.setCity(userDetails.getCity());
                user.setCountry(userDetails.getCountry());

                User updatedUser = userRepository.save(user);
                return ResponseEntity.ok(updatedUser);
            }
            else{return null;}
    }
    //delete
    @DeleteMapping("/users/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable Long id){

        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User does not exist with id:"+ id));

       userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

    @GetMapping("/users/{email}/{password}")
    public User logUser(@PathVariable("email") String email, @PathVariable("password") String password){
        User loggedUser = userRepository.findByEmailAndPassword(email,password);
        return loggedUser;
    }

    //login
    @PostMapping("/login/{email}/{password}") //ALL ALLOWED
    public User loginUser(@PathVariable("email") String email, @PathVariable("password") String password)
    {
        Optional<User> user = Optional.ofNullable(userRepository.findByEmailAndPassword(email,password));
        User user2;
        if(!user.isPresent())
        {
            return null;
        }
        else
        {
            user2 = user.get();

            return user2;


        }
    }
    //get by type
    @GetMapping("/users/type/{type}")
    public List<User> getAllUsersByType(@PathVariable String type){return userRepository.findByType(type);}


}
