package com.ems.assignment1.repo;

import com.ems.assignment1.model.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee,Long>{

}
