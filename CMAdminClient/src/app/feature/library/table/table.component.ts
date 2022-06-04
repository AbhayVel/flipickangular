import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { SortModel } from 'src/app/models/sort-model';
import { filterFunction, getAccessListFunction, sort } from 'src/app/utilities/utility';
import { TableDirective } from '../table.directive';

@Component({
  selector: 'cmadmin-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterContentInit {

  colmnName: string = '';
  @ContentChildren(TableDirective) childs?: QueryList<TableDirective>;
  template: any = {};
  constructor() { }
  
  ngAfterContentInit(): void {
   this.childs?.forEach((e)=> {
      if(e.name){
      this.template[e.name] = e.temp;
     }
    }
   )
  }

  ngOnInit(): void { }
  @Input() filterObject: any;
  @Input() sortObj: SortModel = new SortModel();
  @Input() columns: Array<any> = []; 

  GridChanges(filterObject: any, sortObj: any)
  {
    //console.log(JSON.stringify(this.columns)) 
    filterFunction(this.filterObject);
    sort(this.filterObject.data, this.sortObj.columnName,this.sortObj.orderBy,this.sortObj.sortType,this.sortObj.condition);
    // default to first page
    this.filterObject.currentPage = this.filterObject.currentPage || 1;

    // default page size is 5
     var defaultPageSize = 5;
    // calculate total pages
    var totalPages = Math.ceil(this.filterObject.rows.length / this.filterObject.pageSize);
    if (this.filterObject.currentPage > totalPages) 
    {
      this.filterObject.currentPage = 1;
    }
    var startPage = 1;  var endPage;
    if (totalPages <=  defaultPageSize) 
    {
      // less than 5 total pages so show all
      startPage = 1;
      endPage = totalPages;            
    } 
    else 
    {
      // more than 5 total pages so calculate start and end pages
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
    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
    this.filterObject.paging = pages;  
    this.filterObject.totalPages  = totalPages;
    this.filterObject.totalRecordsText = this.filterObject.rows.length + " Records Found"; 
    this.filterObject.pagingAccessList = getAccessListFunction(this.filterObject); 
    this.filterObject.selectedPageAccess = this.filterObject.currentPage;
    this.filterObject.rows = this.filterObject.rows.slice(startIndex,endIndex + 1); 
  }

  pChange(p: number)
  {
    this.GridChanges(this.filterObject,this.sortObj);
  }  
  pageSizeChange(p: number)
  {
    this.filterObject.pageSize =p;
    this.GridChanges(this.filterObject,this.sortObj);
  }
  sortData(eve: any)
  {
    let columnName = eve.target.getAttribute("columnName");
    this.colmnName = columnName;
    let sortType = eve.target.getAttribute("sortType");
    this.sortObj.orderBy = this.sortObj.orderBy*-1;
    this.sortObj.columnName = columnName;
    this.sortObj.sortType = sortType;   
    this.GridChanges(this.filterObject,this.sortObj);
  }
  filterData(eve: any)
  {
    debugger;
    //console.log(eve.target.value);
    let value = eve.target.value;
    let columnName = eve.target.getAttribute("columnName");
    this.filterObject.filter[columnName].value = value;
    this.GridChanges(this.filterObject, this.sortObj);
  }

}
