import { Component, OnInit, Input, NgModule  } from '@angular/core';
import { UAEmployee } from '../../models/UAEmployee';

@Component({
  selector: 'qdn-ua-employee-edit-popup',
  templateUrl: './ua-employee-edit-popup.component.html',
  styleUrls: ['./ua-employee-edit-popup.component.css']
})
export class UaEmployeeEditPopupComponent implements OnInit {

  @Input() uaEmployee: UAEmployee = new UAEmployee();
  //uaTempEmployee: UAEmployee = new UAEmployee();
  constructor() { }

  ngOnInit(): void {
    debugger;
    let tt = 11;
    //this.uaTempEmployee = this.uaEmployee;
  }

}
