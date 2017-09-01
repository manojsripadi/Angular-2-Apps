import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { EmployeeComponent } from './Employee_list';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router';
import { DepartmentList } from './department_list';
import { EmployeeList } from './employee_details';
import {DepartmentchildList} from './department_child';
import {EmployeeComponent1} from './Employee.Component1';
import {EmployeeComponent2} from './Employee.Component2';
import {AppRouterModule} from './Router.module';
import {components} from './Router.module';
import {sampleData} from './Sample.Data';
import {DummyJson} from './dummy.data';
 //import { ReactiveFormsModule} from '@angular/forms';
//import { SubComponent }  from './sub_App';
import { FormsModule } from '@angular/forms';
import {Metricstream} from './Metricstream';
import {RadioClass} from './radio.data';
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

@NgModule({
  imports:[ BrowserModule,FormsModule,HttpModule,
 AppRouterModule
  ],
  declarations:[AppComponent,EmployeeComponent1,EmployeeComponent2,components,sampleData,Metricstream,RadioClass],
  bootstrap :[AppComponent]
})
export class AppModule { }

