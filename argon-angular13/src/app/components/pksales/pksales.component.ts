import { Component, OnInit, ViewChild } from '@angular/core';
import { SortModel } from 'src/app/models/sort-model';
import { Project } from '../../models/Project';
import { PopupComponent } from '../../feature/library/popup/popup.component';
import { PopUpConfig, PopUpConfigFactory } from '../../feature/library/popup/PopUpConfig'

@Component({
  selector: 'qdn-pksales',
  templateUrl: './pksales.component.html',
  styleUrls: ['./pksales.component.css']
})
export class PksalesComponent implements OnInit {

  @ViewChild('popup') popup?: PopupComponent;
  constructor() { }

  project: Project = new Project()
  salse: Array<any> = [
    {
      id: 1,
      salseman: "Bill",
      month: "Jan",
      region: "West",
      orders: 2500,
      status: 1,
    },
    {
      id: 2,
      salseman: "Frank",
      month: "March",
      region: "East",
      orders: 7500,
      status: 2,
    },
    {
      id: 3,
      salseman: "Harry",
      month: "Jun",
      region: "Central",
      orders: 3500,
      status: 3,
    },
    {
      id: 4,
      salseman: "Janet",
      month: "Feb",
      region: "West",
      orders: 4500,
      status: 4,
    },
    {
      id: 5,
      salseman: "Joe",
      month: "Sep",
      region: "North",
      orders: 4500,
      status: 4,
    },
    {
      id: 6,
      salseman: "Martha",
      month: "Nov",
      region: "west",
      orders: 4500,
      status: 4,
    },
    {
      id: 7,
      salseman: "Mary",
      month: "Dec",
      region: "Central",
      orders: 4500,
      status: 4,
    },
    {
      id: 8,
      salseman: "ralph",
      month: "Jan",
      region: "North",
      orders: 4500,
      status: 4,
    },
    {
      id: 9,
      salseman: "Central",
      month: "March",
      region: "West",
      orders: 4500,
      status: 4,
    }  
  ]

  filterObject: any = {
    data: [],
    rows: [],
    filter: {
      salseman: {
        columnName: 'salseman',
        value: '',
        type: 'cs'
      },
      region: {
        columnName: 'region',
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
        filterFrom: 'orderFrom',
        filterTo: 'orderTo'
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

  popupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({
    header: 'Salse Edit'
  });

  userDelete(obj: any) {
    this.popupConfig.isShowPopup = true;

    this.popup?.open(this.popupConfig);
  }

  close($event: boolean) {

  }

  userEdit(obj: any) {
    this.popupConfig.isShowPopup = true;

    this.popup?.open(this.popupConfig);
    this.project = obj;
  }


  ngOnInit(): void {
    this.filterObject.data = this.salse;
    this.filterObject.rows = this.salse;
  }

}
