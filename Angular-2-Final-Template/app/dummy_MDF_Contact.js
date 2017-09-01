/*export class AppComponent{
UserDetails=[
  {firstname:'Manoj',lastname:'kumar',mail:'manojsripadi@gmail.com',number:9148792732}];
  refname='';
  reflastname='';
  refmail='';
  refnumber;

  addData(){
this.UserDetails.push({firstname:this.refname,
                   lastname:this.reflastname,
                  mail:this.refmail,
                  number:this.refnumber});
 this.refname='';
 this.reflastname='';
 this.refmail='';
 this.refnumber='';
  }

}*/
/*
export class AppComponent implements OnInit{

  userData: FormGroup;
constructor(private _formBuilder:FormBuilder){}

ngOnInit(){
  this.userData=this._formBuilder.group({
    name:['manoj',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
    mail:[],
    address:this._formBuilder.group({
      city:[],
      street:[],
      PinCode:[null,[Validators.pattern('^[1-9][0-9]{4}')]]
    })
  })
}

 
 
onSubmit(){
console.log(this.userData.value);
  }
}*/
/*userData = new FormGroup({
 name:new FormControl('manoj',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
 mail:new FormControl(),
 address:new FormGroup({
   city:new FormControl(),
   street:new FormControl(),
   PinCode:new FormControl(null,Validators.pattern('^[1-9][0-9]{4}'))
 })
});*/ 
//# sourceMappingURL=dummy_MDF_Contact.js.map