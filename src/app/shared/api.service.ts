import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Skills} from '../model/skills';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private sendEmployeeUrl = 'http://localhost:8080/save';
  private allEmployeesUrl = 'http://localhost:8080/getEmployees';
  private updateEmployeeUrl = 'http://localhost:8080/updateEmployee';
  private deleteEmployeeUrl = 'http://localhost:8080/deleteEmp';

  private allSkillsUrl = 'http://localhost:8080/getSkills';
  private sendSkillUrl = 'http://localhost:8080/saveSkills';
  private updateSkillUrl = 'http://localhost:8080/updateSkill';
  private deleteSkillUrl = 'http://localhost:8080/deleteSkill';

  constructor(private http: HttpClient) {

  }

  getAllEmployees(): Observable<any> {
    return this.http.get(this.allEmployeesUrl, {responseType: 'json'});
  }

  postEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.sendEmployeeUrl, employee);
  }

  postUpdateEmpDetails(employee: Employee): Observable<any> {
    return this.http.post(this.updateEmployeeUrl, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.deleteEmployeeUrl}/${id}`);
  }



  getAllSkills(): Observable<any> {
    return this.http.get(this.allSkillsUrl, {responseType: 'json'});
  }

  postSkill(skill: Skills): Observable<any> {
    return this.http.post(this.sendSkillUrl, skill);
  }

  postUpdateSkillDetails(skill: Skills): Observable<any> {
    return this.http.post(this.updateSkillUrl, skill);
  }

  deleteSkill(id: number): Observable<any> {
    return this.http.delete(`${this.deleteSkillUrl}/${id}`);
  }



}
