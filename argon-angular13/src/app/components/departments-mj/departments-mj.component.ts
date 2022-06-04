import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupComponent } from 'src/app/feature/library/popup/popup.component';
import { PopUpConfig, PopUpConfigFactory } from 'src/app/feature/library/popup/PopUpConfig';
import { DepartmentMJ } from 'src/app/models/DepartmentsMJ';
import { SortModel } from 'src/app/models/sort-model';
import { FirstService } from 'src/app/services/first.service';
import { SecondService } from '../../services/second.service';
@Component({
  selector: 'qdn-departments-mj',
  templateUrl: './departments-mj.component.html',
  styleUrls: ['./departments-mj.component.css']
})
export class DepartmentsMJComponent implements OnInit {

  @ViewChild('popup') popup?: PopupComponent;
  fs?: FirstService;
  constructor(fs: FirstService,private mm: SecondService) {
    this.fs = fs;
    //this.mm = mm;
  }  
  departmentsMJ: DepartmentMJ = new DepartmentMJ();
  departments:Array<any>=[
    {
      id:1,
      name:'IT',
      employees:'XYZ, PQR, PPP',
      country:'India',
      city:'Pune'
    },
    {
      id:1,
      name:'Financial',
      employees:'XYZ, PQR, PPP',
      country:'America',
      city:'New York'
    },
    {
      id:1,
      name:'Account',
      employees:'XYZ, PQR, PPP',
      country:'Singapore',
      city:'UYR'
    },
    {
      id:1,
      name:'PPAnalyst',
      employees:'XYZ, PQR, PPP',
      country:'India',
      city:'Pune'
    },    
    {
      id:1,
      name:'QQAnalyst',
      employees:'XYZ, PQR, PPP',
      country:'India',
      city:'Pune'
    },    
    {
      id:1,
      name:'SSAnalyst',
      employees:'XYZ, PQR, PPP',
      country:'India',
      city:'Pune'
    },    
    {
      id:1,
      name:'IOAnalyst',
      employees:'XYZ, PQR, PPP',
      country:'India',
      city:'Pune'
    },    
    {
      id:1,
      name:'UIAnalyst',
      employees:'XYZ, PQR, PPP',
      country:'India',
      city:'Pune'
    },    
    {
      id:1,
      name:'JKAnalyst',
      employees:'XYZ, PQR, PPP',
      country:'India',
      city:'Pune'
    },    
    {
      id:1,
      name:'IIAnalyst',
      employees:'XYZ, PQR, PPP',
      country:'India',
      city:'Pune'
    },    
    {
      id:1,
      name:'GHAnalyst',
      employees:'XYZ, PQR, PPP',
      country:'India',
      city:'Pune'
    },    
    {
      id:1,
      name:'Analyst',
      employees:'XYZ, PQR, PPP',
      country:'India',
      city:'Pune'
    }
  ];

  filterObject:any={
    data:[],
    rows:[],
    filter:{
      id:{
        columnName:'id',
        value:'',
        type:'num'
    },
    name:{
      columnName:'name',
      value:'',
      type:'cs'
    },
    employees:{
      columnName:'employees',
      value:'',
      type:'cs'
    },
    country:{
      columnName:'country',
      value:'',
      type:'cs'
    },    
    city:{
      columnName:'city',
      value:'',
      type:'cs'
    },
  },
  paging: [],
  currentPage: 1,
  pageSize: 5
  }
  sortObj:SortModel={
    orderBy:-1,
    columnName:'id',
    sortType:'num',
    condition:null
  }

  columns = [    
    {
      name: 'name',
      displayName: 'Name',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',        
      }
    },    
    {
      name: 'employees',
      displayName: 'Employees',         
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',
        fiterName: 'employees'
      }
    },{
      name: 'country',
      displayName: 'Country',            
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'template',
        fiterName: 'country'
      }
    },
    {
      name: 'city',
      displayName: 'City',           
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',
        fiterName: 'city'
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
    }
  ]

  popupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({
    header: 'Deparment Edit'
  });
  ngOnInit(): void {
    this.filterObject.data=this.departments;
    this.filterObject.rows=this.departments;    
  }
  countryChange(GridChanges:any,$eve:any){
    this.filterObject.filter['country'].value=$eve.target.value;

    GridChanges(this.filterObject,this.sortObj);
  }
  userEdit(data:any){

  }
  userEditP(data:any){
    this.popupConfig.isShowPopup=true;

    this.popup?.open(this.popupConfig);
    //this.departmentsMJ = data;

  }
  userEditR(data:any){

  }
  userDelete(data:any){

  }
  close($event: boolean) {

  }
}
