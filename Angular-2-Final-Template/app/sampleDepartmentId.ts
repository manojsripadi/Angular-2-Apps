import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router';

@Component({
    template:`<p>The selected department id is:{{departmentId }}</p>
               <a (click)="onPreviuos()">Previous</a>
               <a (click)="onNext()">Next</a> `
})
export class sampleDepartmentId implements OnInit{
    private departmentId; 
    constructor(private _route:ActivatedRoute,
               private _router:Router){}
    // ngOnInit(){
     //let id=this._route.snapshot.params['id'];
     //this.departmentId=id;
//}
ngOnInit(){
this._route.params.subscribe((params:Params)=>{
    let id=parseInt(params['id']);
    this.departmentId=id;
})
}

onPreviuos(){
    let previuosId=parseInt(this.departmentId)-1;
    this._router.navigate(['/Departments',previuosId])
}
onNext(){
    let previuosId=parseInt(this.departmentId)+1;
    this._router.navigate(['/Departments',previuosId])
}
    }