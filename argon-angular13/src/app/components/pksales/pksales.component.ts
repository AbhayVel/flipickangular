import { Component, OnInit, ViewChild } from '@angular/core';
import { SortModel } from 'src/app/models/sort-model';
import { filterFun, sort } from 'src/app/utilities/utility';
import { Project } from '../../models/Project';
import { ConcatPipe } from '../../pipes/concat.pipe';

@Component({
  selector: 'qdn-pksales',
  templateUrl: './pksales.component.html',
  styleUrls: ['./pksales.component.css']
})
export class PksalesComponent implements OnInit {

  constructor() { }

  project: Project = new Project()
  users: Array<any> = [
    {
      id: 1,
      icon: "../assets/img/small-logos/logo-spotify.svg",
      salseman: "Bill",
      month: "Jan",
      region: "West",
      orders: 2500,
      status: 1,
      users: "av",
    },
    {
      id: 2,
      icon: "../assets/img/small-logos/logo-invision.svg",
      salseman: "Frank",
      month: "March",
      region: "East",
      orders: 7500,
      status: 2,
      users: "av",
    },
    {
      id: 3,
      icon: "../assets/img/small-logos/logo-jira.svg",
      salseman: "Harry",
      month: "Jun",
      region: "Central",
      orders: 3500,
      status: 3,
      users: "av",
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      salseman: "Janet",
      month: "Feb",
      region: "West",
      orders: 4500,
      status: 4,
      users: "av",
    },
    {
      id: 5,
      icon: "../assets/img/theme/bootstrap.jpg",
      salseman: "Joe",
      month: "Sep",
      region: "North",
      orders: 4500,
      status: 4,
      users: "av",
    },
    {
      id: 6,
      icon: "../assets/img/theme/bootstrap.jpg",
      salseman: "Martha",
      month: "Nov",
      region: "west",
      orders: 4500,
      status: 4,
      users: "av",
    },
    {
      id: 7,
      icon: "../assets/img/theme/bootstrap.jpg",
      salseman: "Mary",
      month: "Dec",
      region: "Central",
      orders: 4500,
      status: 4,
      users: "av",
    },
    {
      id: 8,
      icon: "../assets/img/theme/bootstrap.jpg",
      salseman: "ralph",
      month: "Jan",
      region: "North",
      orders: 4500,
      status: 4,
      users: "av",
    },
    {
      id: 9,
      icon: "../assets/img/theme/bootstrap.jpg",
      salseman: "Central",
      month: "March",
      region: "West",
      orders: 4500,
      status: 4,
      users: "av",
    }  
  ]
  filterObject: any = {
    data: [],
    rows: [],
    filter: {
      id: {
        columnName: 'id',
        value: '',
        type: 'num'
      },
      project: {
        columnName: 'project',
        value: '',
        type: 'cs'
      },
      month: {
        columnName: 'month',
        value: '',
        type: 'cs'
      },
      status: {
        columnName: 'status',
        value: '',
        type: 'num'
      },
      orderFrom: {
        columnName: 'order',
        value: '',
        type: 'numGte'
      },
      orderTo: {
        columnName: 'order',
        value: '',
        type: 'numLte'
      },
    },
    paging: [],
    currentPage: 1,
    pageSize: 5
  }

  sortObj: SortModel = {
    orderBy: -1,
    columnName: 'id',
    sortType: 'num',
    condition: null
  }

  columns = [
    {
      name: 'salseman',
      displayName: 'Salse Man',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',
      }
    },
    {
      name: 'region',
      displayName: 'Region',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',
      }
    },
    {
      name: 'month',
      displayName: 'Month',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',
      }
    },
    {
      name: 'orders',
      displayName: 'Orders',
      type: 'num',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'range',
        filterFrom: 'budgetFrom',
        filterTo: 'budgetTo'
      }
    },
    {
      name: 'status',
      displayName: 'Status',
      html: true,
      htmlName: "Status",
      type: 'num',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'template',
        fiterName: 'status'
      }
    },
    {
      name: 'id',
      displayName: 'Action',
      html: true,
      htmlName: "Action",
      type: 'num',
      isSorting: false,
      filter: {
        isFiltering: false,
        filterType: 'input'
      },
    },
    {
      name: 'id',
      displayName: 'Delete',
      html: true,
      htmlName: "Delete",
      type: 'num',
      isSorting: false,
      filter: {
        isFiltering: false,
        filterType: 'input'
      }

    },
  ]

  statusChange(GridChanges: any, $event: any) {
    let value = $event.target.value;
    this.filterObject.filter['status'].value = value;
    GridChanges(this.filterObject, this.sortObj);
  }

  userDelete(obj: any) {

  }

  userEditR(obj: any) {

  }

  ngOnInit(): void {
    this.users.forEach((e) => {
      e.projectDIsplay = `(${e.Id})-${e.Project}`;
    })

    this.filterObject.data = this.users;
    this.filterObject.rows = this.users;
  }

}
