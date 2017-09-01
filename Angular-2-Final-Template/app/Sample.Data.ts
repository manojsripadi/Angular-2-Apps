import {Component,OnInit} from '@angular/core';
import {DummyJson} from './dummy.data';
//import {Router} from '@angular/router';

@Component({
    selector:'my-data',
    template:`<h2>My Data</h2> 
               {{Employees.id}}`
})
export class sampleData implements OnInit{
     Employees=[];
    constructor(private _empservice:DummyJson
                ){}
    ngOnInit(){
    this._empservice.getDetails().
    subscribe(response=>this.Employees=response)
    }

}