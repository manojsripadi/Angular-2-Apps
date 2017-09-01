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
var dummy_data_1 = require("./dummy.data");
//import {Router} from '@angular/router';
var sampleData = (function () {
    function sampleData(_empservice) {
        this._empservice = _empservice;
        this.Employees = [];
    }
    sampleData.prototype.ngOnInit = function () {
        var _this = this;
        this._empservice.getDetails().
            subscribe(function (response) { return _this.Employees = response; });
    };
    return sampleData;
}());
sampleData = __decorate([
    core_1.Component({
        selector: 'my-data',
        template: "<h2>My Data</h2> \n               {{Employees.id}}"
    }),
    __metadata("design:paramtypes", [dummy_data_1.DummyJson])
], sampleData);
exports.sampleData = sampleData;
//# sourceMappingURL=Sample.Data.js.map