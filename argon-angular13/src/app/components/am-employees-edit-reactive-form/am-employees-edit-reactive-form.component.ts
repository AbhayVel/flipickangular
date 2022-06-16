import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AMEmployee } from 'src/app/models/am-employee';
import { AMEmployeeService } from 'src/app/services/amemployee.service';

@Component({
  selector: 'qdn-am-employees-edit-reactive-form',
  templateUrl: './am-employees-edit-reactive-form.component.html',
  styleUrls: ['./am-employees-edit-reactive-form.component.css']
})
export class AmEmployeesEditReactiveFormComponent implements OnInit {

  employee: any = new AMEmployee();
  countrymodel = { select: null };
  submitted: boolean = false;
  emailRegex = '^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$'; 
  phoneRegex = '[0-9]{10,11}';
  zipRegex = '[0-9]{5,5}'
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

 constructor(private amEmployeeService:  AMEmployeeService, private ac: ActivatedRoute,private router: Router) { }
 idData?: number;
  ngOnInit(): void {
    debugger;
    this.ac.params.subscribe((e) => {
      this.idData = +e["id"];
      this.amEmployeeService.getById(this.idData).subscribe((employee) => {
        this.employee = employee;
        this.setForm(employee);
      })
    })
  }

  setForm(employee: AMEmployee) {

     
    this.EmployeeFormGroup = new FormGroup({
      firstName: new FormControl(employee.firstName, [Validators.required]),
      lastName: new FormControl(employee.lastName, [Validators.required]),
      email: new FormControl(employee.email, [Validators.required]),
      phone: new FormControl(employee.phone, [Validators.required, Validators.pattern(this.phoneRegex)]),
      dob: new FormControl(employee.dob?formatDate(employee.dob,'yyyy-MM-dd','en_US'):'', [Validators.required]),
      gender: new FormControl(employee.gender),
      address: new FormControl(employee.address, [Validators.required]),
      country: new FormControl(employee.countryId, [Validators.required]),
      city: new FormControl(employee.city, [Validators.required]),
      zip: new FormControl(employee.zip, [Validators.required, Validators.pattern(this.zipRegex)]),
      term: new FormControl(employee.term)
    })
  }
  updatedate(event: any) {
    this.employee.dob = new Date(event);
  }
  
 onSubmit()
 {
   this.submitted = true;
   if (this.EmployeeFormGroup?.invalid) {
    
     return;
   }
   debugger;

   for (let key in this.EmployeeFormGroup.value) {
     if (this.employee.hasOwnProperty(key)) {
       this.employee[key] = this.EmployeeFormGroup.value[key];
     }
       
   }

   this.amEmployeeService.save(this.employee).subscribe((re) => {
     alert("Data got saved")
     this.router.navigateByUrl("/amemployees");
   }, (err) => {
     debugger;
     console.log("I am fail");
   })
     
   }
   //console.log("isValid Form: "+ this.EmployeeFormGroup?.valid)
 }

