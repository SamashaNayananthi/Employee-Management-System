package com.ems.assignment1.controller;

import com.ems.assignment1.model.Employee;
import com.ems.assignment1.model.Skills;
import com.ems.assignment1.repo.EmployeeRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin
public class EmployeeController {
    @Autowired
    EmployeeRepository repository;

    @RequestMapping("/updateEmployee")
    @PostMapping("/updateEmployee")
    @CrossOrigin
    public void updateEmployee(@RequestBody Employee employee, BindingResult bindingResult){
        Employee empToBeUpdated = null;
        for (Employee emp : repository.findAll()){
            if (emp.getEmp_id()==employee.getEmp_id()){
                empToBeUpdated = emp;
            }
        }

        if (!employee.getEmp_fname().equals("")&&employee.getEmp_fname()!=null){
            empToBeUpdated.setEmp_fname(employee.getEmp_fname());
        }
        if (!employee.getEmp_lname().equals("")&&employee.getEmp_lname()!=null){
            empToBeUpdated.setEmp_lname(employee.getEmp_lname());
        }
        if (!employee.getEmp_email().equals("")&&employee.getEmp_email()!=null){
            empToBeUpdated.setEmp_email(employee.getEmp_email());
        }
        if (employee.getEmp_dob()!=null){
            empToBeUpdated.setEmp_dob(employee.getEmp_dob());
        }

        if (!employee.getSkills().isEmpty()){
            empToBeUpdated.setSkills(employee.getSkills());
        }

        repository.save(empToBeUpdated);
        //repository.save(new Employee(employee.getEmp_id(),employee.getEmp_fname(),employee.getEmp_lname(),employee.getEmp_email()));
    }

    @RequestMapping("/getEmployees")
    @GetMapping("/getEmployees")
    @CrossOrigin
    public List<Employee> getEmployees(){
        return (List<Employee>) repository.findAll();
    }

    @RequestMapping("/save")
    @PostMapping("/save")
    @CrossOrigin
    public void createEmployee(@RequestBody Employee employee){

/*        ObjectMapper mapper = new ObjectMapper();
        Employee emp = new Employee();

        try {
            emp = mapper.readValue(employee,Employee.class);
        }catch (IOException e){
            e.printStackTrace();
        }*/
        Employee emp = new Employee(employee.getEmp_fname(),employee.getEmp_lname(),employee.getEmp_email(),employee.getEmp_dob());

        if (!employee.getSkills().isEmpty()){
            emp.setSkills(employee.getSkills());
        }
        repository.save(emp);
    }

    @DeleteMapping("deleteEmp/{emp_id}")
    public void deleteEmployee(@PathVariable("emp_id")long emp_id){

        repository.deleteById(emp_id);
    }
}
