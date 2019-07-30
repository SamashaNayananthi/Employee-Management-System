package com.ems.assignment1.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collections;
import java.util.Set;

@Entity
@Table(name = "Skills")
public class Skills implements Serializable {

    private static final long serialVersionUID = -3009157732242241606L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long s_id;

    @Column(name = "s_name")
    private String s_name;


    @ManyToMany(mappedBy = "skills",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Employee> employees;

    public Skills(){ }

    public Skills(Long s_id,String s_name){
        this.s_id = s_id;
        this.s_name = s_name;
    }

    public Skills(String s_name){
        this.s_name = s_name;
    }

    @Override
    public String toString(){
        return String.format("Skills[s_id=%d,s_name='%s']",s_id,s_name);
    }

    public long getS_id() {
        return s_id;
    }

    public void setS_id(long s_id) {
        this.s_id = s_id;
    }

    public String getS_name() {
        return s_name;
    }

    public void setS_name(String s_name) {
        this.s_name = s_name;
    }

    public Set<Employee> getEmployees(){
        return employees;
    }

    public void setEmployees(Set<Employee> employees){
        if (employees.isEmpty()){
            this.employees = Collections.emptySet();
        }
        else {
            this.employees = employees;
        }
    }
}


