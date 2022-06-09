import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupComponent } from 'src/app/feature/library/popup/popup.component';
import { PopUpConfig, PopUpConfigFactory } from 'src/app/feature/library/popup/PopUpConfig';
import { Project } from 'src/app/models/Project';
import { SortModel } from 'src/app/models/sort-model';

@Component({
  
  selector: 'qdn-kj-event',
  templateUrl: './kj-event.component.html',
  styleUrls: ['./kj-event.component.css']
})

export class KjEventComponent implements OnInit {

  @ViewChild('popup') popup?: PopupComponent;

  constructor() { }

  project: Project = new Project();

  arrayEvent: Array<any> = [

    {
      id: 1,
      name: "AI and automation innovation lab",
      startDateTime: "15 June 2022 10:00 AM",
      endDateTime: "17 June 2022 05:00 PM",
      registration: "25"
    },
    {
      id: 2,
      name: "Making the Stars Align When Time Matters",
      startDateTime: "10 June 2022 09:00 AM",
      endDateTime: "13 June 2022 06:00 PM",
      registration: "55"
    },
    {
      id: 3,
      name: "Learning From and Evolving Care Processes",
      startDateTime: "20 June 2022 09:00 AM",
      endDateTime: "25 June 2022 06:00 PM",
      registration: "75"
    },
    {
      id: 4,
      name: "Strategic management",
      startDateTime: "01 July 2022 09:00 AM",
      endDateTime: "03 July 2022 07:00 PM",
      registration: "85"
    },
    {
      id: 5,
      name: "Human resources management",
      startDateTime: "05 July 2022 09:00 AM",
      endDateTime: "07 July 2022 05:00 PM",
      registration: "35"
    },
    {
      id: 6,
      name: "Coordinating activities",
      startDateTime: "12 July 2022 09:30 AM",
      endDateTime: "15 July 2022 06:00 PM",
      registration: "65"
    },
    {
      id: 7,
      name: "Setting product strategy",
      startDateTime: "13 July 2022 11:00 AM",
      endDateTime: "14 July 2022 06:30 PM",
      registration: "45"
    },
    {
      id: 8,
      name: "Identifying new investments",
      startDateTime: "01 Aug. 2022 10:30 AM",
      endDateTime: "05 Aug. 2022 06:30 PM",
      registration: "30"
    },
    {
      id: 9,
      name: "Analyzing markets",
      startDateTime: "09 Aug. 2022 11:00 AM",
      endDateTime: "10 Aug. 2022 06:30 PM",
      registration: "25"
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
      startDateTime: {
        columnName: 'startDateTime',
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
      name: 'startDateTime',
      displayName: 'Start DateTime',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',
      }
    },
    {
      name: 'endDateTime',
      displayName: 'End DateTime',
      type: 'cs',
      isSorting: false,
      filter: {
        isFiltering: false,
        filterType: 'input',
      }
    },
    {
      name: 'registration',
      displayName: 'Registration',
      type: 'cs',
      isSorting: false,
      filter: {
        isFiltering: false,
        filterType: 'input',
      }
    }    ,    
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

    header: 'Event Edit'
  });

  deleteEvent(obj: any) {

    //debugger;
  }

  editEvent(obj: any) {

    ////debugger;
    this.popupConfig.isShowPopup = true;
    this.popup?.open(this.popupConfig);
    this.project = obj;
  }

  close($event: boolean) {

  }

  ngOnInit(): void {

    this.filterObject.rows=this.arrayEvent;
    this.filterObject.data=this.arrayEvent;
  }

}
