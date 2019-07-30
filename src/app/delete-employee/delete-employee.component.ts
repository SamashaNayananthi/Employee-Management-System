import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {
  id;
  form = new FormGroup({
    id: new FormControl('', Validators.required)
  });


  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    // alert(JSON.stringify(this.form.value));
    this.deleteEmployee();
  }

  public deleteEmployee() {
    this.id = this.form.controls.id.value;

    this.apiService.deleteEmployee(this.id).subscribe(
      res => {
        alert('Successfully deleted');
        location.reload();
      },
      err => {
        alert('An error in sending values:' + err.toString());
      }
    );
  }

}
