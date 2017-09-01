import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
template:`<p>Department selected with id={{departments_id}}</p>`
})
export class DepartmentchildList implements OnInit{
public departments_id;
    constructor(private route:ActivatedRoute){}

    ngOnInit(){
let id=this.route.snapshot.params['id'];
this.departments_id=id;
    }
}