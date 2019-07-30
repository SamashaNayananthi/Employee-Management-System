import {Employee} from './employee';

export interface Skills {
  s_id: number;
  s_name: string;
  employees: Set<Employee>;
}
