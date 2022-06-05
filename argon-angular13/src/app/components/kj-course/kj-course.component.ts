import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupComponent } from 'src/app/feature/library/popup/popup.component';
import { PopUpConfig, PopUpConfigFactory } from 'src/app/feature/library/popup/PopUpConfig';
import { Project } from 'src/app/models/Project';
import { SortModel } from 'src/app/models/sort-model';

@Component({

  selector: 'qdn-kj-course',
  templateUrl: './kj-course.component.html',
  styleUrls: ['./kj-course.component.css']
})

export class KjCourseComponent implements OnInit {

  @ViewChild('popup') popup?: PopupComponent;  

  constructor() { }

  project: Project = new Project();

  arrayCourse: Array<any>=[

    {
      id: 1,      
      courseName: "Mathematics",
      desc: "A",
      college:"COEP"      
    },
    {
      id: 1,      
      courseName: "Physics",
      desc: "B",
      college:"Modern College"      
    },
    {
      id: 1,      
      courseName: "Chemistry",
      desc: "C",
      college:"JSPM"      
    },
    {
      id: 1,      
      courseName: "Biology",
      desc: "D",
      college:"COEP"      
    },
    {
      id: 1,      
      courseName: "Daily Food and Exercise Logs",
      desc: "E",
      college:"VJTI"      
    },
    {
      id: 1,      
      courseName: "Sample Silent PPO Apeal Letter",
      desc: "F",
      college:"RIT"      
    },
    {
      id: 1,      
      courseName: "Managing Diabetes in Pregnancy",
      desc: "G",
      college:"WIT"      
    },
    {
      id: 1,      
      courseName: "HTML publishing",
      desc: "H",
      college:"GPP"      
    },
    {
      id: 1,      
      courseName: "Training Administrator Job Description",
      desc: "I",
      college:"BVP"      
    }, 
    {
      id: 1,      
      courseName: "Physician Attribution Policy",
      desc: "J",
      college:"DY Patil"      
    }, 
    {
      id: 1,      
      courseName: "2021 Initial Denial Insights Report",
      desc: "K",
      college:"AISSMS"      
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
    courseName: {
      columnName: 'courseName',
      value: '',
      type: 'cs'
    },
    college: {
      columnName: 'college',
      value: '',
      type: 'cs'
    }   
  },
  paging: [],
  currentPage: 1,
  pageSize: 10
}

sortObj: SortModel={
  
  orderBy: -1,
  columnName:'id',
  sortType: 'num',
  condition: null
}

columns = [
  {
    name: 'courseName',
    displayName: 'CourseName',
    type: 'cs',
    isSorting: true,
    filter: {
      isFiltering: true,
      filterType: 'input',
    
    }
  },
  {
    name: 'desc',
    displayName: 'Description',
    type: 'cs',
    isSorting: false,
    filter: {
      isFiltering: false,
      filterType: 'input',    
    }
  },
  {
    name: 'college',
    displayName: 'CollegeName',
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
  this.filterObject.filter['college'].value = value;
  GridChanges(this.filterObject, this.sortObj);
}

popupConfig: PopUpConfig = PopUpConfigFactory.getPopUpConfig({

  header: 'Course Edit'
});

courseDelete(obj: any) {

  debugger;
}

courseEdit(obj: any) {

  //debugger;
  this.popupConfig.isShowPopup = true;
  this.popup?.open(this.popupConfig);
  this.project = obj;
}

close($event: boolean) {

}

ngOnInit(): void {

  // this.arrayCourse.forEach((e) => {

  //   e.projectDIsplay = `(${e.Id})-${e.Project}`;
  // })

  this.filterObject.data = this.arrayCourse;
  this.filterObject.rows = this.arrayCourse;    
}

}
