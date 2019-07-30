import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import {MatDatepickerModule, MatIconModule, MatNativeDateModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { CreateFormComponent } from './create-form/create-form.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { ViewSkillsComponent } from './view-skills/view-skills.component';
import { UpdateSkillComponent } from './update-skill/update-skill.component';
import { DeleteSkillComponent } from './delete-skill/delete-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    AddSkillComponent,
    ViewSkillsComponent,
    UpdateSkillComponent,
    DeleteSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
