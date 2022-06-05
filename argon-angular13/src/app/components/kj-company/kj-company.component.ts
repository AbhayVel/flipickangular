import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupComponent } from 'src/app/feature/library/popup/popup.component';
import { PopUpConfig, PopUpConfigFactory } from 'src/app/feature/library/popup/PopUpConfig';
import { Project } from 'src/app/models/Project';
import { SortModel } from 'src/app/models/sort-model';

@Component({
  selector: 'qdn-kj-company',
  templateUrl: './kj-company.component.html',
  styleUrls: ['./kj-company.component.css']
})
export class KjCompanyComponent implements OnInit {

  @ViewChild('popup') popup?: PopupComponent;

  constructor() { }

  project: Project = new Project();

  arrayCompany: Array<any> = [

    {
      id: 1,
      name: "Flipick Private Limited",
      address: "Koregaon Park, Pune.",
      phone: "020 6621 8300",
      email: "info@flipick.com"
    },
    {
      id: 2,
      name: "Mediawide Labs Pvt Ltd",
      address: "Koregaon Park, Pune.",
      phone: "020 6621 8300",
      email: "sales@mediawide.com"
    },
    {
      id: 3,
      name: "Google",
      address: "California, U.S.",
      phone: "1-800-419-0157",
      email: "support-in@google.com"
    },
    {
      id: 4,
      name: "Apple India",
      address: "Bangalore.",
      phone: "91 80 4045 5150",
      email: "bangalore_admin@apple.com"
    },
    {
      id: 5,
      name: "Oracle India Private Limited",
      address: "New Delhi",
      phone: "91 80 6786 2950",
      email: "salesinquiry_in@oracle.com"
    },
    {
      id: 6,
      name: "Facebook India",
      address: "Mumbai",
      phone: "650-543-4800",
      email: "support@fb.com"
    },
    {
      id: 7,
      name: "IBM India",
      address: "Bangalore",
      phone: "91 80 2678 8015",
      email: "response@in.ibm.com"
    },
    {
      id: 8,
      name: "Microsoft",
      address: "Washington, U.S.",
      phone: "1 800 572 1100",
      email: "microsoft@outlook.com"
    },
    {
      id: 9,
      name: "Accenture",
      address: "Dublin, Ireland",
      phone: "00 1 312-842-5012",
      email: "NA.HR.Questions@accenture.com"
    },
    {
      id: 10,
      name: "SAP India",
      address: "Magarpatta, Pune",
      phone: "91 20 4918 5101",
      email: "sapindia@gmail.com"
    },
    {
      id: 11,
      name: "TCS",
      address: "Mumbai, India",
      phone: "1800-209-3111",
      email: "careers@tcs.com"
    },
    {
      id: 12,
      name: "Capgemini",
      address: "Paris, France",
      phone: "33 1 47 54 50 00",
      email: "offboardingservices.in@capgemini.com"
    },

  ]

  filterObject: any = {

    data: [],
    rows: [],
    filter: {
      id: {
        columnName: 'id',
        value: '',
        type: 'num'
      },
      name: {
        columnName: 'name',
        value: '',
        type: 'cs'
      },
      email: {
        columnName: 'email',
        value: '',
        type: 'cs'
      }
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
      name: 'address',
      displayName: 'Address',
      type: 'cs',
      isSorting: false,
      filter: {
        isFiltering: false,
        filterType: 'input',
      }
    },
    {
      name: 'phone',
      displayName: 'Phone',
      type: 'cs',
      isSorting: false,
      filter: {
        isFiltering: false,
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

    },
  ]

  statusChange(GridChanges: any, $event: any) {

    let value = $event.target.value;
    this.filterObject.filter['name'].value = value;
    GridChanges(this.filterObject, this.sortObj);
  }

  popupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({

    header: 'Company Edit'
  });

  deleteCompany(obj: any) {

    debugger;
  }

  editCompany(obj: any) {

    //debugger;
    this.popupConfig.isShowPopup = true;
    this.popup?.open(this.popupConfig);
    this.project = obj;
  }

  close($event: boolean) {

  }

  ngOnInit(): void {

    this.filterObject.rows = this.arrayCompany;
    this.filterObject.data = this.arrayCompany;

  }

}
