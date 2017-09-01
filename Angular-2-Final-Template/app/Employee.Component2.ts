import {Component,OnInit} from '@angular/core';
import {EmployeService1} from './Employee.component'
@Component({
    selector:'my-employee2',
    template:`<p>{{errormsg}}</p>
             <ul>
             <li *ngFor="let employee of Employees">{{employee.name}} {{employee.age}}  {{employee.id}}</li>
             </ul>`
})
export class EmployeeComponent2 implements OnInit{
    Employees:any=[];
    errormsg:string;
    constructor(private _employeeService:EmployeService1){}
    ngOnInit(){
    this._employeeService.getEmployee().
    subscribe(resEmpdata => this.Employees = resEmpdata,
               resEmpError=>this.errormsg=resEmpError    )
    }
}