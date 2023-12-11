import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { EMPLOYEES } from './employee-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[] {
    return EMPLOYEES;

}
}