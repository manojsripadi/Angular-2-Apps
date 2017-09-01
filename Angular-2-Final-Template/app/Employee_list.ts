import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './Employee_Service';
@Component({
  selector: 'my-employee',
  template: `<h2>Employee Details</h2>
             <ul *ngFor="let employee of EmployeeDetails">
             <li>{{employee.name}}</li>
             </ul>`
})
export class EmployeeComponent implements OnInit{
EmployeeDetails=[];
constructor(private _employeedetails:EmployeeService){}

ngOnInit(){
  this._employeedetails.getDetails()
    .subscribe(response=>this.EmployeeDetails=response);
}

}
