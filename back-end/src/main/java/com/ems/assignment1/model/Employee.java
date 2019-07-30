package com.ems.assignment1.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;
import java.util.Collections;
import java.util.Date;
import java.util.Set;
import javax.persistence.*;

@Entity
@Table(name = "Employee")
public class Employee implements Serializable{

    private static final long serialVersionUID = -3009157732242241606L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long emp_id;

    @Column(name = "emp_fname")
    private String emp_fname;

    @Column(name = "emp_lname")
    private String emp_lname;

    @Column(name = "emp_email")
    private String emp_email;

    @Column(name = "emp_dob")
    private Date emp_dob;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "emp_skills",
            joinColumns = @JoinColumn(name = "emp_id", referencedColumnName = "emp_id"),
            inverseJoinColumns = @JoinColumn(name = "s_id",referencedColumnName = "s_id"))
    private Set<Skills> skills;

    public Employee(){ }

/*
    @JsonCreator
    public Employee(@JsonProperty("emp_id")Long emp_id,@JsonProperty("emp_fname") String emp_fname, @JsonProperty("emp_lname")String emp_lname, @JsonProperty("emp_email")String emp_email, @JsonProperty("emp_dob")Date emp_dob,@JsonProperty("skills") Set<Skills> skills){
        this.emp_id = emp_id;
        this.emp_fname = emp_fname;
        this.emp_lname = emp_lname;
        this.emp_email = emp_email;
        this.emp_dob = emp_dob;
        this.skills = skills !=null? skills: Collections.emptySet();
    }
*/

    public Employee(String emp_fname,String emp_lname,String emp_email,Date emp_dob){
        this.emp_fname = emp_fname;
        this.emp_lname = emp_lname;
        this.emp_email = emp_email;
        this.emp_dob = emp_dob;
    }

    public Employee(Long emp_id,String emp_fname,String emp_lname,String emp_email,Date emp_dob,Set<Skills> skills){
        this.emp_id = emp_id;
        this.emp_fname = emp_fname;
        this.emp_lname = emp_lname;
        this.emp_email = emp_email;
        this.emp_dob = emp_dob;
        this.skills = skills;
    }

    public Employee(Long emp_id,String emp_fname,String emp_lname,String emp_email,Date emp_dob){
        this.emp_id = emp_id;
        this.emp_fname = emp_fname;
        this.emp_lname = emp_lname;
        this.emp_email = emp_email;
        this.emp_dob = emp_dob;
    }



    @Override
    public String toString(){
        return String.format("Employee[emp_id=%d,emp_fname='%s',emp_lname='%s',emp_email='%s',emp_dob='%t']",emp_id,emp_fname,emp_lname,emp_email,emp_dob);
    }

    public long getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(long emp_id) {
        this.emp_id = emp_id;
    }

    public String getEmp_fname() {
        return emp_fname;
    }

    public void setEmp_fname(String emp_fname) {
        this.emp_fname = emp_fname;
    }

    public String getEmp_lname() {
        return emp_lname;
    }

    public void setEmp_lname(String emp_lname) {
        this.emp_lname = emp_lname;
    }

    public String getEmp_email() {
        return emp_email;
    }

    public void setEmp_email(String emp_email) {
        this.emp_email = emp_email;
    }

    public Date getEmp_dob() {
        return emp_dob;
    }

    public void setEmp_dob(Date emp_dob) {
        this.emp_dob = emp_dob;
    }

    public Set<Skills> getSkills(){
        return  skills;
    }

    public void setSkills(Set<Skills> skills){
        if (skills == null || skills.isEmpty() || skills.equals("")){
            this.skills = Collections.emptySet();
        }
        else {
            this.skills = skills;
        }
        //this.skills = skills !=null? skills: Collections.emptySet();
    }

/*    public void setSkills(String s){
        this.skills = Collections.emptySet();
    }*/

}

