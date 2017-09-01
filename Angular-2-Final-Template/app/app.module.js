"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var Employee_Component1_1 = require("./Employee.Component1");
var Employee_Component2_1 = require("./Employee.Component2");
var Router_module_1 = require("./Router.module");
var Router_module_2 = require("./Router.module");
var Sample_Data_1 = require("./Sample.Data");
//import { ReactiveFormsModule} from '@angular/forms';
//import { SubComponent }  from './sub_App';
var forms_1 = require("@angular/forms");
var Metricstream_1 = require("./Metricstream");
var radio_data_1 = require("./radio.data");
//import {HttpModule} from '@angular/http';
/*@NgModule({
  //imports:      [ BrowserModule,ReactiveFormsModule,FormsModule],
  imports:[BrowserModule,HttpModule,
    RouterModule.forRoot([
      {path:'departments', component:DepartmentList},
      {path:'employees',component:EmployeeList},
      {path:'departments/:id',component:DepartmentchildList}
    ])
],
  declarations: [ AppComponent,EmployeeComponent,DepartmentList,EmployeeList,DepartmentchildList ],
  bootstrap:    [ AppComponent ]
})*/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule,
            Router_module_1.AppRouterModule
        ],
        declarations: [app_component_1.AppComponent, Employee_Component1_1.EmployeeComponent1, Employee_Component2_1.EmployeeComponent2, Router_module_2.components, Sample_Data_1.sampleData, Metricstream_1.Metricstream, radio_data_1.RadioClass],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map