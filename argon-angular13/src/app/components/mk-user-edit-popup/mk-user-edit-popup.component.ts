import { Component, Input, OnInit } from '@angular/core';
import { EmployeeMK } from 'src/app/models/EmployeeMK';
import { mkUser } from 'src/app/models/mkUser';

@Component({
  selector: 'qdn-mk-user-edit-popup',
  templateUrl: './mk-user-edit-popup.component.html',
  styleUrls: ['./mk-user-edit-popup.component.css']
})
export class MkUserEditPopupComponent implements OnInit {
  @Input() oMkUser: mkUser = new mkUser();
  //@Input() oEmployee:EmployeeMK = new EmployeeMK();
  constructor() { }

  ngOnInit(): void {
  }

}
