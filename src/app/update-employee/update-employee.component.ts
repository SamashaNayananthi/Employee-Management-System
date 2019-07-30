import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../shared/api.service';
import {Skills} from '../model/skills';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  skillsList;
  nullSkills;
  employee: Employee = {
    emp_id: null,
    emp_fname: '',
    emp_lname: '',
    emp_dob: null,
    emp_email: '',
    skills: null
  };
  form = new FormGroup({
    id: new FormControl('', Validators.required),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl('', Validators.email),
    skillsSet: new FormControl('')
  });

  constructor(private apiService: ApiService) {
    this.nullSkills = [];
  }

  ngOnInit() {
    this.getAllSkills();
  }

  onSubmit() {
    alert(JSON.stringify(this.form.value));
    this.updateEmployee();
  }

  public updateEmployee() {
    this.employee.emp_id = this.form.controls.id.value;
    this.employee.emp_fname = this.form.controls.firstName.value;
    this.employee.emp_lname = this.form.controls.lastName.value;
    this.employee.emp_dob = this.form.controls.dob.value;
    this.employee.emp_email = this.form.controls.email.value;

    if (this.form.controls.skillsSet.value == null || this.form.controls.skillsSet.value === '') {
      this.employee.skills = this.nullSkills;
    } else {
      this.employee.skills = this.form.controls.skillsSet.value;
    }
    alert(JSON.stringify(this.employee));


    this.apiService.postUpdateEmpDetails(this.employee).subscribe(
      res => {
        alert('Details sent');
        location.reload();
      },
      err => {
        alert('An error in sending values:' + err.toString());
      }
    );
  }

  public getAllSkills() {
    this.apiService.getAllSkills().subscribe(
      res => {
        // alert(JSON.stringify(res));
        this.skillsList = res;
      },
      err => {
        alert('Error in retrieving' + JSON.stringify(err));
      }
    );
  }

}
