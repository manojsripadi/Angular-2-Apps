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
var Employee_Service_1 = require("./Employee_Service");
var EmployeeComponent = (function () {
    function EmployeeComponent(_employeedetails) {
        this._employeedetails = _employeedetails;
        this.EmployeeDetails = [];
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeedetails.getDetails()
            .subscribe(function (response) { return _this.EmployeeDetails = response; });
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'my-employee',
        template: "<h2>Employee Details</h2>\n             <ul *ngFor=\"let employee of EmployeeDetails\">\n             <li>{{employee.name}}</li>\n             </ul>"
    }),
    __metadata("design:paramtypes", [Employee_Service_1.EmployeeService])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=Employee_list.js.map