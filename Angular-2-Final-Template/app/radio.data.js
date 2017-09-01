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
var RadioClass = (function () {
    function RadioClass() {
        this.selectedValue = "All";
        this.radioValueSelected = new core_1.EventEmitter();
    }
    RadioClass.prototype.onChangeRadiobutton = function (value) {
        this.selectedValue = value;
        //console.log(this.selectedValue)
        this.radioValueSelected.emit(this.selectedValue);
        // console.log(this.selectedValue);
    };
    return RadioClass;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RadioClass.prototype, "All", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RadioClass.prototype, "Male", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RadioClass.prototype, "Female", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RadioClass.prototype, "radioValueSelected", void 0);
RadioClass = __decorate([
    core_1.Component({
        selector: 'my-radio',
        template: "Show:\n             <input type=\"radio\" #refMale value=\"male\"  [(ngModel)]=\"selectedValue\" (click)=\"onChangeRadiobutton(refMale.value)\" /> Male({{Male}})\n             <input type=\"radio\" #refFemale  value=\"Female\"  [(ngModel)]=\"selectedValue\" (click)=\"onChangeRadiobutton(refFemale.value)\" /> Female({{Female}})\n            <input type=\"radio\" #refAll value=\"All\"  [(ngModel)]=\"selectedValue\" (click)=\"onChangeRadiobutton(refAll.value)\" /> All({{All}})\n            "
    })
], RadioClass);
exports.RadioClass = RadioClass;
//# sourceMappingURL=radio.data.js.map