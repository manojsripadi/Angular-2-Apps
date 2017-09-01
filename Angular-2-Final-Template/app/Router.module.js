"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Employee_sample_1 = require("./Employee.sample");
var department_sample_1 = require("./department.sample");
var router_1 = require("@angular/router");
var sampleDepartmentId_1 = require("./sampleDepartmentId");
var sampleEmployeeID_1 = require("./sampleEmployeeID");
var Contact_Route_1 = require("./Contact.Route");
var UserDetails_1 = require("./UserDetails");
var Metricstream_1 = require("./Metricstream");
var route = [
    { path: 'Employees', component: Employee_sample_1.sampleEmployee },
    { path: 'Departments', component: department_sample_1.sampleDepartment },
    { path: 'Departments/:id', component: sampleDepartmentId_1.sampleDepartmentId },
    { path: 'Employees/:dept', component: sampleEmployeeID_1.sampleEmployeeId },
    { path: 'AddList', component: Contact_Route_1.ContactRoute },
    { path: 'Userdetails/:details', component: UserDetails_1.UserDetails },
    { path: 'metricstream', component: Metricstream_1.Metricstream }
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(route)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRouterModule);
exports.AppRouterModule = AppRouterModule;
exports.components = [department_sample_1.sampleDepartment, Employee_sample_1.sampleEmployee, sampleDepartmentId_1.sampleDepartmentId, sampleEmployeeID_1.sampleEmployeeId, Contact_Route_1.ContactRoute, UserDetails_1.UserDetails, Metricstream_1.Metricstream];
//# sourceMappingURL=Router.module.js.map