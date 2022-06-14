import { Component, Input, OnInit } from '@angular/core';
import { Organization } from 'src/app/models/am-organizations';

@Component({
  selector: 'qdn-am-organizations-edit-popup',
  templateUrl: './am-organizations-edit-popup.component.html',
  styleUrls: ['./am-organizations-edit-popup.component.css']
})
export class AmOrganizationsEditPopupComponent implements OnInit {

  @Input() organization: Organization = new Organization();
  constructor() { }

  ngOnInit(): void {
  }

}
