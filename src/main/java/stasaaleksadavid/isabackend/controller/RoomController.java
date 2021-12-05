package stasaaleksadavid.isabackend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.Room;
import stasaaleksadavid.isabackend.repository.RoomRepository;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    //get all

    @GetMapping("/rooms")
    public List<Room> getAllRooms(){return roomRepository.findAll();}

    //create
    @PostMapping("/rooms")
    public  Room createRoom(@RequestBody Room room){
        return roomRepository.save(room);
    }

    //get by id
    @GetMapping("/rooms/{id}")
    public ResponseEntity <Room> getRoomById(@PathVariable Long id){
        Room room = roomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Room does not exist with id:"+ id));
        return ResponseEntity.ok(room);
    }

    //update
    @PutMapping("/rooms/{id}")
    public ResponseEntity<Room> updateRoom(@PathVariable Long id,@RequestBody Room roomDetails){
        Room room = roomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Room does not exist with id:"+ id));


        room.setNumber(roomDetails.getNumber());
        room.setNumberOfBeds(roomDetails.getNumberOfBeds());
        room.setDescription(roomDetails.getDescription());

        Room updatedRoom = roomRepository.save(room);
        return ResponseEntity.ok(updatedRoom);
    }


    //delete
    @DeleteMapping("/rooms/{id}")
    public Map<String, Boolean> deleteRoom(@PathVariable Long id){

        Room room = roomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Room does not exist with id:"+ id));

        roomRepository.delete(room);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }
}
