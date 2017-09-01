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
var router_1 = require("@angular/router");
var sampleEmployee = (function () {
    function sampleEmployee(_empservice, _route) {
        this._empservice = _empservice;
        this._route = _route;
        this.Employees = [];
    }
    sampleEmployee.prototype.ngOnInit = function () {
        var _this = this;
        this._empservice.getEmployee().
            subscribe(function (response) { return _this.Employees = response; });
    };
    sampleEmployee.prototype.onClick = function (employee) {
        this._route.navigate(['/Employees', employee.dept]);
    };
    return sampleEmployee;
}());
sampleEmployee = __decorate([
    core_1.Component({
        selector: 'employee-list',
        template: "<h2>Employee List</h2>\n               <ul>\n               <li (click)=\"onClick(employee)\" *ngFor=\"let employee of Employees[0]\">{{employee.name}} {{employee.id}}\n               </li>\n               </ul> "
    }),
    __metadata("design:paramtypes", [Employee_component_1.EmployeService1,
        router_1.Router])
], sampleEmployee);
exports.sampleEmployee = sampleEmployee;
//# sourceMappingURL=Employee.sample.js.map