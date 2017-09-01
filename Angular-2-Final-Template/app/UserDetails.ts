import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router';

@Component({
    template:`<h1>The User Details are:</h1>
                <ul>
                <li >
                {{UserDetails}}
                </li>
                </ul>`,
      inputs:[`UserDetails`]            
})
export class UserDetails implements OnInit{
    //private UserDetails; 
    private user;
    constructor(private _route:ActivatedRoute,
               private _router:Router){}
    // ngOnInit(){
     //let id=this._route.snapshot.params['id'];
     //this.departmentId=id;
//}
ngOnInit(){
this._route.params.subscribe((params:Params)=>{
     this.user=params['details'];
  
})
}


    }