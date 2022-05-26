import { Component, OnInit } from '@angular/core';
import { UserTemp } from './usertemp';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  users: UserTemp[] = [
    { name: "Mark", age: 20 },
    { name: "Peter", age: 20 },
    { name: "Parker", age: 20 },
    { name: "Tom", age: 20 },
    { name: "Jon", age: 20 },
    { name: "raja", age: 20 }
  ]

  searchTerm = ''

  changeProperty() {
    this.users[0].name = "Jordan";
  }

  changeReference() {
    const refUsers = this.users.slice();
    refUsers[0].name = "Jordan";
    this.users = refUsers
    console.log(this.users)
  }
}
