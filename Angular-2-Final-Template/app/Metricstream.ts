import {Component,OnInit} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';
import {DummyJson} from './dummy.data';

@Component({
    selector:'my-metricstream',
    templateUrl:'app/metricstream.html'
    //template:`<p>The value is:{{childData}}</p>`  
})
export class Metricstream implements OnInit{
public childData;
public userData;
constructor(private __service:DummyJson){}
ngOnInit(){
    this.__service.getDetails().
    subscribe(response => this.childData=response)
}
}