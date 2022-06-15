import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { max } from 'rxjs';
import { EmployeeMK } from 'src/app/models/EmployeeMK';

@Component({
  selector: 'qdn-mkemployee-edit-popup',
  templateUrl: './mkemployee-edit-popup.component.html',
  styleUrls: ['./mkemployee-edit-popup.component.css']
})
export class MkemployeeEditPopupComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ViewChild("empmkeditform") form: any;

  @Input() oEmployee: EmployeeMK = new EmployeeMK();

  @Input() employessDetails: any[] = [];
  @Output() saveEvent: EventEmitter<any> = new EventEmitter<any>();
  officeCategory: any[] = [];
  //model = { select: null };

  constructor() { }
  submitted = false;
  errorMsg = '';

  error: any = {
    invalid: false
  }
  ngAfterViewInit(): void {
    debugger;
  }
  ngAfterContentInit(): void {
    debugger;
  }

  isIdNotValid = false;
  ngOnInit(): void {
    debugger;
    console.log(this.employessDetails);
    this.officeCategory = [...new Set(this.employessDetails.map(item => item.office))];
  }

  validateOffice(value: any) {
    debugger; 
    if (value === "null") {
      this.oEmployee.office = "";
    }
  }


  binderEvent($event: any) {
    debugger;
    this.binder($event.target, this.oEmployee);
  }

  validate($event: any) {
    // let blurval = $event.target.value;
    // debugger;
    // if (blurval == "") {
    //   this.isIdNotValid = true;
    // }
    this.validateForm($event.target);
  }

  binder(element: any, currentObject: any) {
    debugger;
    let value = element.value;
    let eName = element.name;
    currentObject[eName] = value;
  }
  onSubmit() {
    debugger;
    this.submitted = true;
    //if (this.form?.invalid) { return; }
    if (this.form?.valid) {
      this.saveEvent.next(this.oEmployee);
    } else {
      for (var key in this.form?.controls) {
        this.form?.controls[key].markAsDirty();
      }
    }
    // console.log("isValid EDIT Form: " + this.form?.valid);
    // console.log(this.form?.value)
  }


  validateForm(element: any) {
    let value = element.value;
    let eName = element.name;
    this.error[eName] = {};
    if (element.validity.valueMissing) {
      this.error.invalid = true;
      this.error[eName]["required"] = true;
    }
    debugger;
    let minValue = element.getAttribute("min");
    if (minValue) {
      if (+value < +minValue) {
        this.error.invalid = true;
        this.error[eName]["min"] = true;
      }
    }
    let maxValue = element.getAttribute("max");
    if (maxValue) {
      if (+value > +maxValue) {
        this.error.invalid = true;
        this.error[eName]["max"] = true;
      }
    }
  }

  save() {
    if (Object.entries(this.error).length == 0) {
      console.log("Saving Records.")
    } else {
      console.log("Error while validating form.")
    }
  }
}
