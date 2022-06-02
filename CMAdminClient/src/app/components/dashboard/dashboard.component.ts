import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit 
{
  constructor() { }
  ngOnInit(): void { }

  adminTiles = 
  [
      {
        name: "GroupManagement",
        id: "3704",
        alias: "Organizations",
        sequenceNo: "3",
        url: "organizations",
        cssClass: "bg-yellow",
        iconClass: "icon icon-organization",
        type: "Tile",
        dashboardCount: null
    },
    {
        name: "InstituteManagement",
        id: "3705",
        alias: "Facilities",
        sequenceNo: "4",
        url: "facilities",
        cssClass: "bg-skyblue",
        iconClass: "icon icon-institute",
        type: "Tile",
        dashboardCount: null
    },
    {
        name: "InstructorManagement",
        id: "3706",
        alias: "Admin Users",
        sequenceNo: "5",
        url: "adminroles",
        cssClass: "bg-purple",
        iconClass: "icon icon-trainer",
        type: "Tile",
        dashboardCount: null
    },
    {
        name: "CourseManagement",
        id: "3707",
        alias: "Modules",
        sequenceNo: "6",
        url: "modules",
        cssClass: "bg-green",
        iconClass: "icon icon-course",
        type: "Tile",
        dashboardCount: null
    },
    {
        name: "StudentManagement",
        id: "3708",
        alias: "Members",
        sequenceNo: "7",
        url: "members",
        cssClass: "bg-red",
        iconClass: "icon icon-trainee",
        type: "Tile",
        dashboardCount: null
    },
    {
        name: "Reports",
        id: "3709",
        alias: "Analytics",
        sequenceNo: "8",
        url: "",
        cssClass: "bg-mintGreen",
        iconClass: "icon icon-analytics",
        type: "Tile",
        dashboardCount: null
    },
    {
        name: "StudentsRegistered_Count",
        id: "3714",
        alias: "Members Registered",
        sequenceNo: "16",
        url: "",
        cssClass: "bg-white",
        iconClass: "icon icon-student",
        type: "Count",
        dashboardCount: "15"
    },
    {
        name: "ActivatedStudents_Count",
        id: "3715",
        alias: "Members Activated",
        sequenceNo: "18",
        url: "",
        cssClass: "bg-white",
        iconClass: "icon icon-student",
        type: "Count",
        dashboardCount: "13"
    },
    {
        name: "QBank",
        id: "4208",
        alias: "Question Bank",
        sequenceNo: "35",
        url: "qbanks",
        cssClass: "bg-qubankblue",
        iconClass: "icon icon-qbank",
        type: "Tile",
        dashboardCount: null
    },
   /* {
        name: "SwitchToScoreCard",
        id: "17284",
        alias: "Score Card",
        sequenceNo: "6",
        url: "scorecard",
        cssClass: "bg-switchtoscorecard",
        iconClass: "icon icon-switchtoscorecard",
        type: "Tile",
        dashboardCount: null
    },
    {
        name: "LicenseCourseMetaMaster",
        id: "18400",
        alias: "License & Course Meta Master",
        sequenceNo: "21",
        url: "license & course meta master",
        cssClass: "bg-licenseCourseMetaMaster",
        iconClass: "icon icon-trainee",
        type: "Tile",
        dashboardCount: null
    },
    {
        name: "Community",
        id: "18517",
        alias: "Community",
        sequenceNo: "53",
        url: "community",
        cssClass: "bg-community",
        iconClass: "icon icon-CommunitynavActive",
        type: "Tile",
        dashboardCount: null
    },*/
    {
        name: "Projects",
        id: "18517",
        alias: "Projects",
        sequenceNo: "53",
        url: "projects",
        cssClass: "bg-switchtoscorecard",
        iconClass: "icon icon-switchtoscorecard",
        type: "Tile",
        dashboardCount: null
    }
  ]  

}
