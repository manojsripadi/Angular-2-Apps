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
var router_1 = require("@angular/router");
var ContactRoute = (function () {
    function ContactRoute(_route) {
        this._route = _route;
        this.UserDetails = [];
    }
    ContactRoute.prototype.addData = function (value1, value2, value3, value4) {
        this.UserDetails.push({ name: value1, lname: value2, mail: value3, number: value4 });
        this.refname = '';
        this.reflastname = '';
        this.refmail = '';
        this.refnumber = '';
        this._route.navigate(['/Userdetails', this.UserDetails[0].name]);
    };
    return ContactRoute;
}());
ContactRoute = __decorate([
    core_1.Component({
        selector: 'contact',
        templateUrl: 'app/Add.list.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ContactRoute);
exports.ContactRoute = ContactRoute;
//# sourceMappingURL=Contact.Route.js.map