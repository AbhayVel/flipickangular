import { Component, OnInit } from '@angular/core';
import { SortModel } from 'src/app/models/sort-model';
import { sort } from 'src/app/utilities/utility';
import { ConcatPipe } from '../../pipes/concat.pipe';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  users: Array<any>=[
{
  id: 1,
  icon: "../assets/img/theme/bootstrap.jpg",
  project: "Argon Design System",
  budget: "2500",
  status: 1,
  users: "av",
  completion : 60
},
{
  id: 2,
  icon: "../assets/img/theme/bootstrap.jpg",
  project: "de Now UI Kit PRO",
  budget: "1500",
  status: 2,
  users: "av",
  completion : 70
},
{
  id: 3,
  icon: "../assets/img/theme/bootstrap.jpg",
  project: "ZZ Design System",
  budget: "3500",
  status: 3,
  users: "av",
  completion : 90
},
{
  id: 4,
  icon: "../assets/img/theme/bootstrap.jpg",
  project: "ke Design System",
  budget: "4500",
  status: 4,
  users: "av",
  completion : 35
},


  ]


  sortObj: SortModel={
    orderBy: -1,
    columnName:'id',
    sortType: 'num',
    condition: null
  }

  columns = [
    {
      name: 'project',
      displayName: 'Project',
      type: 'cs',
      isSorting: false,
      isFiltering: true
    },
    {
      name: 'budget',
      displayName: 'Budget',
      type: 'num',
      isSorting: true,
      isFiltering: true
    },
    {
      name: 'status',
      displayName: 'Status',
      type: 'num',
      isSorting: true,
      isFiltering: true
    }
  ]

  filterData(columnName: string, eve: any) {
    let value = eve.target.value;
    columnName = eve.target.getAttribute("columnName");
    console.log(columnName);
    this.users=   this.users.filter((e) => {
    //  if (typeof e[columnName] == 'string') {
        return e[columnName].indexOf(value) > -1;
     // } else {
      //  return e[columnName] == value;
      //}
    })
  }

  sortData(columnName: string, sortType: string){
    this.sortObj.orderBy =this.sortObj.orderBy*-1;
    this.sortObj.columnName=columnName ;
    this.sortObj.sortType = sortType;
    if (columnName == 'project') {
      console.log("I am in project");
      this.sortObj.condition = (a: any, b: any, orderBy: any) => {
        let concatPipe = new ConcatPipe();
        let resultA = concatPipe.transform(a.project, a.id);
        let resultB = concatPipe.transform(b.project, b.id);
        return resultA.toUpperCase() > resultB.toUpperCase() ? -1 * orderBy : 1 * orderBy;
      }
    } else {
      this.sortObj.condition = null;
    }
    //sort(this.users, columnName,this.orderBy, sortType);

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
    this.users.forEach((e) => {
      e.projectDIsplay = `(${e.Id})-${e.Project}`;
    })
  }

}
