import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  users : Array<any> = [
    {
      icon:"../assets/img/theme/bootstrap.jpg",
      project:"Argon Design System",
      budget:"2500",
      status:1,
      users:"Mayank",
      completion:55
    },
    {
      icon:"../assets/img/theme/bootstrap.jpg",
      project:"Argon Design System 2",
      budget:"3500",
      status:2,
      users:"Manoj",
      completion:72
    },
    {
      icon:"../assets/img/theme/bootstrap.jpg",
      project:"Argon Design System 3",
      budget:"6500",
      status:2,
      users:"Nitin",
      completion:95
    },
    {
      icon:"../assets/img/theme/bootstrap.jpg",
      project:"Argon Design System 4",
      budget:"8500",
      status:3,
      users:"Shekhar",
      completion:100
    },
    {
      icon:"../assets/img/theme/bootstrap.jpg",
      project:"Argon Design System 4",
      budget:"4500",
      status:3,
      users:"Vishal",
      completion:100
    },
  ]

  orderBy:number = -1;
  sortData(columnName:string , sortType:string){
    debugger;
    this.orderBy = this.orderBy*-1;

    this.users.sort((a,b) =>{
      if(sortType == 'num' || sortType =='cs'){
        if(a[columnName] !==null && b[columnName] !=null){
          return a[columnName] > b[columnName] ? -1*this.orderBy : 1*this.orderBy;
        }        
      }else if(sortType == "ci"){
        if(a[columnName] !==null && b[columnName] !=null){
          return a[columnName].toLowerCase() > b[columnName].toLowerCase() ? -1 * this.orderBy : 1 * this.orderBy;
        }
      }
      
    })
  }

  ngOnInit(): void {
  }

}
