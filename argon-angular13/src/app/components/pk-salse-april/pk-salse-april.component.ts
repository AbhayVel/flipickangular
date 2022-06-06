import { Component, OnInit } from '@angular/core';
import { SortModel } from 'src/app/models/sort-model';

@Component({
  selector: 'qdn-pk-salse-april',
  templateUrl: './pk-salse-april.component.html',
  styleUrls: ['./pk-salse-april.component.css']
})
export class PkSalseAprilComponent implements OnInit {

  aprilData: Array<any>=[

    {     
      product: "Fruits and vegetables",
      productCategory: "Grocery",
      coustomerName: "Nathan Astle",
      amount:"5000",      
    },
    {      
      product: "Pencils",
      productCategory: "Stationary",
      coustomerName: "Nathan Astle",
      amount:"4500",
    },
    {     
      product: "Frames",
      productCategory: "Furniture",
      coustomerName: "Leena Mary",
      amount:"7000",
    },
    { 
      product: "Standard Labels",
      productCategory: "Stationary",
      coustomerName: "Mary Zewe",
      amount:"8000",
    },
    {   
      product: "Pencils",
      productCategory: "Stationary",
      coustomerName: "Nathan Astle",
      amount:"2500",
    },
    {    
      product: "Copy Paper",
      productCategory: "Stationary",
      coustomerName: "Joseph Cairn",
      amount:"2000",
    },
    {   
      product: "Fruits and vegetables",
      productCategory: "Grocery",
      coustomerName: "Nathan Astle",
      amount:"3500",
    },
    {     
      product: "Standard Labels",
      productCategory: "Stationary",
      coustomerName: "Augustine Paul",
      amount:"4000",
    },
    {
      product: "Fruits and vegetables",
      productCategory: "Grocery",
      coustomerName: "Andy Roddick",
      amount:"8000",
    },
    {   
      product: "Pencils",
      productCategory: "Stationary",
      coustomerName: "Shui Tom",
      amount:"5000",
    }    
]

  filterObject: any = {
    data: [],
    rows: [],
    filter: {     
      product: {
        columnName: 'product',
        value: '',
        type: 'cs'
      },
      productCategory: {
        columnName: 'productCategory',
        value: '',
        type: 'cs'
      },
      coustomerName: {
        columnName: 'coustomerName',
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
      name: 'product',
      displayName: 'Product',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',
      }
    },
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
      name: 'coustomerName',
      displayName: 'Coustomer Name',
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
    }  
  ]

  statusChange(GridChanges: any, $event: any) {
    let value = $event.target.value;
    this.filterObject.filter['status'].value = value;
    GridChanges(this.filterObject, this.sortObj);
  }

  constructor() { }

  ngOnInit(): void {
    this.filterObject.rows=this.aprilData;
    this.filterObject.data=this.aprilData;
  }

}
