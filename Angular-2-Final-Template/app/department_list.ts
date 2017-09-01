import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
selector:'department-list',
template:`<h1>Department list</h1>
           <ul class="items">
           <li *ngFor="let language of departmentList" (click)="onSelect(language)">
          <span class="badge"> {{language.id}}  </span>{{language.name}}
           </li>
           </ul>`
})
export class DepartmentList{
    departmentList=[
        {id:1,name:'Angular'},
        {id:2,name:'Javascript'},
        {id:3,name:'jQuery'},
        {id:4,name:'HTML'},
        {id:5,name:'CSS'}
    ];
    constructor(private route:Router) {
         
    }

    onSelect(language){
this.route.navigate(['/departments',language.id])
    }
}