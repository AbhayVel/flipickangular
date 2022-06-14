import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AMEmployee } from 'src/app/models/am-employee';

@Component({
  selector: 'qdn-am-employees-add-popup',
  templateUrl: './am-employees-add-popup.component.html',
  styleUrls: ['./am-employees-add-popup.component.css']
})
export class AmEmployeesAddPopupComponent implements OnInit {
  @ViewChild('empaddform') form?: NgForm;
  employeeModel = new AMEmployee();
  
  model = {  select: null };
  countryData: Array<any> = [
    { id:1, name:"Anguilla (UK)" },
    { id:2, name:"Aruba (NL)" },
    { id:3, name:"Bahamas" },
    { id:4, name:"Cuba" },
    { id:5, name:"Jamaica" },
  ]
  constructor() { }
  ngOnInit(): void {}

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
    console.log("isValid Form: "+ this.form?.valid)
    // console.log(this.form?.value) 
  }
}
