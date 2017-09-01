import {Component,OnInit} from '@angular/core';
import {EmployeService1} from './Employee.component'
@Component({
    selector:'my-employee',
    template:`<h2>Employee Details</h2>
             <p>{{errormsg}}</p>
            <ul>
             <li *ngFor="let employee of Employees">{{employee.name}}</li>
             </ul>`
})
export class EmployeeComponent1 implements OnInit{
    Employees:any=[];
    errormsg:string;
    constructor(private _employeeService:EmployeService1){}
    ngOnInit(){
    this._employeeService.getEmployee().
    subscribe(resEmpdata => this.Employees = resEmpdata,
                    resEmpError=>this.errormsg=resEmpError )
    }
}