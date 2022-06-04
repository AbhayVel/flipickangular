import { Component, OnInit, ViewChild } from '@angular/core';
import { SortModel } from 'src/app/models/sort-model';
import { filterFun, sort } from 'src/app/utilities/utility';
import { PopupComponent } from '../../feature/library/popup/popup.component';
import { PopUpConfig, PopUpConfigFactory } from '../../feature/library/popup/PopUpConfig';
import { Project } from '../../models/Project';
import { ConcatPipe } from '../../pipes/concat.pipe';
import { FirstService } from '../../services/first.service';
import { SecondService } from '../../services/second.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild('popup') popup?: PopupComponent;
  fs?: FirstService;
 // mm?: SecondService;
  constructor(fs: FirstService,private mm: SecondService) {
    this.fs = fs;
    //this.mm = mm;
  }
  project: Project = new Project()
  users: Array<any> = [
    {
      id: 1,
      icon: "../assets/img/small-logos/logo-spotify.svg",
      project: "Argon Design System",
      budget: 2500,
      status: 1,
      users: "av",
      completion: 60
    },
    {
      id: 2,
      icon: "../assets/img/small-logos/logo-invision.svg",
      project: "de Now UI Kit PRO",
      budget: 7500,
      status: 2,
      users: "av",
      completion: 70
    },
    {
      id: 3,
      icon: "../assets/img/small-logos/logo-jira.svg",
      project: "ZZ Design System",
      budget: 3500,
      status: 3,
      users: "av",
      completion: 90
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "lke Design System",
      budget: 34500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "mke Design System",
      budget: 24500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "nke Design System",
      budget: 14500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "oke Design System",
      budget: 6500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "pke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 45001,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "qke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "rke Design System",
      budget: 500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ske Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "tke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "uke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "vke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "wke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
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
      status: {
        columnName: 'status',
        value: '',
        type: 'num'
      },
      budgetFrom: {
        columnName: 'budget',
        value: '',
        type: 'numGte'
      },
      budgetTo: {
        columnName: 'budget',
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
      name: 'project',
      displayName: 'Project',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',

      }
    },
    {
      name: 'budget',
      displayName: 'Budget',
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
  close($event: boolean) {

  }

  popupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({
    header: 'Project Edit'
  });


  userEditP(obj: any) {
    this.popupConfig.isShowPopup = true;

  //  let user: UsersComponent = new UsersComponent();

    //  this.popupConfig = { ...this.popupConfig };

    this.popup?.open(this.popupConfig);
    this.project = obj;
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

