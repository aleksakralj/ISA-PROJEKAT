package stasaaleksadavid.isabackend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.CottageFreeAppointment;
import stasaaleksadavid.isabackend.model.Ship;
import stasaaleksadavid.isabackend.repository.ShipRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ShipController {

    @Autowired
    private ShipRepository shipRepository;

    //get all

    @GetMapping("/ships")
    public List<Ship> getAllShips(){return shipRepository.findAll();}

    //create
    @PostMapping("/ships")
    public  Ship createShip(@RequestBody Ship ship){
        return shipRepository.save(ship);
    }

    //get by id
    @GetMapping("/ships/{id}")
    public ResponseEntity <Ship> getShipById(@PathVariable Long id){
        Ship ship = shipRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Ship does not exist with id:"+ id));
        return ResponseEntity.ok(ship);
    }

    //update
    @PutMapping("/ships/{id}")
    public ResponseEntity<Ship> updateShip(@PathVariable Long id,@RequestBody Ship shipDetails){
        Ship ship = shipRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Ship does not exist with id:"+ id));

        ship.setOwnerId(shipDetails.getOwnerId());
        ship.setName(shipDetails.getName());
        ship.setType(shipDetails.getType());
        ship.setLength(shipDetails.getLength());
        ship.setNumberOfEngines(shipDetails.getNumberOfEngines());
        ship.setHp(shipDetails.getHp());
        ship.setTopSpeed(shipDetails.getTopSpeed());
        ship.setNavigation(shipDetails.getNavigation());
        ship.setAddress(shipDetails.getAddress());
        ship.setDescription(shipDetails.getDescription());
        ship.setCapacity(shipDetails.getCapacity());
        ship.setRules(shipDetails.getRules());
        ship.setFishingEquipment(shipDetails.getFishingEquipment());



        Ship updatedShip = shipRepository.save(ship);
        return ResponseEntity.ok(updatedShip);
    }


    //delete
    @DeleteMapping("/ships/{id}")
    public Map<String, Boolean> deleteAdmin(@PathVariable Long id){

        Ship ship = shipRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Ship does not exist with id:"+ id));

        shipRepository.delete(ship);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }
    @GetMapping("/ships/owner/{ownerid}")
    public List<Ship> getShipsByOwnerId(@PathVariable Long ownerid) {
        return shipRepository.findByOwnerId(ownerid);
    }
}
