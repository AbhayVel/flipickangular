import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/Events';
import { SortModel } from 'src/app/models/sort-model';

@Component({
  selector: 'qdn-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  event: Events = new Events;
  eventlist: Array<any> = [
    {
      id: 1,
      icon: "../assets/img/small-logos/logo-spotify.svg",
      name: "June Public Event",
      deliverytype: "Online",
      startdate: "06-01-2022",
      status: 1,
      revenue: 21900,
      country: "US"
    },
    {
      id: 2,
      icon: "../assets/img/small-logos/logo-invision.svg",
      name: "Test Onsite Event",
      deliverytype: "In Person",
      startdate: "06-10-2022",
      status: 1,
      revenue: 51900,
      country: "IN"
    },
    {
      id: 3,
      icon: "../assets/img/small-logos/logo-jira.svg",
      name: "On Demand Event",
      deliverytype: "On Demand",
      startdate: "07-15-2022",
      status: 1,
      revenue: 45900,
      country: "US"
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      name: "May Onsite Event",
      deliverytype: "In Person",
      startdate: "05-10-2022",
      status: 0,
      revenue: 89900,
      country: "IN"
    },
    {
      id: 5,
      icon: "../assets/img/theme/logo-spotify.svg",
      name: "July Event",
      deliverytype: "Online",
      startdate: "07-15-2022",
      status: 1,
      revenue: 19900,
      country: "US"

    },
    {
      id: 6,
      icon: "../assets/img/small-logos/logo-invision.svg",
      name: "July 15 Onsite Event",
      deliverytype: "In Person",
      startdate: "07-15-2022",
      status: 1,
      revenue: 1190,
      country: "IN"
    },
    {
      id: 7,
      icon: "../assets/img/small-logos/logo-invision.svg",
      name: "Test Event August",
      deliverytype: "On Demand",
      startdate: "07-10-2022",
      status: 1,
      revenue: 55900,
      country: "AU"
    },
    {
      id: 8,
      icon: "../assets/img/small-logos/logo-invision.svg",
      name: "In Person Event",
      deliverytype: "In Person",
      startdate: "08-11-2022",
      status: 1,
      revenue: 99999,
      country: "US"
    },
    {
      id: 9,
      icon: "../assets/img/small-logos/logo-invision.svg",
      name: "New FND Event",
      deliverytype: "In Person",
      startdate: "08-01-2022",
      status: 1,
      revenue: 22900,
      country: "IN"
    },
    {
      id: 10,
      icon: "../assets/img/small-logos/logo-invision.svg",
      name: "Focus Online Event",
      deliverytype: "Online",
      startdate: "10-10-2022",
      status: 1,
      revenue: 33444,
      country: "AU"
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
      deliverytype: {
        columnName: 'deliverytype',
        value: '',
        type: 'cs'
      },
      startdate: {
        columnName: 'startdate',
        value: '',
        type: 'cs'
      },
      status: {
        columnName: 'status',
        value: '',
        type: 'num'
      },
      revenueFrom: {
        columnName: 'revenue',
        value: '',
        type: 'numGte'
      },
      revenueTo: {
        columnName: 'revenue',
        value: '',
        type: 'numLte'
      },
      country: {
        columnName: 'country',
        value: '',
        type: 'cs'
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
      name: 'deliverytype',
      displayName: 'Delivery Type',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',

      }
    },
    {
      name: 'startdate',
      displayName: 'Start Date',
      type: 'cs',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'input',

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
      name: 'revenue',
      displayName: 'Revenue',
      html: true,
      htmlName: "Revenue",
      type: 'num',
      isSorting: true,
      filter: {
        isFiltering: true,
        filterType: 'range',
        filterFrom: 'revenueFrom',
        filterTo: 'revenueTo'
      }
    },
    {
      name: 'country',
      displayName: 'Country',
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

  

  ngOnInit(): void {

    this.filterObject.rows = this.eventlist;
    this.filterObject.data = this.eventlist;
  }


}
