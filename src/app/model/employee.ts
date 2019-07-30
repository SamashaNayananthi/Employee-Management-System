import {Skills} from './skills';

export interface Employee {
  emp_id: number;
  emp_fname: string;
  emp_lname: string;
  emp_dob: Date;
  emp_email: string;
  skills: Set<Skills>;
}
