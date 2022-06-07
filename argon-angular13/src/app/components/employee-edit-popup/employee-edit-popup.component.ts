import { Component, Input, OnInit } from '@angular/core';
import { EmployeesMJ } from 'src/app/models/EmployeesMJ';

@Component({
  selector: 'qdn-employee-edit-popup',
  templateUrl: './employee-edit-popup.component.html',
  styleUrls: ['./employee-edit-popup.component.css']
})
export class EmployeeEditPopupComponent implements OnInit {
  @Input() employeeMJ:EmployeesMJ=new EmployeesMJ();
  constructor() { }

  ngOnInit(): void {
  }

}
