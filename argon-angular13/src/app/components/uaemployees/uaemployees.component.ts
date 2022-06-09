import { Component, OnInit, ViewChild } from '@angular/core';
import { SortModel } from '../../models/sort-model';
import { PopupComponent } from '../../feature/library/popup/popup.component';
import { PopUpConfigFactory, PopUpConfig } from '../../feature/library/popup/PopUpConfig';
import { UAEmployee } from '../../models/UAEmployee';

@Component({
  selector: 'qdn-uaemployees',
  templateUrl: './uaemployees.component.html',
  styleUrls: ['./uaemployees.component.css']
})
export class UAEmployeesComponent implements OnInit {

  @ViewChild('popup') popup?: PopupComponent;

  constructor() { }

  uaEmployee: UAEmployee = new UAEmployee();

  uaEmployees: Array<UAEmployee> = [
    {
      "employee_id": 100,
      "first_name": "Steven",
      "last_name": "King",
      "email": "steven.king@sqltutorial.org",
      "hire_date": "1987-06-17",
      "salary": 24000.0
    },
    {
      "employee_id": 101,
      "first_name": "Neena",
      "last_name": "Kochhar",
      "email": "neena.kochhar@sqltutorial.org",
      "hire_date": "1989-09-21",
      "salary": 17000.0
    },
    {
      "employee_id": 102,
      "first_name": "Lex",
      "last_name": "De Haan",
      "email": "lex.de haan@sqltutorial.org",
      "hire_date": "1993-01-13",
      "salary": 17000.0
    },
    {
      "employee_id": 103,
      "first_name": "Alexander",
      "last_name": "Hunold",
      "email": "alexander.hunold@sqltutorial.org",
      "hire_date": "1990-01-03",
      "salary": 9000.0
    },
    {
      "employee_id": 104,
      "first_name": "Bruce",
      "last_name": "Ernst",
      "email": "bruce.ernst@sqltutorial.org",
      "hire_date": "1991-05-21",
      "salary": 6000.0
    },
    {
      "employee_id": 105,
      "first_name": "David",
      "last_name": "Austin",
      "email": "david.austin@sqltutorial.org",
      "hire_date": "1997-06-25",
      "salary": 4800.0
    },
    {
      "employee_id": 106,
      "first_name": "Valli",
      "last_name": "Pataballa",
      "email": "valli.pataballa@sqltutorial.org",
      "hire_date": "1998-02-05",
      "salary": 4800.0
    },
    {
      "employee_id": 107,
      "first_name": "Diana",
      "last_name": "Lorentz",
      "email": "diana.lorentz@sqltutorial.org",
      "hire_date": "1999-02-07",
      "salary": 4200.0
    },
    {
      "employee_id": 108,
      "first_name": "Nancy",
      "last_name": "Greenberg",
      "email": "nancy.greenberg@sqltutorial.org",
      "hire_date": "1994-08-17",
      "salary": 12000.0
    },
    {
      "employee_id": 109,
      "first_name": "Daniel",
      "last_name": "Faviet",
      "email": "daniel.faviet@sqltutorial.org",
      "hire_date": "1994-08-16",
      "salary": 9000.0
    },
    {
      "employee_id": 110,
      "first_name": "John",
      "last_name": "Chen",
      "email": "john.chen@sqltutorial.org",
      "hire_date": "1997-09-28",
      "salary": 8200.0
    },
    {
      "employee_id": 111,
      "first_name": "Ismael",
      "last_name": "Sciarra",
      "email": "ismael.sciarra@sqltutorial.org",
      "hire_date": "1997-09-30",
      "salary": 7700.0
    },
    {
      "employee_id": 112,
      "first_name": "Jose Manuel",
      "last_name": "Urman",
      "email": "jose manuel.urman@sqltutorial.org",
      "hire_date": "1998-03-07",
      "salary": 7800.0
    },
    {
      "employee_id": 113,
      "first_name": "Luis",
      "last_name": "Popp",
      "email": "luis.popp@sqltutorial.org",
      "hire_date": "1999-12-07",
      "salary": 6900.0
    },
    {
      "employee_id": 114,
      "first_name": "Den",
      "last_name": "Raphaely",
      "email": "den.raphaely@sqltutorial.org",
      "hire_date": "1994-12-07",
      "salary": 11000.0
    },
    {
      "employee_id": 115,
      "first_name": "Alexander",
      "last_name": "Khoo",
      "email": "alexander.khoo@sqltutorial.org",
      "hire_date": "1995-05-18",
      "salary": 3100.0
    },
    {
      "employee_id": 116,
      "first_name": "Shelli",
      "last_name": "Baida",
      "email": "shelli.baida@sqltutorial.org",
      "hire_date": "1997-12-24",
      "salary": 2900.0
    },
    {
      "employee_id": 117,
      "first_name": "Sigal",
      "last_name": "Tobias",
      "email": "sigal.tobias@sqltutorial.org",
      "hire_date": "1997-07-24",
      "salary": 2800.0
    },
    {
      "employee_id": 118,
      "first_name": "Guy",
      "last_name": "Himuro",
      "email": "guy.himuro@sqltutorial.org",
      "hire_date": "1998-11-15",
      "salary": 2600.0
    },
    {
      "employee_id": 119,
      "first_name": "Karen",
      "last_name": "Colmenares",
      "email": "karen.colmenares@sqltutorial.org",
      "hire_date": "1999-08-10",
      "salary": 2500.0
    },
    {
      "employee_id": 120,
      "first_name": "Matthew",
      "last_name": "Weiss",
      "email": "matthew.weiss@sqltutorial.org",
      "hire_date": "1996-07-18",
      "salary": 8000.0
    },
    {
      "employee_id": 121,
      "first_name": "Adam",
      "last_name": "Fripp",
      "email": "adam.fripp@sqltutorial.org",
      "hire_date": "1997-04-10",
      "salary": 8200.0
    },
    {
      "employee_id": 122,
      "first_name": "Payam",
      "last_name": "Kaufling",
      "email": "payam.kaufling@sqltutorial.org",
      "hire_date": "1995-05-01",
      "salary": 7900.0
    },
    {
      "employee_id": 123,
      "first_name": "Shanta",
      "last_name": "Vollman",
      "email": "shanta.vollman@sqltutorial.org",
      "hire_date": "1997-10-10",
      "salary": 6500.0
    },
    {
      "employee_id": 126,
      "first_name": "Irene",
      "last_name": "Mikkilineni",
      "email": "irene.mikkilineni@sqltutorial.org",
      "hire_date": "1998-09-28",
      "salary": 2700.0
    },
    {
      "employee_id": 145,
      "first_name": "John",
      "last_name": "Russell",
      "email": "john.russell@sqltutorial.org",
      "hire_date": "1996-10-01",
      "salary": 14000.0
    },
    {
      "employee_id": 146,
      "first_name": "Karen",
      "last_name": "Partners",
      "email": "karen.partners@sqltutorial.org",
      "hire_date": "1997-01-05",
      "salary": 13500.0
    },
    {
      "employee_id": 176,
      "first_name": "Jonathon",
      "last_name": "Taylor",
      "email": "jonathon.taylor@sqltutorial.org",
      "hire_date": "1998-03-24",
      "salary": 8600.0
    },
    {
      "employee_id": 177,
      "first_name": "Jack",
      "last_name": "Livingston",
      "email": "jack.livingston@sqltutorial.org",
      "hire_date": "1998-04-23",
      "salary": 8400.0
    },
    {
      "employee_id": 178,
      "first_name": "Kimberely",
      "last_name": "Grant",
      "email": "kimberely.grant@sqltutorial.org",
      "hire_date": "1999-05-24",
      "salary": 7000.0
    },
    {
      "employee_id": 179,
      "first_name": "Charles",
      "last_name": "Johnson",
      "email": "charles.johnson@sqltutorial.org",
      "hire_date": "2000-01-04",
      "salary": 6200.0
    },
    {
      "employee_id": 192,
      "first_name": "Sarah",
      "last_name": "Bell",
      "email": "sarah.bell@sqltutorial.org",
      "hire_date": "1996-02-04",
      "salary": 4000.0
    },
    {
      "employee_id": 193,
      "first_name": "Britney",
      "last_name": "Everett",
      "email": "britney.everett@sqltutorial.org",
      "hire_date": "1997-03-03",
      "salary": 3900.0
    },
    {
      "employee_id": 200,
      "first_name": "Jennifer",
      "last_name": "Whalen",
      "email": "jennifer.whalen@sqltutorial.org",
      "hire_date": "1987-09-17",
      "salary": 4400.0
    },
    {
      "employee_id": 201,
      "first_name": "Michael",
      "last_name": "Hartstein",
      "email": "michael.hartstein@sqltutorial.org",
      "hire_date": "1996-02-17",
      "salary": 13000.0
    },
    {
      "employee_id": 202,
      "first_name": "Pat",
      "last_name": "Fay",
      "email": "pat.fay@sqltutorial.org",
      "hire_date": "1997-08-17",
      "salary": 6000.0
    },
    {
      "employee_id": 203,
      "first_name": "Susan",
      "last_name": "Mavris",
      "email": "susan.mavris@sqltutorial.org",
      "hire_date": "1994-06-07",
      "salary": 6500.0
    },
    {
      "employee_id": 204,
      "first_name": "Hermann",
      "last_name": "Baer",
      "email": "hermann.baer@sqltutorial.org",
      "hire_date": "1994-06-07",
      "salary": 10000.0
    },
    {
      "employee_id": 205,
      "first_name": "Shelley",
      "last_name": "Higgins",
      "email": "shelley.higgins@sqltutorial.org",
      "hire_date": "1994-06-07",
      "salary": 12000.0
    },
    {
      "employee_id": 206,
      "first_name": "William",
      "last_name": "Gietz",
      "email": "william.gietz@sqltutorial.org",
      "hire_date": "1994-06-07",
      "salary": 8300.0
    }
  ];
  filterObject: any = {
    data: [],
    rows: [],
    filter: {
      employee_id: {
        columnName: 'employee_id',
        value: '',
        type: 'num'
      },
      first_name: {
        columnName: 'first_name',
        value: '',
        type: 'cs'
      },
      last_name: {
        columnName: 'last_name',
        value: '',
        type: 'cs'
      },
      email: {
        columnName: 'email',
        value: '',
        type: 'cs'
      },
      hire_date: {
        columnName: 'hire_date',
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
      }
    },
    paging: [],
    currentPage: 1,
    pageSize: 5
  }
  sortObj: SortModel = {
    orderBy: -1,
    columnName: 'employee_id',
    sortType: 'num',
    condition: null
  }

  columns = [
    {
      name: 'employee_id',
      displayName: 'Id',
      type: 'num',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',
      }
    },
    {
      name: 'first_name',
      displayName: 'FName',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',
      }
    },
    {
      name: 'last_name',
      displayName: 'LName',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',
      }
    },
    {
      name: 'email',
      displayName: 'E-mail',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input'
      },
    },
    {
      name: 'hire_date',
      displayName: 'Hire Date',
      type: 'num',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input'
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
      name: 'employee_id',
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
      name: 'employee_id',
      displayName: 'Delete',
      html: true,
      htmlName: "Delete",
      type: 'num',
      isSorting: false,
      filter: {
        isFiltering: false,
        filterType: 'input'
      }
    }
  ]

  popupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({
    header: 'Employee Edit'
  });

  userDelete(obj: any) {

  }

  close($event: boolean) {
    debugger;
    console.log(this.uaEmployee.first_name);
  }

  userEditP(obj: any) {
    this.popupConfig.isShowPopup = true;
    this.popup?.open(this.popupConfig);
    this.uaEmployee = obj;
  }

  userEditR(obj: any) {

  }

  ngOnInit(): void {
    this.filterObject.data = this.uaEmployees;
    this.filterObject.rows = this.uaEmployees;
  }

}
