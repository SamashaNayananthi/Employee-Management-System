import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../shared/api.service';
import {Skills} from '../model/skills';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {
  skill: Skills = {
    s_id: null,
    s_name: '',
    employees: null
  };
  form = new FormGroup({
    skillName: new FormControl('', Validators.required)
  });

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {}

  onSubmit() {
    // alert(JSON.stringify(this.form.value));
    this.storeSkill();
  }

  public storeSkill() {
    this.skill.s_id = null;
    this.skill.s_name = this.form.controls.skillName.value;

    this.apiService.postSkill(this.skill).subscribe(
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
