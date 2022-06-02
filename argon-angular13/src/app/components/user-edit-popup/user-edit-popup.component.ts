import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/Project';

@Component({
  selector: 'qdn-user-edit-popup',
  templateUrl: './user-edit-popup.component.html',
  styleUrls: ['./user-edit-popup.component.css']
})
export class UserEditPopupComponent implements OnInit {

  @Input() project: Project = new Project();
  constructor() { }

  ngOnInit(): void {
  }

}
