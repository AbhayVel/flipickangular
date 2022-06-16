import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PopupComponent } from 'src/app/feature/library/popup/popup.component';
import { PopUpConfig, PopUpConfigFactory } from 'src/app/feature/library/popup/PopUpConfig';
import { TableComponent } from 'src/app/feature/library/table/table.component';
import { AMEmployee } from 'src/app/models/am-employee';
import { SortModel } from 'src/app/models/sort-model';
import { AMEmployeeService } from 'src/app/services/amemployee.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'qdn-am-employees',
  templateUrl: './am-employees.component.html',
  styleUrls: ['./am-employees.component.css']
})
export class AmEmployeesComponent implements OnInit {
  @ViewChild(TableComponent) child?: TableComponent;
  @ViewChild('popup') popup?: PopupComponent;
  @ViewChild('popupadd') popupadd?: PopupComponent;
  amemployee: AMEmployee = new AMEmployee()

  constructor(private router: Router, private amEmployeeService:  AMEmployeeService) { }
 
  

  filterObject: any = {
    data: [],
    rows: [],
    filter: {
      id: {
        columnName: 'id',
        value: '',
        type: 'num'
      },
      firstName: {
        columnName: 'firstName',
        value: '',
        type: 'cs'
      },
      lastName: {
        columnName: 'lastName',
        value: '',
        type: 'cs'
      },
      email: {
        columnName: 'email',
        value: '',
        type: 'cs'
      },
      dob: {
        columnName: 'dob',
        value: '',
        type: 'date'
      },
      jodFrom: {
        columnName: 'jod',
        value: '',
        type: 'dteGte'
      },
      jodTo: {
        columnName: 'jod',
        value: '',
        type: 'dteLte'
      },
    },
    paging: [],
    currentPage: 1,
    pageSize: 5
  }
  
  sortObj: SortModel={
    orderBy: -1,
    columnName:'id',
    sortType: 'num',
    condition: null
  }
  
  columns = [
    {
      name: 'firstName',
      displayName: 'First Name',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',      
      }
    },
    {
      name: 'lastName',
      displayName: 'Last Name',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',      
      }
    },
    {
      name: 'email',
      displayName: 'Email',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',      
      }
    },
    {
      name: 'dob',
      displayName: 'Birth Date',
      type: 'date',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'date',      
      }
    },
    {
      name: 'jod',
      displayName: 'Joining Date',
      type: 'date',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'daterange',
        filterFrom: 'jodFrom',
        filterTo: 'jodTo'
      }
    },
    {
      name: "id",
      displayName: "Action",
      html: true,
      htmlName: "Action",
      type: 'num',
      isSorting: false,
      filter: {isFiltering: false, filterType: "input", filterName:"id", filterFrom: "", filterTo: ""}              
    }
  ]
  
  statusChange(GridChanges: any, $event: any) {
    let value = $event.target.value;
    this.filterObject.filter['status'].value = value;
    GridChanges(this.filterObject, this.sortObj);
  }
  userDelete(obj: any) {
     
  }
  userEdit(obj: any) {
     
  }
  ngOnInit(): void {


    this.amEmployeeService.getAll().then((data: any) => {
      this.filterObject.data = data;
      this.filterObject.rows = data;
      this.child?.GridChanges(this.filterObject,this.sortObj);   
    })
  }

  popupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({
    header: 'Edit Employee'
  });


  empEditP(obj: any) {
    debugger;
    this.popupConfig.isShowPopup = true;
    this.popup?.open(this.popupConfig);
    this.amemployee = obj;
  }
  close($event: boolean) {  }

  addPopupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({
    header: 'Add Employee'
  });

  addEmpPopup(): void
  {
    this.addPopupConfig.isShowPopup = true;
    this.popupadd?.open(this.addPopupConfig);
  }

  empEditR(obj: any) {
    this.router.navigate(['amemp', 'edit', obj.id], {  });    
  }

}
