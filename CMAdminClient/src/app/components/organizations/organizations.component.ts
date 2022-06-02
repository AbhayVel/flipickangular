import { Component, OnInit } from '@angular/core';
import { SortModel } from 'src/app/models/sort-model';
import { ColumnsDetails } from 'src/app/models/table-template-model';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  organizations: Array<any> =[];
  tempOrganizations : Array<any> =[];
  columns: Array<ColumnsDetails> = [];
  constructor(private organizationservice: OrganizationService) { }
  
  ngOnInit(): void 
  { 
    debugger;
    this.organizations = this.organizationservice.organizationsData;
    this.columns = this.organizationservice.Columns;
    this.filterObject.data =  this.organizations;
    this.filterObject.rows =  this.organizations;
    this.setFilterObjectFilter();   
  }

  sortObj: SortModel={
    orderBy: -1,
    columnName:'srNo',
    sortType: 'num',
    condition: null
  }
  filterObject: any = {
    data:[],
    rows:[],
    filter:{},
    paging : [],
    currentPage: 1,
    pageSize: 5
  }
 

  setFilterObjectFilter() {
    //debugger;
    var filters = [];
    for(var i= 0; i< this.columns.length; i++)
    {
      var colName = this.columns[i].name.toString();
      let filter= { [colName]: { 'columnName' : colName, 'value' : '', type: this.columns[i].type }};
      filters.push(filter);
    }
    var obj = filters.reduce((a, b) => Object.assign(a, b), {});
    this.filterObject.filter = obj;
    console.log('fiterObj: ' + JSON.stringify(this.filterObject.filter));
  }

}
