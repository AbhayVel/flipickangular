import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupComponent } from 'src/app/feature/library/popup/popup.component';
import { PopUpConfig, PopUpConfigFactory } from 'src/app/feature/library/popup/PopUpConfig';
import { EmployeeMK } from 'src/app/models/EmployeeMK';
import { SortModel } from 'src/app/models/sort-model';
import { deepCopy } from 'src/app/utilities/utility';


@Component({
  selector: 'qdn-mk-employee-details',
  templateUrl: './mk-employee-details.component.html',
  styleUrls: ['./mk-employee-details.component.css']
})

export class MkEmployeeDetailsComponent implements OnInit {

  @ViewChild('popup') popup?: PopupComponent;
  constructor() { }

  oEmployee: EmployeeMK = new EmployeeMK();
  employessDetails: Array<any> = [
    {
      id: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: 61,
      email: "tigernixon@flipick.com",
      startdate: "2011-04-25",
      salary: 320800
    },
    {
      id: 2,
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: 63,
      email: "GarrettWinters@flipick.com",
      startdate: "07/25/2011",
      salary: 170750
    },
    {
      id: 3,
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: 66,
      email: "AshtonCox@flipick.com",
      startdate: "01/12/2009",
      salary: 86000
    },
    {
      id: 4,
      name: "Wick John",
      position: "Junior Technical Author",
      office: "Edinburgh",
      age: 22,
      email: "WickJohn@flipick.com",
      startdate: "03/29/2012",
      salary: 433060
    },
    {
      id: 5,
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: 33,
      email: "AiriSatou@flipick.com",
      startdate: "11/28/2008",
      salary: 162700
    },
    {
      id: 6,
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: 61,
      email: "BrielleWilliamson@flipick.com",
      startdate: "12/02/2012",
      salary: 372000
    },
    {
      id: 7,
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      age: 59,
      email: "HerrodChandler@flipick.com",
      startdate: "08/06/2012",
      salary: 137500
    },
    {
      id: 8,
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      age: 55,
      email: "RhonaDavidson@flipick.com",
      startdate: "10/14/2010",
      salary: 327900
    },
    {
      id: 9,
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      age: 39,
      email: "ColleenHurst@flipick.com",
      startdate: "09/15/2009",
      salary: 205500
    },
    {
      id: 10,
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      age: 39,
      email: "ColleenHurst@flipick.com",
      startdate: "09/15/2009",
      salary: 205500
    },
    {
      id: 11,
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      age: 23,
      email: "SonyaFrost@flipick.com",
      startdate: "12/13/2008",
      salary: 103600
    },
    {
      id: 12,
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      age: 30,
      email: "tigernixon@flipick.com",
      startdate: "2008/12/19",
      salary: 90560
    },
    {
      id: 13,
      name: "Quinn Flynn",
      position: "Office Manager",
      office: "Edinburgh",
      age: 22,
      email: "tigernixon@flipick.com",
      startdate: "2013/03/03",
      salary: 342000
    },
    {
      id: 14,
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      age: 36,
      email: "tigernixon@flipick.com",
      startdate: "2008/10/16",
      salary: 470600
    },
    {
      id: 15,
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      office: "London",
      age: 43,
      email: "tigernixon@flipick.com",
      startdate: "2012/12/18",
      salary: 313500
    },
    {
      id: 16,
      name: "Tatyana Fitzpatrick",
      position: "Regional Director",
      office: "London",
      age: 19,
      email: "tigernixon@flipick.com",
      startdate: "2010/03/17",
      salary: 385750
    },
    {
      id: 17,
      name: "Michael Silva",
      position: "Marketing Designer",
      office: "London",
      age: 66,
      email: "tigernixon@flipick.com",
      startdate: "2012/11/27",
      salary: 198500
    },
    {
      id: 18,
      name: "Michael Silva",
      position: "Marketing Designer",
      office: "London",
      age: 66,
      email: "tigernixon@flipick.com",
      startdate: "2012/11/27",
      salary: 198500
    },
    {
      id: 19,
      name: "Paul Byrd",
      position: "Chief Financial Officer (CFO)",
      office: "New York",
      age: 64,
      email: "tigernixon@flipick.com",
      startdate: "2010/06/09",
      salary: 725000
    },
    {
      id: 20,
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      age: 59,
      email: "tigernixon@flipick.com",
      startdate: "2009/04/10",
      salary: 237500
    },
    {
      id: 21,
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      age: 59,
      email: "tigernixon@flipick.com",
      startdate: "2009/04/10",
      salary: 237500
    },
    {
      id: 22,
      name: "Dai Rios",
      position: "Personnel Lead",
      office: "Edinburgh",
      age: 35,
      email: "tigernixon@flipick.com",
      startdate: "2012/09/26",
      salary: 217500
    },
    {
      id: 23,
      name: "Jenette Caldwell",
      position: "Development Lead",
      office: "New York",
      age: 30,
      email: "tigernixon@flipick.com",
      startdate: "2011/09/03",
      salary: 345000
    },
    {
      id: 24,
      name: "Yuri Berry",
      position: "Chief Marketing Officer (CMO)",
      office: "New York",
      age: 40,
      email: "tigernixon@flipick.com",
      startdate: "2009/06/25",
      salary: 675000
    },
    {
      id: 25,
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      office: "New York",
      age: 21,
      email: "tigernixon@flipick.com",
      startdate: "2011/12/12",
      salary: 106450
    },
    {
      id: 26,
      name: "Doris Wilder",
      position: "Sales Assistant",
      office: "Sidney",
      age: 23,
      email: "tigernixon@flipick.com",
      startdate: "2010/09/20",
      salary: 85600
    },
    {
      id: 27,
      name: "Angelica Ramos",
      position: "Chief Executive Officer (CEO)",
      office: "London",
      age: 47,
      email: "tigernixon@flipick.com",
      startdate: "2009/10/09",
      salary: 1200000
    },
    {
      id: 28,
      name: "Gavin Joyce",
      position: "Developer",
      office: "Edinburgh",
      age: 42,
      email: "tigernixon@flipick.com",
      startdate: "2010/12/22",
      salary: 92575
    },
    {
      id: 29,
      name: "Jennifer Chang",
      position: "Regional Director",
      office: "Singapore",
      age: 28,
      email: "tigernixon@flipick.com",
      startdate: "2010/11/14",
      salary: 92575
    },
    {
      id: 30,
      name: "Brenden Wagner",
      position: "Software Engineer",
      office: "San Francisco",
      age: 33,
      email: "tigernixon@flipick.com",
      startdate: "2011/06/07",
      salary: 206850
    }
  ]


  statusChange(GridChanges: any, $event: any) {
    let value = $event.target.value;
    this.filterObject.filter['status'].value = value;
    GridChanges(this.filterObject, this.sortObj);
  }


  columns = [
    {
      name: 'name',
      displayName: 'Name',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',

      }
    },
    {
      name: 'position',
      displayName: 'Position',
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
      name: 'office',
      displayName: 'Office',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',
      }
    },
    {
      name: 'age',
      displayName: 'Age',
      htmlName: "Age",
      type: 'num',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'template',
        fiterName: 'age'
      }
    },
    {
      name: 'startdate',
      displayName: 'Joining Date',
      htmlName: "Start date",
      type: 'num',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'template',
        fiterName: 'age'

      }
    },
    {
      name: 'salary',
      displayName: 'Salary',
      type: 'num',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'range',
        filterFrom: 'salaryFrom',
        filterTo: 'salaryTo'
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
    // {
    //   name: 'id',
    //   displayName: 'Delete',
    //   html: true,
    //   htmlName: "Delete",
    //   type: 'num',
    //   isSorting: false,
    //   filter: {
    //     isFiltering: false,
    //     filterType: 'input'
    //   }

    // },
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
      name: {
        columnName: 'name',
        value: '',
        type: 'cs'
      },
      position: {
        columnName: 'position',
        value: '',
        type: 'cs'
      },
      email: {
        columnName: 'email',
        value: '',
        type: 'cs'
      },
      office: {
        columnName: 'office',
        value: '',
        type: 'cs'
      },
      age: {
        columnName: 'age',
        value: '',
        type: 'num'
      },
      startdate: {
        columnName: 'startdate',
        value: '',
        type: 'num'
      },
      salaryFrom: {
        columnName: 'salary',
        value: '',
        type: 'numGte'
      },
      salaryTo: {
        columnName: 'salary',
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

  userDelete(obj: any) {

  }

  close($event: boolean) {
    this.popupConfig.isShowPopup = false;
  }

  saveUpdateEmployee($event: any) {
    debugger;
    console.log($event);
    for (var i = 0; 1 < this.employessDetails.length; i++) {

      if ($event.id == this.employessDetails[i].id) {
        this.employessDetails[i].name = $event.name;
        this.employessDetails[i].position = $event.position;
        this.employessDetails[i].office = $event.office;
        this.employessDetails[i].age = $event.age;
        this.employessDetails[i].email = $event.email;
        this.employessDetails[i].startdate = $event.startdate;
        this.employessDetails[i].salary = $event.salary;
        break;
      }
    }
    this.popupConfig.isShowPopup = false;
  }

  popupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({
    header: 'Edit Employee Details',
    isShowPopup: false
  });


  userEditP(obj: any) {
    this.popupConfig.isShowPopup = true;

    //  let user: UsersComponent = new UsersComponent();

    //  this.popupConfig = { ...this.popupConfig };

    this.popup?.open(this.popupConfig);
    debugger;
    //obj.startdate = new Date(obj.startdate);
    this.oEmployee = deepCopy(obj);
    //this.project = deepCopy(obj);
    this.employessDetails
  }

  userEditR(obj: any) {

  }

  ngOnInit(): void {
    this.employessDetails.forEach((e) => {
      e.projectDIsplay = `(${e.Id})-${e.Project}`;
    })
    this.filterObject.data = this.employessDetails;
    this.filterObject.rows = this.employessDetails;
  }

}
