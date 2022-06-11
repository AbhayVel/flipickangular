import { Component, OnInit, Input, NgModule, ElementRef, ViewChild  } from '@angular/core';
import { UAEmployee } from '../../models/UAEmployee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'qdn-ua-employee-edit-popup',
  templateUrl: './ua-employee-edit-popup.component.html',
  styleUrls: ['./ua-employee-edit-popup.component.css']
})
export class UaEmployeeEditPopupComponent implements OnInit {

  @Input() uaEmployee: UAEmployee = new UAEmployee();
  @ViewChild('uaEmployeeForm') uaEmployeeForm: any; 

  constructor() { }

  onSubmit(obj:any) {
    console.log(obj.value);
  }

  ngOnInit(): void {
    //debugger;
  }

}
