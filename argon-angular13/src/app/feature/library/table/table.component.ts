import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Input , AfterContentInit} from '@angular/core';
import { ContentChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SortModel } from '../../../models/sort-model';
import { filterFun, sort } from '../../../utilities/utility';
import { TableDirective } from '../table.directive';

@Component({
  selector: 'qdn-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterContentInit {

  @ContentChildren(TableDirective) childs?: QueryList<TableDirective>;

  template: any = {};

 

  constructor() { }
    ngAfterContentInit(): void {
      this.childs?.forEach((e) => {
        if (e.name) {
          this.template[e.name] = e.temp;
        }       
      })
    }

  ngOnInit(): void {
   
    this.GridChanges(this.filterObject, this.sortObj);
  }

  @Input() filterObject: any;

  @Input() sortObj: SortModel= new SortModel();

  @Input() columns: Array<any>=[];


  GridChanges(filterObject: any, sortObj: any) {
    filterFun(this.filterObject);
    sort(this.filterObject.rows, this.sortObj.columnName, this.sortObj.orderBy, this.sortObj.sortType, this.sortObj.condition);
    /*let numberOfRecord = this.filterObject.rows.length;
    let pages = Math.ceil(numberOfRecord / this.filterObject.pageSize);
    if (this.filterObject.currentPage > pages) {
      this.filterObject.currentPage = 1;
    }


    let startIndex = (this.filterObject.currentPage - 1) * this.filterObject.pageSize;
    let endIndex = startIndex + this.filterObject.pageSize;
    const paging = []
    for (let i = 1; i <= pages; i++) {
      paging.push(i);
    }
    this.filterObject.paging = paging;
    this.filterObject.rows = this.filterObject.rows.slice(startIndex, endIndex);*/

    this.filterObject.currentPage = this.filterObject.currentPage || 1;  
    var defaultPageSize = 5;
    var totalPages = Math.ceil(this.filterObject.rows.length / this.filterObject.pageSize);
    if (this.filterObject.currentPage > totalPages) 
    {
      this.filterObject.currentPage = 1;
    }
    var startPage = 1;  var endPage;
    if (totalPages <=  defaultPageSize) 
    {
      startPage = 1;
      endPage = totalPages;            
    } 
    else 
    {
      if (this.filterObject.currentPage <= 3) 
      {
        startPage = 1;
        endPage = defaultPageSize;            
      } 
      else if (this.filterObject.currentPage + 2 >= totalPages) 
      {
         startPage = totalPages - 4;
         endPage = totalPages;
      } 
      else 
      {
        startPage = this.filterObject.currentPage - 2;
        endPage = this.filterObject.currentPage + 2;
      }
    }
    // calculate start and end item indexes
    var startIndex = (this.filterObject.currentPage - 1) * this.filterObject.pageSize;
    var endIndex = Math.min(startIndex + parseInt(this.filterObject.pageSize) - 1, this.filterObject.rows.length - 1);
    var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
    
    this.filterObject.paging = pages;  
    this.filterObject.totalPages  = totalPages;
    this.filterObject.totalRecordsText = this.filterObject.rows.length + " Records Found"; 
    //this.filterObject.pagingAccessList = getAccessListFunction(this.filterObject); 
    this.filterObject.selectedPageAccess = this.filterObject.currentPage;
    this.filterObject.rows = this.filterObject.rows.slice(startIndex,endIndex + 1);
  }

  pChange(p: number) {

    this.GridChanges(this.filterObject, this.sortObj);

  }


  filterData(eve: any) {
    let value = eve.target.value;
    let columnName = eve.target.getAttribute("columnName");
    this.filterObject.filter[columnName].value = value;
    this.GridChanges(this.filterObject, this.sortObj);
  }

  sortData(eve: any) {
    let columnName = eve.target.getAttribute("columnName");
    let sortType = eve.target.getAttribute("sortType");
    this.sortObj.orderBy = this.sortObj.orderBy * -1;
    this.sortObj.columnName = columnName;
    this.sortObj.sortType = sortType;
    //if (columnName == 'project') {
    //  console.log("I am in project");
    //  this.sortObj.condition = (a: any, b: any, orderBy: any) => {
    //    let concatPipe = new ConcatPipe();
    //    let resultA = concatPipe.transform(a.project, a.id);
    //    let resultB = concatPipe.transform(b.project, b.id);
    //    return resultA.toUpperCase() > resultB.toUpperCase() ? -1 * orderBy : 1 * orderBy;
    //  }
    //} else {
    //  this.sortObj.condition = null;
    //}
    this.GridChanges(this.filterObject, this.sortObj);
   
  }


}
