import { Component, OnInit } from '@angular/core';
import { SortModel } from 'src/app/models/sort-model';
import { ConcatPipe } from 'src/app/pipes/concat.pipe';
import { ProjectService } from 'src/app/services/projects.service';
import { filterFunction, sort } from 'src/app/utilities/utility';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Array<any> =[];
  tempProjects : Array<any> =[];
  constructor(private projectService:ProjectService) { }
  
  ngOnInit(): void { 
    this.projects = this.projectService.projects;
    this.filterObject.data = this.projects;
    this.filterObject.rows = this.projects; 
  }

  sortObj: SortModel={
    orderBy: -1,
    columnName:'id',
    sortType: 'num',
    condition: null
  }
  columns = [
    {
      name:'id',
      displayName: 'Sr.No.',
      type: 'num',
      isSorting: false,
      filter:{
        isFiltering: false,
        filterType: 'input'
      }
    },
    {
      name:'project',
      displayName: 'Project',
      type: 'cs',
      isSorting: true,
      filter:{
        isFiltering: true,
        filterType: 'input'
      }
    },
    {
      name:'budget',
      displayName: 'Budget',
      type: 'num',
      isSorting: true,
      filter:{
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
        fitertype: 'template',
        fiterName: 'status'
      }
    },
    {
      name: 'action',
      displayName: 'Action',
      html: true,
      htmlName: "Action",
      type: 'num',
      isSorting: false,
      filter: {
        isFiltering: false,
        fitertype: 'input'
      },
    }
  ];

  filterObject: any = {
    data:[],
    rows:[],
    filter: {
      id: { 
          columnName: 'id',
          value: '',
          type: 'cs'
        },
    project: { 
          columnName: 'project',
          value: '',
          type: 'cs'
        },
    status: {
          columnName: 'status',
          value: '',
          type: 'num'
        },
    budgetFrom: { 
          columnName: 'budget',
          value: '',
          type: 'numGte'
        },
    budgetTo: { 
          columnName: 'budget',
          value: '',
          type: 'numLte'
        }                 
    },
    paging : [],
    currentPage: 1,
    pageSize: 5
  }

  projectEdit(data: any)
  {
    debugger;
  }
  statusChange(GridChanges: any, $event: any) {
    let value = $event.target.value;
    this.filterObject.filter['status'].value = value;
    GridChanges(this.filterObject, this.sortObj);
  }
}
