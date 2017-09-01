import { Component } from '@angular/core';
import { EmployeeService } from './Employee_Service';
import {EmployeService1} from './Employee.component';
import {Metricstream} from './Metricstream';
import {DummyJson} from './dummy.data';
//import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  template:` <br/><label>Please Enter Your Name:</label><input type="text" [(ngModel)]="name"><br/>
             <h3> Welcome <span> {{name}}</span> </h3>
              <h1>Angular2 Input/Output Elements</h1>
              <h2>Employee Details</h2>
             <my-radio [All]="getCountofAll()" [Male]="getCountofMale()" [Female]="getCountofFemale()" (radioValueSelected)="getEmployeeCount($event)"></my-radio>
              <table border="1">
            <thead>
               <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Annual Salary</th>
               <th>Date of Birth</th>
</tr>    
</thead>
<tbody>
<ng-container *ngFor="let employee of EmployeeDetails">
    <tr *ngIf="selectedValue=='All' || selectedValue==employee.gender">
        <td>{{employee.code}}</td>
        <td>{{employee.name}}</td>
        <td>{{employee.gender}}</td>
        <td>{{employee.annualsalary}}</td>
        <td>{{employee.dateofbirth}}</td>
        </tr> 
        </ng-container>  
    </tbody>
</table> `,
styles:[
 ` h1 {
    color:red
  }
  span {
  color:blue  
  }`
],
 //templateUrl: 'app/Contact_App.html'
   /*template:` <h1>This is the example of Routing</h1>   
               <nav>
              <a routerLink="/Departments" routerLinkActive="active">Departments</a><br/>
              <a routerLink="/Employees" routerLinkActive="active">Employee</a><br/>
               <a routerLink="/AddList" routerLinkActive="active">Add List</a><br/>
            <a routerLink="/metricstream" routerLinkActive="active">General </a><br/>
              </nav>   
              <router-outlet></router-outlet>
              `*/
      //templateUrl :'app/table.data.html'  ,      
  providers:[EmployeService1,DummyJson]  
  /*template:`<h1>Routing Applications</h1>
             <nav>
             <a routerLink="/departments" routerLinkActive="active">Departments</a>
             <a routerLink="/employees" routerLinkActive="active">Employees</a>
             </nav>
             <router-outlet></router-outlet>`           
*/
            })

export class AppComponent{
  public UserDetails=[];
  public refname;
  public reflastname;
  public refmail;
  public refnumber;
  public refResult=true;
  public refInput=false;
  public childData;
  public EmployeeDetails;

  selectedValue:string="All";

  constructor(){
    this.EmployeeDetails=[
      {code:'emp101',name:'John',gender:'male',annualsalary:4000,dateofbirth:'6/25/2017'},
      {code:'emp104',name:'Baker',gender:'male',annualsalary:8000,dateofbirth:'7/25/2017'},
      {code:'emp105',name:'Alex',gender:'male',annualsalary:7000,dateofbirth:'8/25/2017'},
      {code:'emp106',name:'Lita',gender:'Female',annualsalary:3000,dateofbirth:'9/25/2017'},
      {code:'emp107',name:'Richard',gender:'male',annualsalary:5000,dateofbirth:'10/25/2017'},
      {code:'emp108',name:'Gary',gender:'male',annualsalary:6000,dateofbirth:'11/25/2017'},
      {code:'emp109',name:'Leela',gender:'Female',annualsalary:6000,dateofbirth:'12/25/2017'},
      {code:'emp1010',name:'Peter',gender:'male',annualsalary:6000,dateofbirth:'13/25/2017'},
      {code:'emp1011',name:'Ramya',gender:'Female',annualsalary:6000,dateofbirth:'14/25/2017'},
      {code:'emp1012',name:'Sravanthi',gender:'Female',annualsalary:6000,dateofbirth:'15/25/2017'}
    ]
  }

getEmployeeCount(countvalue : string):void{
  //console.log('hello');
  this.selectedValue=countvalue;
  //console.log(this.selectedValue)
}

getCountofAll(){
  return this.EmployeeDetails.length;
}

getCountofMale(){
  return this.EmployeeDetails.filter(e => e.gender=='male').length;
}

getCountofFemale(){
  return this.EmployeeDetails.filter(e => e.gender=='Female').length;
}

  /*addData(value1,value2,value3,value4){
this.UserDetails.push({firstname:value1,lastname:value2,email:value3,number:value4});
this.refname='';
this.reflastname='';
this.refmail='';*/
submit(e){
e.preventDefault();
}

}

