import {Component} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
selector:'contact',
templateUrl:'app/Add.list.html'
})
export class ContactRoute{
    constructor(private _route:Router){}
  public  UserDetails=[];
    public refname;
     public  reflastname;
       public refmail;
        public refnumber;
addData(value1,value2,value3,value4){
this.UserDetails.push({name:value1,lname:value2,mail:value3,number:value4});
this.refname='';
this.reflastname='';
this.refmail='';
this.refnumber='';
this._route.navigate(['/Userdetails',this.UserDetails[0].name])
}

}