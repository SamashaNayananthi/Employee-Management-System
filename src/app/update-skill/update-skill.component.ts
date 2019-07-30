import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../shared/api.service';
import {Skills} from '../model/skills';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.scss']
})
export class UpdateSkillComponent implements OnInit {
  skill: Skills = {
    s_id: null,
    s_name: '',
    employees: null
  };
  form = new FormGroup({
    id: new FormControl('', Validators.required),
    skillName: new FormControl('')
  });

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    // alert(JSON.stringify(this.form.value));
    this.updateSkill();
  }

  public updateSkill() {
    this.skill.s_id = this.form.controls.id.value;
    this.skill.s_name = this.form.controls.skillName.value;

    this.apiService.postUpdateSkillDetails(this.skill).subscribe(
      res => {
        alert('Details sent');
        location.reload();
      },
      err => {
        alert('An error in sending values:' + err.toString());
      }
    );
  }

}
