import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PopupComponent } from 'src/app/feature/library/popup/popup.component';
import { PopUpConfig, PopUpConfigFactory } from 'src/app/feature/library/popup/PopUpConfig';
import { TableComponent } from 'src/app/feature/library/table/table.component';
import { Organization } from 'src/app/models/am-organizations';
import { SortModel } from 'src/app/models/sort-model';
import { ColumnsDetails } from 'src/app/models/table-template-model';
import { OrganizationService } from 'src/app/services/organization.service';
import { getAccessListFunction, getFilterForFilterObject } from 'src/app/utilities/utility';

@Component({
  selector: 'qdn-am-organizations',
  templateUrl: './am-organizations.component.html',
  styleUrls: ['./am-organizations.component.css']
})
export class AmOrganizationsComponent implements OnInit {
  @ViewChild('popup') popup?: PopupComponent;
  @ViewChild(TableComponent) child?: TableComponent;
  columns: Array<ColumnsDetails> = [];
  title = ''; 
  organization: any;

  constructor(private organizationService: OrganizationService, public fb: FormBuilder) { }
  ngOnInit(): void 
  {
   
    this.getOrganizationGridData();    
  }

  onSubmit() {
    this.getOrganizationGridData();
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
  
  getOrganizationGridData(): void 
  {          
    const params = this.getRequestParams(this.title, 0, 0);
    this.organizationService.getOrganizationsData(params)
      .subscribe({
        next: (data) => {
          if(data.isError == false)
          {
            //console.log("Organization Data: " + JSON.stringify(data));
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

  popupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({
    header: 'Organization Edit'
  });


  orgEditP(obj: any) {
    this.popupConfig.isShowPopup = true;
    this.popup?.open(this.popupConfig);
    this.organization = obj;
  }
  close($event: boolean) {  }

}
