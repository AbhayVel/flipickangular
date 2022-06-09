import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupComponent } from 'src/app/feature/library/popup/popup.component';
import { PopUpConfig, PopUpConfigFactory } from 'src/app/feature/library/popup/PopUpConfig';
import { EmployeesMJ } from 'src/app/models/EmployeesMJ';
import { SortModel } from 'src/app/models/sort-model';
import{sort} from 'src/app/utilities/utility';
@Component({
  selector: 'qdn-mj-employee',
  templateUrl: './mj-employee.component.html',
  styleUrls: ['./mj-employee.component.css']
})
export class MJEmployeeComponent implements OnInit {
  @ViewChild('popup') popup?:PopupComponent; 
  oMJEmployee:EmployeesMJ=new EmployeesMJ();
  constructor() { }
  employeeList:Array<any>=[
    {
      id:1,
      name:'Airi Satou',
      position:'Accountant',
      office:'Tokyo',
      age:33,
      startDate:'2008/11/28',
      salary:162700      
    },
    {
      id:2,
      name:'Garrett Winters',
      position:'Accountant',
      office:'Tokyo',
      age:63,
      startDate:'2011/07/25',
      salary:170750      
    },
    {
      id:3,
      name:'Angelica Ramos',
      position:'Chief Executive Officer (CEO)',
      office:'London',
      age:47,
      startDate:'2009/10/09',
      salary:1200000      
    },
    {
      id:4,
      name:'Paul Byrd',
      position:'Chief Financial Officer (CFO)',
      office:'New York',
      age:64,
      startDate:'2010/06/09',
      salary:725000      
    },
    {
      id:5,
      name:'Bruno Nash',
      position:'Technical Author',
      office:'London',
      age:64,
      startDate:'2010/06/09',
      salary:725000      
    }
    ,
    {
      id:5,
      name:'Prescott Bartlett 1',
      position:'Marketing Designer',
      office:'Paris',
      age:55,
      startDate:'2010/06/09',
      salary:555000      
    }
    ,
    {
      id:5,
      name:'Prescott Bartlett 2',
      position:'Financial Controller',
      office:'America',
      age:45,
      startDate:'2010/06/09',
      salary:455000      
    }
    ,
    {
      id:5,
      name:'Bruno Nash',
      position:'Software Engineer',
      office:'India',
      age:78,
      startDate:'2010/06/09',
      salary:635000      
    }
    ,
    {
      id:5,
      name:'Colleen Hurst',
      position:'Developer',
      office:'Singapor',
      age:77,
      startDate:'2010/06/09',
      salary:955000      
    }
    ,
    {
      id:5,
      name:'Doris Wilder',
      position:'Regional Director',
      office:'Malesia',
      age:35,
      startDate:'2010/06/09',
      salary:355000      
    }
    ,
    {
      id:5,
      name:'Fiona Green',
      position:'System Architect',
      office:'Japan',
      age:37,
      startDate:'2010/06/09',
      salary:405000      
    }
    ,
    {
      id:5,
      name:'Gloria Little',
      position:'Office Manager',
      office:'Australia',
      age:48,
      startDate:'2010/06/09',
      salary:555000      
    }
    ,
    {
      id:5,
      name:'Howard Hatfield',
      position:'Marketing Designer',
      office:'Africa',
      age:29,
      startDate:'2010/06/09',
      salary:665000      
    }

    ,
    {
      id:5,
      name:'Jennifer Chang',
      position:'Technical Author',
      office:'San Francisco',
      age:58,
      startDate:'2010/06/09',
      salary:725000      
    }
    ,
    {
      id:5,
      name:'Jonas Alexander',
      position:'Marketing Designer',
      office:'Sidney',
      age:78,
      startDate:'2010/06/09',
      salary:805000      
    }
    ,
    {
      id:5,
      name:'Lael Greer',
      position:'Financial Controller',
      office:'San Francisco',
      age:70,
      startDate:'2010/06/09',
      salary:905000      
    }
    ,
    {
      id:5,
      name:'Prescott Bartlett',
      position:'Technical Author',
      office:'Tokyo',
      age:66,
      startDate:'2010/06/09',
      salary:955000      
    }
    ,
    {
      id:5,
      name:'Prescott Bartlett',
      position:'Data Coordinator',
      office:'New York',
      age:64,
      startDate:'2010/06/09',
      salary:335000      
    }
    ,
    {
      id:5,
      name:'Michael Bruce',
      position:'Support Lead',
      office:'London',
      age:64,
      startDate:'2010/06/09',
      salary:255000      
    }
  ]

  orderBY:number=-1;
  sortObj:SortModel={
    columnName:'id',
    orderBy:-1,
    sortType:'num',
    condition:null
  }
  
  filterObject:any={
      data:[],
      rows:[],
      filter:{
        id:{
          columnName:'id',
          type:'num',
          value:''
        },
        name:{
          columnName:'name',
          type:'cs',
          value:''
        },
        position:{
          columnName:'position',
          type:'cs',
          value:''
        },
        office:{
          columnName:'office',
          type:'cs',
          value:''
        },
        ageFrom:{
          columnName:'age',
          type:'numGte',
          value:''
        },
        ageTo:{
          columnName:'age',
          type:'numLte',
          value:''
        },
        startDate:{
          columnName:'startDate',
          type:'date',
          value:''
        },
        salaryFrom:{
          columnName:'salary',
          type:'numGte',
          value:''
        },
        salaryTo:{
          columnName:'salary',
          type:'numLte',
          value:''
        },
      },
      paging:[],
      currentPage:1,
      pageSize:5,
      noOfEntries:0,       
  }
  columns: any = [{
    name: 'name',
    displayName: 'name',
    isSorting: true,
    type: 'ci',
    filter: {
      isFiltering: true,
      filterType: 'input'
    }
  },
  {
    name: 'position',
    displayName: 'position',
    isSorting: true,
    type: 'ci',
    filter: {
      isFiltering: true,
      filterType: 'input'
    }
  },
  {
    name:'office',
    displayName: 'office',
    isSorting: true,
    type: 'ci',
    filter: {
      isFiltering: true,
      filterType: 'template',
      filterName:'office'
    }
  },
  {
    name:'age',
    displayName: 'age',
    isSorting: true,
    type: 'num',
    filter: {
      isFiltering: true,
      filterType: 'range',
      filterFrom:'ageFrom',
      filterTo:'ageTo'
    }
  },  
  {
    name:'startDate',
    displayName: 'Start Date',
    isSorting: true,
    type: 'date',
    filter: {
      isFiltering: true,
      filterType: 'date',    
    }
  },
  {
    name:'salary',
    displayName: 'salary',
    isSorting: true,
    type: 'num',
    filter: {
      isFiltering: true,
      filterType: 'range',
      filterFrom:'salaryFrom',
      filterTo:'salaryTo'
    }
  },
  {
    name:'id',
    displayName: 'Action',
    isSorting: false,
    type: 'num',
    html:true,
    htmlName:"Action",
    filter: {
      isFiltering: false,
      filterType:'input'      
    }
  },
  {
    name:'id',
    displayName: 'Delete',
    isSorting: false,
    type: 'num',
    html:true,
    htmlName:"Delete",
    filter: {
      isFiltering: false,
      filterType:'input'      
    }
  }
  ]
  
  popupConfig:PopUpConfig=PopUpConfigFactory.getPopUpConfig({
    header:"Employee Edit"
  });
  ngOnInit(): void {
    this.filterObject.data=this.employeeList;
    this.filterObject.rows=this.employeeList;   
  }
  
  userEditP(data:any){
    //debugger;  
    this.oMJEmployee=data;
    this.popupConfig.isShowPopup=true;
    this.popup?.open(this.popupConfig);

  }
  userEditR(data:any){
    //debugger;
  }
  userDelete(data:any){
    //debugger;
  }
  officeChange(gridChanges:any,eve:any){
    var value=eve.target.value;
    this.filterObject.filter['office'].value=value;
    gridChanges(this.filterObject,this.sortObj);
  }
  close($event: boolean) {

  }

}
