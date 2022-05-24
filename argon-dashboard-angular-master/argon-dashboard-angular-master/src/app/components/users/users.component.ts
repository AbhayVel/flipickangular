import { Component, OnInit } from '@angular/core';
import { sort } from 'src/app/utilities/utility';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  users: Array<any>=[
{
  icon: "../assets/img/theme/bootstrap.jpg",
  project: "Argon Design System",
  budget: "2500",
  status: 1,
  users: "av",
  completion : 60
},
{
  icon: "../assets/img/theme/bootstrap.jpg",
  project: "de Now UI Kit PRO",
  budget: "1500",
  status: 2,
  users: "av",
  completion : 70
},
{
  icon: "../assets/img/theme/bootstrap.jpg",
  project: "ZZ Design System",
  budget: "3500",
  status: 3,
  users: "av",
  completion : 90
},
{
  icon: "../assets/img/theme/bootstrap.jpg",
  project: "ke Design System",
  budget: "4500",
  status: 4,
  users: "av",
  completion : 35
},


  ]



  orderBy: number=-1;
  sortData(columnName: string, sortType: string){
    this.orderBy =this.orderBy*-1;
    sort(this.users, columnName,this.orderBy, sortType);

  //   this.users.sort((a,b)=>{  //callback function
  //     if(sortType=='num' || sortType=='cs'){
  //       return a[columnName]> b[columnName] ? -1*this.orderBy: 1*this.orderBy;
  //     } else if(sortType=='ci'){
  //       return a[columnName].toLowerCase()> b[columnName].toLowerCase() ? -1*this.orderBy: 1*this.orderBy;
  //     }

  //  });


  //   if(columnName=='project'){
  //  this.users.sort((a,b)=>{  //callback function
  //    return a.project> b.project ? -1*this.orderBy: 1*this.orderBy;
  //  });
  //   }else if(columnName=='budget') {
  //     this.users.sort((a,b)=>{
  //       return a.budget> b.budget ? -1*this.orderBy: 1*this.orderBy;
  //     });
  //   } else if(columnName=='status') {
  //     this.users.sort((a,b)=>{
  //       return a.budget> b.budget ? -1*this.orderBy: 1*this.orderBy;
  //     });
  //   }
  }
  ngOnInit(): void {
  }

}
