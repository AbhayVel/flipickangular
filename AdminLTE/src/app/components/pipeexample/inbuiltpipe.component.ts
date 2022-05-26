import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltpipe',
  templateUrl: './inbuiltpipe.component.html',
  styleUrls: ['./inbuiltpipe.component.css']
})
export class InbuiltpipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  today = new Date();
  languages = ['Java','PHP', '.Net','JQuery', 'JavaScript','Angular','AngularJS']
}
