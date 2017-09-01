import{NgModule} from '@angular/core';
import {sampleEmployee} from './Employee.sample';
import {sampleDepartment} from './department.sample';
import { RouterModule,Routes }   from '@angular/router';
import {sampleDepartmentId} from './sampleDepartmentId';
import {sampleEmployeeId} from './sampleEmployeeID';
import {ContactRoute} from './Contact.Route';
import {UserDetails} from './UserDetails';
import {Metricstream} from './Metricstream'
 const route:Routes=[
{path:'Employees',component:sampleEmployee},
    {path:'Departments',component:sampleDepartment},
    {path:'Departments/:id',component:sampleDepartmentId},
    {path:'Employees/:dept',component:sampleEmployeeId},
    {path:'AddList',component:ContactRoute},
    {path:'Userdetails/:details',component:UserDetails},
    {path:'metricstream',component:Metricstream}
]

@NgModule({
    imports:[
        RouterModule.forRoot(route)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRouterModule{}
export const components=[sampleDepartment,sampleEmployee,sampleDepartmentId,sampleEmployeeId,ContactRoute,UserDetails,Metricstream];