import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  empList: [];
  displayedColumns: string[] = ['emp_id', 'emp_fname', 'emp_lname', 'emp_email', 'emp_dob', 'skills'];
  dataSource;
// {emp_id: 1, emp_fname: 'Samasha', emp_lname: 'Nayananthi', emp_dob: new Date(), emp_email: 'Sam@gmail.com'}


constructor(private apiService: ApiService) {
  this.getAllEmployees();
}

  ngOnInit() {
    // this.getAllEmployees();
  }

  public getAllEmployees() {
    this.apiService.getAllEmployees().subscribe(
      res => {
        // alert(JSON.stringify(res));
        this.empList = res;
        this.dataSource = this.empList;
        // alert(JSON.stringify(this.empList));
      },
      err => {
        alert('Error in retrieving' + err.toString());
      }
    );
  }

}
