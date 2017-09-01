"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Employee_component_1 = require("./Employee.component");
var dummy_data_1 = require("./dummy.data");
//import {FormGroup,FormBuilder,Validators} from '@angular/forms';
var AppComponent = (function () {
    function AppComponent() {
        this.UserDetails = [];
        this.refResult = true;
        this.refInput = false;
        this.selectedValue = "All";
        this.EmployeeDetails = [
            { code: 'emp101', name: 'John', gender: 'male', annualsalary: 4000, dateofbirth: '6/25/2017' },
            { code: 'emp104', name: 'Baker', gender: 'male', annualsalary: 8000, dateofbirth: '7/25/2017' },
            { code: 'emp105', name: 'Alex', gender: 'male', annualsalary: 7000, dateofbirth: '8/25/2017' },
            { code: 'emp106', name: 'Lita', gender: 'Female', annualsalary: 3000, dateofbirth: '9/25/2017' },
            { code: 'emp107', name: 'Richard', gender: 'male', annualsalary: 5000, dateofbirth: '10/25/2017' },
            { code: 'emp108', name: 'Gary', gender: 'male', annualsalary: 6000, dateofbirth: '11/25/2017' },
            { code: 'emp109', name: 'Leela', gender: 'Female', annualsalary: 6000, dateofbirth: '12/25/2017' },
            { code: 'emp1010', name: 'Peter', gender: 'male', annualsalary: 6000, dateofbirth: '13/25/2017' },
            { code: 'emp1011', name: 'Ramya', gender: 'Female', annualsalary: 6000, dateofbirth: '14/25/2017' },
            { code: 'emp1012', name: 'Sravanthi', gender: 'Female', annualsalary: 6000, dateofbirth: '15/25/2017' }
        ];
    }
    AppComponent.prototype.getEmployeeCount = function (countvalue) {
        //console.log('hello');
        this.selectedValue = countvalue;
        //console.log(this.selectedValue)
    };
    AppComponent.prototype.getCountofAll = function () {
        return this.EmployeeDetails.length;
    };
    AppComponent.prototype.getCountofMale = function () {
        return this.EmployeeDetails.filter(function (e) { return e.gender == 'male'; }).length;
    };
    AppComponent.prototype.getCountofFemale = function () {
        return this.EmployeeDetails.filter(function (e) { return e.gender == 'Female'; }).length;
    };
    /*addData(value1,value2,value3,value4){
  this.UserDetails.push({firstname:value1,lastname:value2,email:value3,number:value4});
  this.refname='';
  this.reflastname='';
  this.refmail='';*/
    AppComponent.prototype.submit = function (e) {
        e.preventDefault();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: " <br/><label>Please Enter Your Name:</label><input type=\"text\" [(ngModel)]=\"name\"><br/>\n             <h3> Welcome <span> {{name}}</span> </h3>\n              <h1>Angular2 Input/Output Elements</h1>\n              <h2>Employee Details</h2>\n             <my-radio [All]=\"getCountofAll()\" [Male]=\"getCountofMale()\" [Female]=\"getCountofFemale()\" (radioValueSelected)=\"getEmployeeCount($event)\"></my-radio>\n              <table border=\"1\">\n            <thead>\n               <tr>\n              <th>Code</th>\n              <th>Name</th>\n              <th>Gender</th>\n              <th>Annual Salary</th>\n               <th>Date of Birth</th>\n</tr>    \n</thead>\n<tbody>\n<ng-container *ngFor=\"let employee of EmployeeDetails\">\n    <tr *ngIf=\"selectedValue=='All' || selectedValue==employee.gender\">\n        <td>{{employee.code}}</td>\n        <td>{{employee.name}}</td>\n        <td>{{employee.gender}}</td>\n        <td>{{employee.annualsalary}}</td>\n        <td>{{employee.dateofbirth}}</td>\n        </tr> \n        </ng-container>  \n    </tbody>\n</table> ",
        styles: [
            " h1 {\n    color:red\n  }\n  span {\n  color:blue  \n  }"
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
        providers: [Employee_component_1.EmployeService1, dummy_data_1.DummyJson]
        /*template:`<h1>Routing Applications</h1>
                   <nav>
                   <a routerLink="/departments" routerLinkActive="active">Departments</a>
                   <a routerLink="/employees" routerLinkActive="active">Employees</a>
                   </nav>
                   <router-outlet></router-outlet>`
      */
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map