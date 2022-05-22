import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

 
  userList = [{
    icon : '',
    PROJECT : 'Argon Design System',
    BUDGET : 4500,
    STATUS :1,
    USERS : 'vishal',
    COMPLETION : 60
  },
  {
    icon : '',
    PROJECT : 'ANGULAR Now UI Kit PRO',
    BUDGET : 3500,
    STATUS :1,
    USERS : 'manoj',
    COMPLETION : 30
  },
  {
    icon : '',
    PROJECT : 'Black Dashboard',
    BUDGET : 5500,
    STATUS :3,
    USERS : 'mayank',
    COMPLETION : 50
  },
  {
    icon : '',
    PROJECT : 'React Material Dashboard',
    BUDGET : 2000,
    STATUS :2,
    USERS : 'nitin',
    COMPLETION : 90
  },
  {
    icon : '',
    PROJECT : 'Vue Paper UI Kit PRO',
    BUDGET : 4000,
    STATUS :3,
    USERS : 'shekhar',
    COMPLETION : 99
  }
];

 orderBy:number =-1;
 sortData(columnName:string,columnType:string) {
   this.orderBy =this.orderBy * - 1;

  return this.userList.sort((a,b)=> {
    if(columnType =='numb' || columnType == 'cs'){
      return a[columnName] > b[columnName]  ? -1 * this.orderBy :1 * this.orderBy;
    }
    else if(columnType =='ci') {
      return a[columnName].toLowerCase() > b[columnName].toLowerCase()  ? -1 * this.orderBy :1 * this.orderBy;
    }
  });
};

  ngOnInit(): void {
  }

}
