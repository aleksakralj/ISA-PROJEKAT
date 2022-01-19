package stasaaleksadavid.isabackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stasaaleksadavid.isabackend.exception.ResourceNotFoundException;
import stasaaleksadavid.isabackend.model.Grade;
import stasaaleksadavid.isabackend.model.User;
import stasaaleksadavid.isabackend.repository.GradeRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class GradeController {
    @Autowired
    private GradeRepository gradeRepository;
    //get all

    @GetMapping("/grades")
    public List<Grade> getAllGrades(){return gradeRepository.findAll();}

    //create
    @PostMapping("/grades")
    public  Grade createGrade(@RequestBody Grade grade){
        return gradeRepository.save(grade);
    }

    //get by id
    @GetMapping("/grades/{id}")
    public ResponseEntity<Grade> getGradeById(@PathVariable Long id){
        Grade grade = gradeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Grade does not exist with id:"+ id));
        return ResponseEntity.ok(grade);
    }

    //update
    @PutMapping("/grades/{id}")
    public ResponseEntity<Grade> updateGrade(@PathVariable Long id,@RequestBody Grade gradeDetails){
        Grade grade = gradeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Grade does not exist with id:"+ id));

        grade.setGrade(gradeDetails.getGrade());
        grade.setType(gradeDetails.getType());
        grade.setMessage(gradeDetails.getMessage());

        Grade updatedGrade = gradeRepository.save(grade);
        return ResponseEntity.ok(updatedGrade);
    }


    //delete
    @DeleteMapping("/grades/{id}")
    public Map<String, Boolean> deleteGrade(@PathVariable Long id){

        Grade grade = gradeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Grade does not exist with id:"+ id));

        gradeRepository.delete(grade);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return (Map<String, Boolean>) ResponseEntity.ok(response);
    }

    //get by type and typeid
    @GetMapping("/grades/typeandid/{type}/{typeid}")
    public List<Grade> getByTypeAndTypeId(@PathVariable String type, @PathVariable long typeid){return gradeRepository.findByTypeAndTypeId(type,typeid);}
}
