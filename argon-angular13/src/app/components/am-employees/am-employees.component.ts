import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupComponent } from 'src/app/feature/library/popup/popup.component';
import { PopUpConfig, PopUpConfigFactory } from 'src/app/feature/library/popup/PopUpConfig';
import { AMEmployee } from 'src/app/models/am-employee';
import { SortModel } from 'src/app/models/sort-model';

@Component({
  selector: 'qdn-am-employees',
  templateUrl: './am-employees.component.html',
  styleUrls: ['./am-employees.component.css']
})
export class AmEmployeesComponent implements OnInit {

  @ViewChild('popup') popup?: PopupComponent;
  @ViewChild('popupadd') popupadd?: PopupComponent;
  amemployee: AMEmployee = new AMEmployee()

  constructor() { }
 


  employeeData: Array<any> = [
    {
      id: 1,
      icon: "../assets/dist/img/avatar.png",
      firstName: 'Leanne',
      lastName: 'Graham',
      email: 'Sincere@april.biz',
      phone: 8787654545,
      address: '7687 Jadon Port',
      countryId: 1,
      city: "Phoenix",
      zip: "41201",
      dob:'16 Apr 1970',
      jod: '12 Apr 2001',
      term: true,
      gender: 'male'
    },
    {
      id: 2,
      icon: "../assets/dist/img/avatar5.png",
      firstName: 'Ervin',
      lastName: 'Howell',
      email: 'Shanna@melissa.tv',
      phone: 8787654545,
      address: '156 Streich Ports',
      countryId: 2,
      city: "Atlanta",
      zip: "41201",
      dob:'12 Apr 1971',
      jod: '11 Apr 2003',
      term: true,
      gender: 'male'
    },
    {
      id: 3,
      icon: "../assets/dist/img/avatar3.png",
      firstName: 'Patricia',
      lastName: 'Lebsack',
      email: 'Julianne.OConner@kory.org',
      phone: 8787654545,
      address: '5203 Jordon Center',
      countryId: 3,
      city: "Portland",
      zip: "41170",
      dob:'12 Jan 2022',
      jod: '11 Apr 2017',
      term: true,
      gender: 'female'
    },
    {
      id: 4,
      icon: "../assets/dist/img/avatar4.png",
      firstName: 'Chelsey',
      lastName: 'Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      phone: 8787654545,
      address: '91057 Davion Club',
      countryId: 4,
      city: "Boston",
      zip: "54323",
      dob:'15 Feb 2022',
      jod: '11 May 2014',
      term: true,
      gender: 'female'
    },
    {
      id: 5,
      icon: "../assets/dist/img/avatar5.png",
      firstName: 'Dennis',
      lastName: 'Schulist',
      email: 'Karley_Dach@jasper.info',
      phone: 8787654545,
      address: '1280 Jon Club',
      countryId: 5,
      city: "Wichita",
      zip: "5654",
      dob:'16 March 2022',
      jod: '11 Jun 2013',
      term: true,
      gender: 'female'
    },
    {
      id: 6,
      icon: "../assets/dist/img/avatar3.png",
      firstName: 'Kurtis',
      lastName: 'Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      phone: 8787654545,
      address: '1670 Denver Club',
      countryId: 4,
      city: "Boston",
      zip: "54323",
      dob:'17 March 2022',
      jod: '30 May 2013',
      term: true,
      gender: 'male'
    },
    {
      id: 7,
      icon: "../assets/dist/img/avatar.png",
      firstName: 'Nicholas',
      lastName: 'Runolfsdottir',
      email: 'Sherwood@rosamond.me',
      phone: 8787654545,
      address: '91057 Mark Club',
      countryId: 2,
      city: "Atlanta",
      zip: "41201",
      dob:'20 March 2022',
      jod: '29 Jan 2000',
      term: true,
      gender: 'male'
    },
    {
      id: 8,
      icon: "../assets/dist/img/avatar2.png",
      firstName: 'Glenna',
      lastName: 'Reichert',
      email: 'Chaim_McDermott@dana.io',
      phone: 8787654545,
      address: '1122 Sam Club',
      countryId: 4,
      city: "Boston",
      zip: "54323",
      dob:'06 Jun 2022',
      jod: '29 April 2022',
      term: true,
      gender: 'male'
    },
    {
      id: 9,
      icon: "../assets/dist/img/avatar.png",
      firstName: 'Clementina',
      lastName: 'DuBuque',
      email: 'Rey.Padberg@karina.biz',
      phone: 8787654545,
      address: '1567 Davion Club',
      countryId: 2,
      city: "Atlanta",
      zip: "41201",
      dob:'12 Jan 1990',
      jod: '15 May 2022',
      term: true,
      gender: 'male'
    },
    {
      id: 10,
      icon: "../assets/dist/img/avatar2.png",
      firstName: 'Lucious',
      lastName: 'Leuschke',
      email: 'Leuschke.Leuschke@g.biz',
      phone: 8787654545,
      address: '16288 Reichel Harbor',
      countryId: 4,
      city: "Boston",
      zip: "54323",
      dob:'12 Jan 1990',
      jod: '01 Jun 2022',
      term: true,
      gender: 'male'
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
    },
    {
      name: "id",
      displayName: "Action",
      html: true,
      htmlName: "Action",
      type: 'num',
      isSorting: false,
      filter: {isFiltering: false, filterType: "input", filterName:"id", filterFrom: "", filterTo: ""}              
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

  popupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({
    header: 'Edit Employee'
  });


  empEditP(obj: any) {
    debugger;
    this.popupConfig.isShowPopup = true;
    this.popup?.open(this.popupConfig);
    this.amemployee = obj;
  }
  close($event: boolean) {  }

  addPopupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({
    header: 'Add Employee'
  });

  addEmpPopup(): void
  {
    this.addPopupConfig.isShowPopup = true;
    this.popupadd?.open(this.addPopupConfig);
  }

}
