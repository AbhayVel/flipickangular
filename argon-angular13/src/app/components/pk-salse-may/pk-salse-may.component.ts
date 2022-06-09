import {  Component, OnInit, ViewChild } from '@angular/core';
import { SortModel } from 'src/app/models/sort-model';
import { PopupComponent } from '../../feature/library/popup/popup.component';
import { PopUpConfig, PopUpConfigFactory } from '../../feature/library/popup/PopUpConfig';
import { Project } from '../../models/Project';


@Component({
  selector: 'qdn-pk-salse-may',
  templateUrl: './pk-salse-may.component.html',
  styleUrls: ['./pk-salse-may.component.css']
})
export class PkSalseMayComponent implements OnInit {

  @ViewChild('popup') popup?: PopupComponent;
  project: Project = new Project()

  mayData: Array<any>=[

    {     
      productCategory: "Grocery",
      amount:"5000", 
      status: 1,     
    },
    {  
      productCategory: "Stationary",
      amount:"4500",
      status: 2,
    },
    {     
      productCategory: "Furniture",
      amount:"7000",
      status: 3,
    },
    { 
      productCategory: "Stationary",
      amount:"8000",
      status: 1,
    },
    {   
      productCategory: "Stationary",
      amount:"2500",
      status: 2,
    },
    {    
      productCategory: "Stationary",
      amount:"2000",
      status: 3,
    },
    {   
      productCategory: "Grocery",
      amount:"3500",
      status: 1,
    },
    {     
      productCategory: "Stationary",
      amount:"4000",
      status: 2,
    },
    {
      productCategory: "Grocery",
      amount:"8000",
      status: 3,
    },
    {   
      productCategory: "Stationary",
      amount:"5000",
      status: 1,
    }    
]

  filterObject: any = {
    data: [],
    rows: [],
    filter: { 
      productCategory: {
        columnName: 'productCategory',
        value: '',
        type: 'cs'
      },     
      amountFrom: {
        columnName: 'amount',
        value: '',
        type: 'numGte'
      },
      amountTo: {
        columnName: 'amount',
        value: '',
        type: 'numLte'
      },
      status: {
        columnName: 'status',
        value: '',
        type: 'num'
      }      
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
      name: 'productCategory',
      displayName: 'Product Category',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',
      }
    },    
    {
      name: 'amount',
      displayName: 'Amount',
      type: 'num',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'range',
        filterFrom: 'amountFrom',
        filterTo: 'amountTo'
      }
    },
    {
      name: 'status',
      displayName: 'Status',
      html: false,
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

  close($event: boolean) {

  }

  popupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({
    header: 'Category Edit'
  });

  categoryEdit(obj: any) {
    this.popupConfig.isShowPopup = true;  
    this.popup?.open(this.popupConfig);
    this.project = obj;
  }

  categoryDelete(obj: any) {
    this.popupConfig.isShowPopup = true;  
    this.popup?.open(this.popupConfig);
    this.project = obj;
  }

  constructor() { }

  ngOnInit(): void {  
    this.filterObject.rows=this.mayData;
    this.filterObject.data=this.mayData;
  }

}
