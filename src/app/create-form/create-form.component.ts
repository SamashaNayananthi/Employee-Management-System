import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Skills} from '../model/skills';
import {ApiService} from '../shared/api.service';
import {Employee} from '../model/employee';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  skillsList;
  employee: Employee = {
    emp_id: null,
    emp_fname: '',
    emp_lname: '',
    emp_dob: null,
    emp_email: '',
    skills: null
  };
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    skillsSet: new FormControl('')
  });

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getAllSkills();
  }

  onSubmit() {
    // alert(JSON.stringify(this.form.value));
    this.storeEmployee();
  }

  public storeEmployee() {
    this.employee.emp_id = null;
    this.employee.emp_fname = this.form.controls.firstName.value;
    this.employee.emp_lname = this.form.controls.lastName.value;
    this.employee.emp_dob = this.form.controls.dob.value;
    this.employee.emp_email = this.form.controls.email.value;
    this.employee.skills = this.form.controls.skillsSet.value;

    this.apiService.postEmployee(this.employee).subscribe(
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
        alert('Error in retrieving' + err.toString());
      }
    );
  }

}
