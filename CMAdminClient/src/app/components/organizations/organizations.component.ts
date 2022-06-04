import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableComponent } from 'src/app/feature/library/table/table.component';
import { OrganizationDropDownData } from 'src/app/models/organization';
import { SortModel } from 'src/app/models/sort-model';
import { ColumnsDetails } from 'src/app/models/table-template-model';
import { OrganizationService } from 'src/app/services/organization.service';
import { getAccessListFunction, getFilterForFilterObject } from 'src/app/utilities/utility';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {
  title = '0';
  @ViewChild(TableComponent) child?: TableComponent;
  organizations: Array<any> =[];
  tempOrganizations : Array<any> =[];
  columns: Array<ColumnsDetails> = [];
  organizationDropDownList: OrganizationDropDownData[] = [];
  orgDropDownListForm = this.fb.group({ name: [''] })
  constructor(private organizationService: OrganizationService, public fb: FormBuilder, ) { }
  
  ngOnInit(): void 
  {
    this.getOrganizationDropDownListData();
    this.getOrganizationData();    
  }
  getOrganizationDropDownListData(): void 
  {
    this.organizationService.getOrganizations()
      .subscribe({next: (data) => {        
          this.organizationDropDownList = data.result;   
        }, error: (err) => { console.log(err); }
      });
  }
  onSubmit() {
    this.getOrganizationData();
  }
  sortObj: SortModel={
    orderBy: -1,
    columnName:'row',
    sortType: 'num',
    condition: null
  }
  filterObject: any = {
    data:[],
    rows:[],
    filter:{},
    paging : [],
    currentPage: 1,
    pageSize: 10,
    totalPages:0,
    totalRecordsText: '',
    isShowInlineFilter: false,
    pageSizeList: [10, 25, 50, 100, 200, 500, 1000],
    pagingAccessList:[],
    selectedPageAccess: 1
  }

  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};
    if (searchTitle) { params[`SearchTitle`] = searchTitle;  }
    if (page) {params[`PageNumber`] = page; }
    if (pageSize) { params[`PageSize`] = pageSize; }
    return params;
  }
  
  getOrganizationData(setPageAccessList: boolean = true): void 
  {
          
   /* this.filterObject.data = this.organizationService.organizationsData;
    this.filterObject.rows = this.organizationService.organizationsData;
    this.columns = this.organizationService.Columns;
    this.filterObject.filter = getFilterForFilterObject(this.columns); 
    this.child?.GridChanges(this.filterObject,this.sortObj);  */
    const params = this.getRequestParams(this.title, 0, 0);
    this.organizationService.getOrganizationsData(params)
      .subscribe({
        next: (data) => {
          if(data.isError == false)
          {
            this.filterObject.isShowInlineFilter = data.result.isShowInlineFilter;
            this.columns = data.result.columns;        
            this.filterObject.data = data.result.data;
            this.filterObject.rows = data.result.data;
            this.filterObject.totalRecordsText = data.result.totalRecordsText;          
            this.filterObject.filter = getFilterForFilterObject(this.columns); 
            this.filterObject.pagingAccessList = getAccessListFunction(this.filterObject); 
            this.child?.GridChanges(this.filterObject,this.sortObj);            
          } 
        },
        error: (err) => {console.log(err); }
      });
  }

}
