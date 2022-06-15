import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'qdn-am-employees-react-add-popup',
  templateUrl: './am-employees-react-add-popup.component.html',
  styleUrls: ['./am-employees-react-add-popup.component.css']
})
export class AmEmployeesReactAddPopupComponent implements OnInit {
 // employeeModel = new AMEmployee();
  countrymodel = { select: null };
   submitted: boolean = false;
   emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'; 
   phoneRegex = '^\d{10}$';
   zipRegex = '^\d{5}$'
   countryData: Array<any> = [
    { id:1, name:"Anguilla (UK)" },
    { id:2, name:"Aruba (NL)" },
    { id:3, name:"Bahamas" },
    { id:4, name:"Cuba" },
    { id:5, name:"Jamaica" },
  ]

  EmployeeFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(this.phoneRegex)]),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl(''),
    address: new FormControl('', [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    city: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required, Validators.pattern(this.zipRegex)]),
    term: new FormControl('')
  })

  constructor() { }
  ngOnInit(): void { }
 
  onSubmit()
  {
    this.submitted = true;
    if(this.EmployeeFormGroup?.invalid){ return;}
    console.log("isValid Form: "+ this.EmployeeFormGroup?.valid)
  }
}
