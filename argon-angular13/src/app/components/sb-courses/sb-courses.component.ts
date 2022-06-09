import { Component, OnInit } from '@angular/core';
import { sbCourses } from 'src/app/models/sbCourses';
import { SortModel } from 'src/app/models/sort-model';

@Component({
  selector: 'qdn-sb-courses',
  templateUrl: './sb-courses.component.html',
  styleUrls: ['./sb-courses.component.css']
})
export class SbCoursesComponent implements OnInit {

  //sbCourse1: sbCourses = new sbCourses();

  courses: Array<any> = [
    {
      id: 1,
      icon: "../assets/img/small-logos/logo-spotify.svg",
      name: "Course 1",
      numberOfStudents: 2500,
      status: 1,
      authors: "av",
      duration: 60
    },
    {
      id: 2,
      icon: "../assets/img/small-logos/logo-spotify.svg",
      name: "Course 2",
      numberOfStudents: 3000,
      status: 1,
      authors: "Shk",
      duration: 90
    },
    {
      id: 3,
      icon: "../assets/img/small-logos/logo-spotify.svg",
      name: "Course 3",
      numberOfStudents: 600,
      status: 1,
      authors: "May",
      duration: 45
    },
    {
      id: 4,
      icon: "../assets/img/small-logos/logo-spotify.svg",
      name: "Course 4",
      numberOfStudents: 1200,
      status: 1,
      authors: "Shk",
      duration: 65
    }
  ]



  columns = [
    {
      name: 'name',
      displayName: 'Course Name',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',

      }
    },
    {
      name: 'numberOfStudents',
      displayName: 'Students',
      type: 'num',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input'

      }
    },
    {
      name: 'status',
      displayName: 'Status',
      type: 'num',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input'

      }
    }, {
      name: 'authors',
      displayName: 'Authors',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input'

      }
    }, 
    {
      name: 'duration',
      displayName: 'Duration',
      type: 'num',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'range',
        durationFrom: 'durationFrom',
        durationTo: 'durationTo'
      }
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
      name: {
        columnName: 'name',
        value: '',
        type: 'cs'
      },
      authors: {
        columnName: 'authors',
        value: '',
        type: 'cs'
      },
      numberOfStudents: {
        columnName: 'numberOfStudents',
        value: '',
        type: 'num'
      },
      durationFrom: {
        columnName: 'duration',
        value: '',
        type: 'numGte'
      },
      durationTo: {
        columnName: 'duration',
        value: '',
        type: 'numLte'
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


  constructor() { }

  ngOnInit(): void {
    //debugger;
    this.filterObject.data = this.courses;
    this.filterObject.rows = this.courses;

  }

}
