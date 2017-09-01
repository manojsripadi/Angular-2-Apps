import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router';




@Component({
template:`<p>Employee belongs to department:{{department}}</p>`
})
export class sampleEmployeeId implements OnInit{
    public department;
    constructor(private _route:ActivatedRoute){}
ngOnInit(){
this._route.params.subscribe((params:Params)=>{
    let id=params['dept'];
    this.department=id;
})
}
}