import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { SortModel } from 'src/app/models/sort-model';
import { filterFunction, sort } from 'src/app/utilities/utility';
import { TableDirective } from '../table.directive';

@Component({
  selector: 'cmadmin-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterContentInit {

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

  ngOnInit(): void {this.GridChanges(this.filterObject,this.sortObj); }
  @Input() filterObject: any;
  @Input() sortObj: SortModel = new SortModel();
  @Input() columns: Array<any> = []; 

   GridChanges(filterObject: any, sortObj: any)
  {
    console.log(JSON.stringify(this.columns))
    debugger;
    filterFunction( this.filterObject);
    sort(this.filterObject.data, this.sortObj.columnName,this.sortObj.orderBy,this.sortObj.sortType,this.sortObj.condition);
    let numberOfRecord = this.filterObject.rows.length;
    let pages = Math.ceil(numberOfRecord / this.filterObject.pageSize);
    if(this.filterObject.currentPage > pages)
    {
      this.filterObject.currentPage = 1;
    }
    let startIndex = (this.filterObject.currentPage - 1) * this.filterObject.pageSize;
    let endIndex = startIndex +  this.filterObject.pageSize -1;
    const paging = [];
    for(let i=1; i<= pages; i++)
    {
      paging.push(i);
    }
    this.filterObject.paging = paging;
    this.filterObject.rows = this.filterObject.rows.slice(startIndex,endIndex);    
  }

  pChange(p: number)
  {
    this.GridChanges(this.filterObject,this.sortObj);
  }

  sortData(eve: any)
  {
    let columnName = eve.target.getAttribute("columnName");
    let sortType = eve.target.getAttribute("sortType");
    this.sortObj.orderBy = this.sortObj.orderBy*-1;
    this.sortObj.columnName = columnName;
    this.sortObj.sortType = sortType;   
    this.GridChanges(this.filterObject,this.sortObj);
  }
  filterData(eve: any)
  {
   
    console.log(eve.target.value);
    let value = eve.target.value;
    let columnName = eve.target.getAttribute("columnName");
    this.filterObject.filter[columnName].value = value;
    this.GridChanges(this.filterObject, this.sortObj);
  }

}
