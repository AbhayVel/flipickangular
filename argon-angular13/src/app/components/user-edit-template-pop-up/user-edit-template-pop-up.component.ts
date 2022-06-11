import { Component, Input, OnInit, Output, Query, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../../models/Project';

@Component({
  selector: 'qdn-user-edit-template-pop-up',
  templateUrl: './user-edit-template-pop-up.component.html',
  styleUrls: ['./user-edit-template-pop-up.component.css']
})
export class UserEditTemplatePopUpComponent implements OnInit {

  @ViewChild('projectele') projectele?: Query;
  @ViewChild('id') id?: Query;

  @ViewChild('projectForm') form?: NgForm;
  constructor() { }
  @Input() project: Project = new Project()
  @Output() saveEvent: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
  }


  save() {
    if (this.form?.valid) {
      this.saveEvent.next(this.project);
    } else {
      for (var key in this.form?.controls) {
        this.form?.controls[key].markAsDirty();
      }
    }
   
  }
}
