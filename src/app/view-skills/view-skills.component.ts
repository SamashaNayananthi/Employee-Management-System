import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-view-skills',
  templateUrl: './view-skills.component.html',
  styleUrls: ['./view-skills.component.scss']
})
export class ViewSkillsComponent implements OnInit {
  skillList: [];
  displayedColumns: string[] = ['s_id', 's_name'];
  dataSource;
// {emp_id: 1, emp_fname: 'Samasha', emp_lname: 'Nayananthi', emp_dob: new Date(), emp_email: 'Sam@gmail.com'}


  constructor(private apiService: ApiService) {
    this.getAllSkills();
  }

  ngOnInit() {}

  public getAllSkills() {
    this.apiService.getAllSkills().subscribe(
      res => {
        // alert(JSON.stringify(res));
        this.skillList = res;
        this.dataSource = this.skillList;
        // alert(JSON.stringify(this.empList));
      },
      err => {
        alert('Error in retrieving' + err.toString());
      }
    );
  }

}
