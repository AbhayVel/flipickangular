import { Component, OnInit } from '@angular/core';
import { SortModel } from 'src/app/models/sort-model';

@Component({
  selector: 'qdn-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  employeeData: Array<any> = [
    {
      id: 1,
      icon: "../assets/dist/img/avatar.png",
      firstName: 'Leanne',
      lastName: 'Graham',
      email: 'Sincere@april.biz',
      address: '7687 Jadon Port',
      dob:'16 Apr 1970',
      completion: 50
    },
    {
      id: 2,
      icon: "../assets/dist/img/avatar5.png",
      firstName: 'Ervin',
      lastName: 'Howell',
      email: 'Shanna@melissa.tv',
      address: '156 Streich Ports',
      dob:'12 Apr 1971',
      completion: 20
    },
    {
      id: 3,
      icon: "../assets/dist/img/avatar3.png",
      firstName: 'Patricia',
      lastName: 'Lebsack',
      email: 'Julianne.OConner@kory.org',
      address: '5203 Jordon Center',
      dob:'12 Jan 1987',
      completion: 40
    },
    {
      id: 4,
      icon: "../assets/dist/img/avatar4.png",
      firstName: 'Chelsey',
      lastName: 'Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      address: '91057 Davion Club',
      dob:'12 Jan 1987',
      completion: 67
    },
    {
      id: 5,
      icon: "../assets/dist/img/avatar5.png",
      firstName: 'Dennis',
      lastName: 'Schulist',
      email: 'Karley_Dach@jasper.info',
      address: '1280 Jon Club',
      dob:'12 Jan 1987',
      completion: 67
    },
    {
      id: 6,
      icon: "../assets/dist/img/avatar3.png",
      firstName: 'Kurtis',
      lastName: 'Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      address: '1670 Denver Club',
      dob:'12 Jan 1987',
      completion: 67
    },
    {
      id: 7,
      icon: "../assets/dist/img/avatar.png",
      firstName: 'Nicholas',
      lastName: 'Runolfsdottir',
      email: 'Sherwood@rosamond.me',
      address: '91057 Mark Club',
      dob:'12 Jan 1990',
      completion: 67
    },
    {
      id: 8,
      icon: "../assets/dist/img/avatar2.png",
      firstName: 'Glenna',
      lastName: 'Reichert',
      email: 'Chaim_McDermott@dana.io',
      address: '1122 Sam Club',
      dob:'12 Jan 1990',
      completion: 67
    },
    {
      id: 9,
      icon: "../assets/dist/img/avatar.png",
      firstName: 'Clementina',
      lastName: 'DuBuque',
      email: 'Rey.Padberg@karina.biz',
      address: '1567 Davion Club',
      dob:'12 Jan 1990',
      completion: 67
    },
    {
      id: 10,
      icon: "../assets/dist/img/avatar2.png",
      firstName: 'Lucious',
      lastName: 'Leuschke',
      email: 'Leuschke.Leuschke@g.biz',
      address: '16288 Reichel Harbor',
      dob:'12 Jan 1990',
      completion: 67
    }
  ];

  filterObject: any = {
    data: [],
    rows: [],
    filter: {
      id: {
        columnName: 'id',
        value: '',
        type: 'num'
      },
      firstName: {
        columnName: 'firstName',
        value: '',
        type: 'cs'
      },
      lastName: {
        columnName: 'lastName',
        value: '',
        type: 'cs'
      },
      email: {
        columnName: 'email',
        value: '',
        type: 'cs'
      }
    },
    paging: [],
    currentPage: 1,
    pageSize: 5
  }
  
  sortObj: SortModel={
    orderBy: -1,
    columnName:'id',
    sortType: 'num',
    condition: null
  }
  
  columns = [
    {
      name: 'firstName',
      displayName: 'First Name',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',      
      }
    },
    {
      name: 'lastName',
      displayName: 'Last Name',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',      
      }
    },
    {
      name: 'email',
      displayName: 'Email',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',      
      }
    }
  ]
  
  statusChange(GridChanges: any, $event: any) {
    let value = $event.target.value;
    this.filterObject.filter['status'].value = value;
    GridChanges(this.filterObject, this.sortObj);
  }
  userDelete(obj: any) {
    debugger;
  }
  userEdit(obj: any) {
    debugger;
  }
  ngOnInit(): void {
  
    this.filterObject.data = this.employeeData;
    this.filterObject.rows = this.employeeData;    
  }
}
