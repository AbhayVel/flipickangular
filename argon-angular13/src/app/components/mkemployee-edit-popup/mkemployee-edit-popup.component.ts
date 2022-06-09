import { Component, Input, OnInit } from '@angular/core';
import { EmployeeMK } from 'src/app/models/EmployeeMK';

@Component({
  selector: 'qdn-mkemployee-edit-popup',
  templateUrl: './mkemployee-edit-popup.component.html',
  styleUrls: ['./mkemployee-edit-popup.component.css']
})
export class MkemployeeEditPopupComponent implements OnInit {
  @Input() oEmployee:EmployeeMK = new EmployeeMK();
  constructor() { }

  ngOnInit(): void {
  }

}
