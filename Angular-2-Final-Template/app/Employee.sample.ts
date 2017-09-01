import {Component,OnInit} from '@angular/core';
import {EmployeService1} from './Employee.component';
import {Router} from '@angular/router';

@Component({
    selector:'employee-list',
    template:`<h2>Employee List</h2>
               <ul>
               <li (click)="onClick(employee)" *ngFor="let employee of Employees[0]">{{employee.name}} {{employee.id}}
               </li>
               </ul> `
})
export class sampleEmployee implements OnInit{
     Employees=[];
    constructor(private _empservice:EmployeService1,
                private _route:Router){}
    ngOnInit(){
    this._empservice.getEmployee().
    subscribe(response=>this.Employees=response)
    }
onClick(employee){
this._route.navigate(['/Employees',employee.dept])
}
}