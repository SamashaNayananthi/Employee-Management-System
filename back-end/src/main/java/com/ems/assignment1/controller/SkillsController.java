package com.ems.assignment1.controller;
import com.ems.assignment1.model.Employee;
import com.ems.assignment1.model.Skills;
import com.ems.assignment1.repo.EmployeeRepository;
import com.ems.assignment1.repo.SkillsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class SkillsController {
    @Autowired
    SkillsRepository skillsRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    @RequestMapping("/getSkills")
    @GetMapping("/getSkills")
    public List<Skills> getSkills(){
        return (List<Skills>) skillsRepository.findAll();
    }

   /* @RequestMapping("/saveSkills")
    public String process(){
        skillsRepository.save(new Skills("Programming"));
        skillsRepository.save(new Skills("Database"));
        skillsRepository.save(new Skills("Managing"));
        skillsRepository.save(new Skills("Technical"));
        return "Skills Saved To Postgresql!!!!";
    }*/

    @RequestMapping("/saveSkills")
    @PostMapping("/saveSkills")
    @CrossOrigin
    public void createSkill(@RequestBody Skills skill, BindingResult bindingResult){
        skillsRepository.save(new Skills(skill.getS_name()));
    }

    @DeleteMapping("deleteSkill/{s_id}")
    public void deleteSkill(@PathVariable("s_id")long s_id){
        Skills skillToDelete = null;
        for (Skills s : skillsRepository.findAll()){
            if (s.getS_id()==s_id){
                skillToDelete = s;
            }
        }

        for (Employee e : employeeRepository.findAll()){
            if (e.getSkills().contains(skillToDelete)){
                e.getSkills().remove(skillToDelete);
                employeeRepository.save(e);
            }
        }
        skillsRepository.deleteById(s_id);
    }

    @RequestMapping("/updateSkill")
    @PostMapping("/updateSkill")
    @CrossOrigin
    public void updateSkill(@RequestBody Skills skill){
        Skills skillToBeUpdated = null;
        for (Skills s : skillsRepository.findAll()){
            if (s.getS_id()==skill.getS_id()){
                skillToBeUpdated = s;
            }
        }
        if (!skill.getS_name().equals("")&&skill.getS_name()!=null){
            skillToBeUpdated.setS_name(skill.getS_name());
        }

        skillsRepository.save(skillToBeUpdated);
    }

}

