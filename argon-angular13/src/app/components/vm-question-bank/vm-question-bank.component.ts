import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupComponent } from 'src/app/feature/library/popup/popup.component';
import { PopUpConfig, PopUpConfigFactory } from 'src/app/feature/library/popup/PopUpConfig';
import { Project } from 'src/app/models/Project';
import { SortModel } from 'src/app/models/sort-model';
import { FirstService } from 'src/app/services/first.service';
import { SecondService } from 'src/app/services/second.service';

@Component({
  selector: 'qdn-vm-question-bank',
  templateUrl: './vm-question-bank.component.html',
  styleUrls: ['./vm-question-bank.component.css']
})
export class VmQuestionBankComponent implements OnInit {
  @ViewChild('popup') popup?: PopupComponent;
  fs?: FirstService;
  constructor(fs: FirstService,private mm: SecondService) {
    this.fs = fs;
   }

  project: Project = new Project()
  
  questionBankArray: Array<any> = [
    {
      id: 1,
      icon: "../assets/img/small-logos/logo-spotify.svg",
      qbTitle: "Biology - Botony QB",
      QuestionCount: 25,
      status: 1,
     
      completion: 60
    },
    {
      id: 2,
      icon: "../assets/img/small-logos/logo-invision.svg",
      qbTitle: "Math - Algebra QB",
      QuestionCount: 75,
      status: 2,
     
      completion: 70
    },
    {
      id: 3,
      icon: "../assets/img/small-logos/logo-jira.svg",
      qbTitle: "ZZ General Knowlege QB",
      QuestionCount: 35,
      status: 3,
     
      completion: 90
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      qbTitle: "Banking QB",
      QuestionCount: 45,
      status: 4,
     
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      qbTitle: "Medical QB",
      QuestionCount: 45,
      status: 4,
     
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      qbTitle: "Math - Geomerty ",
      QuestionCount: 45,
      status: 4,     
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      qbTitle: "EVS QB",
      QuestionCount: 30,
      status: 4,     
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      qbTitle: "History",
      QuestionCount: 100,
      status: 4,     
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      qbTitle: "English",
      QuestionCount: 80,
      status: 4,     
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      qbTitle: "Hindi",
      QuestionCount: 50,
      status: 4,     
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      qbTitle: "ke General Knowlege QB",
      QuestionCount: 75,
      status: 4,     
      completion: 35
    }
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
      qbTitle: {
        columnName: 'qbTitle',
        value: '',
        type: 'cs'
      },
      status: {
        columnName: 'status',
        value: '',
        type: 'num'
      },
      budgetFrom: {
        columnName: 'QuestionCount',
        value: '',
        type: 'numGte'
      },
      budgetTo: {
        columnName: 'QuestionCount',
        value: '',
        type: 'numLte'
      },
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
      name: 'qbTitle',
      displayName: 'Title',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',

      }
    },
    {
      name: 'QuestionCount',
      displayName: 'No Of Questions',
      type: 'num',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'range',
        filterFrom: 'budgetFrom',
        filterTo: 'budgetTo'
      }
    },
    {
      name: 'status',
      displayName: 'Status',
      html: true,
      htmlName: "Status",
      type: 'num',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'template',
        fiterName: 'status'
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
    this.filterObject.filter['status'].value = value;
    GridChanges(this.filterObject, this.sortObj);
  }
  close($event: boolean) {

  }
  
  userEditP(obj: any) {
    this.popupConfig.isShowPopup = true;
    this.popup?.open(this.popupConfig);
    this.project = obj;
  }

  popupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({
    header: 'Question Bank Edit'
  });

  ngOnInit(): void {
    
    this.filterObject.data = this.questionBankArray;
    this.filterObject.rows = this.questionBankArray;
  }

}
