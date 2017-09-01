import {Component,Input,Output,EventEmitter} from '@angular/core';


@Component({
    selector:'my-radio',
    template:`Show:
             <input type="radio" #refMale value="male"  [(ngModel)]="selectedValue" (click)="onChangeRadiobutton(refMale.value)" /> Male({{Male}})
             <input type="radio" #refFemale  value="Female"  [(ngModel)]="selectedValue" (click)="onChangeRadiobutton(refFemale.value)" /> Female({{Female}})
            <input type="radio" #refAll value="All"  [(ngModel)]="selectedValue" (click)="onChangeRadiobutton(refAll.value)" /> All({{All}})
            `
})
export class RadioClass{
public selectedValue:string="All";
@Input()
public All;

@Input()
public Male;

@Input()
public Female;

@Output()
radioValueSelected:EventEmitter<string>=new EventEmitter<string>();

onChangeRadiobutton(value){
    this.selectedValue=value;
    //console.log(this.selectedValue)
    this.radioValueSelected.emit(this.selectedValue);
   // console.log(this.selectedValue);
}

}