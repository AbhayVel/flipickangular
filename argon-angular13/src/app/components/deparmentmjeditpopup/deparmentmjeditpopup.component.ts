import { Component, OnInit,Input } from '@angular/core';
import { DepartmentMJ } from 'src/app/models/DepartmentsMJ';

@Component({
  selector: 'qdn-deparmentmjeditpopup',
  templateUrl: './deparmentmjeditpopup.component.html',
  styleUrls: ['./deparmentmjeditpopup.component.css']
})
export class DeparmentmjeditpopupComponent implements OnInit {
  @Input() departmentMJ: DepartmentMJ = new DepartmentMJ();
  constructor() { }

  ngOnInit(): void {
  }

}
