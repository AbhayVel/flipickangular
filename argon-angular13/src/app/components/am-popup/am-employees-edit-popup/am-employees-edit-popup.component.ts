import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AMEmployee } from 'src/app/models/am-employee';

@Component({
  selector: 'qdn-am-employees-edit-popup',
  templateUrl: './am-employees-edit-popup.component.html',
  styleUrls: ['./am-employees-edit-popup.component.css']
})
export class AmEmployeesEditPopupComponent implements OnInit {
  @ViewChild("empeditform") form: any;
  @Input() amemployee: AMEmployee = new AMEmployee();
  model = {  select: null };
  countryData: Array<any> = [
    { id:1, name:"Anguilla (UK)" },
    { id:2, name:"Aruba (NL)" },
    { id:3, name:"Bahamas" },
    { id:4, name:"Cuba" },
    { id:5, name:"Jamaica" },
  ]
  
  constructor() { }
  ngOnInit(): void { }

  submitted = false;
  errorMsg = '';

  validateCountry(value: any) {   
   // debugger; 
    if (value === "null") {
      this.model.select = null;
    }
  }

 onSubmit() {
    this.submitted = true;  
    if(this.form?.invalid){ return;}
    console.log("isValid EDIT Form: "+ this.form?.valid);
    console.log(this.form?.value) 
  }
}
