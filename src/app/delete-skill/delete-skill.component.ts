import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-delete-skill',
  templateUrl: './delete-skill.component.html',
  styleUrls: ['./delete-skill.component.scss']
})
export class DeleteSkillComponent implements OnInit {
  id;
  form = new FormGroup({
    id: new FormControl('', Validators.required)
  });


  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    // alert(JSON.stringify(this.form.value));
    this.deleteSkill();
  }

  public deleteSkill() {
    this.id = this.form.controls.id.value;

    this.apiService.deleteSkill(this.id).subscribe(
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
