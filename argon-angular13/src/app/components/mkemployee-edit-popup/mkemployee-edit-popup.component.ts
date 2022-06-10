import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { max } from 'rxjs';
import { EmployeeMK } from 'src/app/models/EmployeeMK';

@Component({
  selector: 'qdn-mkemployee-edit-popup',
  templateUrl: './mkemployee-edit-popup.component.html',
  styleUrls: ['./mkemployee-edit-popup.component.css']
})
export class MkemployeeEditPopupComponent implements OnInit, AfterContentInit, AfterViewInit {
  @Input() oEmployee: EmployeeMK = new EmployeeMK();
  @Input()
  employessDetails: any[] = [];
  officeCategory: any[] = [];
  constructor() { }

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
