import { Component, OnInit } from '@angular/core';
import { SortModel } from 'src/app/models/sort-model';

@Component({
  selector: 'qdn-am-employees',
  templateUrl: './am-employees.component.html',
  styleUrls: ['./am-employees.component.css']
})
export class AmEmployeesComponent implements OnInit {

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
      jod: '12 Apr 2001',
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
      jod: '11 Apr 2003',
      completion: 20
    },
    {
      id: 3,
      icon: "../assets/dist/img/avatar3.png",
      firstName: 'Patricia',
      lastName: 'Lebsack',
      email: 'Julianne.OConner@kory.org',
      address: '5203 Jordon Center',
      dob:'12 Jan 2022',
      jod: '11 Apr 2017',
      completion: 40
    },
    {
      id: 4,
      icon: "../assets/dist/img/avatar4.png",
      firstName: 'Chelsey',
      lastName: 'Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      address: '91057 Davion Club',
      dob:'15 Feb 2022',
      jod: '11 May 2014',
      completion: 67
    },
    {
      id: 5,
      icon: "../assets/dist/img/avatar5.png",
      firstName: 'Dennis',
      lastName: 'Schulist',
      email: 'Karley_Dach@jasper.info',
      address: '1280 Jon Club',
      dob:'16 March 2022',
      jod: '11 Jun 2013',
      completion: 67
    },
    {
      id: 6,
      icon: "../assets/dist/img/avatar3.png",
      firstName: 'Kurtis',
      lastName: 'Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      address: '1670 Denver Club',
      dob:'17 March 2022',
      jod: '30 May 2013',
      completion: 67
    },
    {
      id: 7,
      icon: "../assets/dist/img/avatar.png",
      firstName: 'Nicholas',
      lastName: 'Runolfsdottir',
      email: 'Sherwood@rosamond.me',
      address: '91057 Mark Club',
      dob:'20 March 2022',
      jod: '29 Jan 2000',
      completion: 67
    },
    {
      id: 8,
      icon: "../assets/dist/img/avatar2.png",
      firstName: 'Glenna',
      lastName: 'Reichert',
      email: 'Chaim_McDermott@dana.io',
      address: '1122 Sam Club',
      dob:'06 Jun 2022',
      jod: '29 April 2022',
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
      jod: '15 May 2022',
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
      jod: '01 Jun 2022',
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
      },
      dob: {
        columnName: 'dob',
        value: '',
        type: 'date'
      },
      jodFrom: {
        columnName: 'jod',
        value: '',
        type: 'dteGte'
      },
      jodTo: {
        columnName: 'jod',
        value: '',
        type: 'dteLte'
      },
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
    },
    {
      name: 'dob',
      displayName: 'Birth Date',
      type: 'date',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'date',      
      }
    },
    {
      name: 'jod',
      displayName: 'Joining Date',
      type: 'date',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'daterange',
        filterFrom: 'jodFrom',
        filterTo: 'jodTo'
      }
    }
  ]
  
  statusChange(GridChanges: any, $event: any) {
    let value = $event.target.value;
    this.filterObject.filter['status'].value = value;
    GridChanges(this.filterObject, this.sortObj);
  }
  userDelete(obj: any) {
     
  }
  userEdit(obj: any) {
     
  }
  ngOnInit(): void {
  
    this.filterObject.data = this.employeeData;
    this.filterObject.rows = this.employeeData;    
  }

}
