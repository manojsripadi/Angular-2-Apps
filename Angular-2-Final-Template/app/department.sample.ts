import {Component,OnInit} from '@angular/core';
import {EmployeService1} from './Employee.component';
import {Router} from '@angular/router';

@Component({
    selector:'department-list',
    template:`<h2>Department List</h2>
               <ul class="items">
              <li (click)="onClick(employee)" *ngFor="let employee of Employees[1]">{{employee.id}}
              <span class="badge">{{employee.dpt}}</span>
              </li>
               </ul>`
})
export class sampleDepartment implements OnInit{
    Employees=[];
    constructor(private _empservice:EmployeService1,
    private _route:Router){}
    
    ngOnInit(){
    this._empservice.getEmployee().
    subscribe(response=>this.Employees=response)
    }
onClick(employee){
this._route.navigate(['/Departments',employee.id])
}
}