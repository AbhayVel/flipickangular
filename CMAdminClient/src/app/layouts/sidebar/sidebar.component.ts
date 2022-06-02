import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes1 } from 'src/app/app-routing.module';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'cmadmin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  leftnav:string = 'leftnav'; dashboard: string= 'dashboard';
  showleftNav: boolean = true;
  listTitles:any; 
  location: Location; 
  name: string ='';
 
  constructor(location: Location,  private element: ElementRef, private router: Router) {
   this.location = location; 
 }

 ngOnInit() {
   this.listTitles = routes1.filter(listTitle => listTitle.children);
  // this.setLeftnavAccesss();
 }

 setLeftnavAccesss() : void
 {
   // debugger;
   var titlee = this.location.prepareExternalUrl(this.location.path());
   if(titlee.charAt(0) === '/'){ titlee = titlee.slice( 1 ); }
    if(titlee.toString().toLowerCase() == 'dashboard')
    {
      this.showleftNav = false;
    }
    else{ this.showleftNav = true;}
 }

  changeStyle(e: any)
  {
    this.leftnav = e.type == 'mouseover' ? 'leftnav leftnavhover' : 'leftnav';
  }
  logout(): void{}

  leftNavMenuList: LeftMenu[] = [
    {
      tabName: "GroupManagement",
      url: "organizations",
      alias: "Organizations",
      leftCssClass: "nav-link pt-3  pb-3 Organizanav text-center"
    },
    {
      tabName: "InstituteManagement",
      url: "facilities",
      alias: "Facilities",
      leftCssClass: "nav-link pt-3 pb-3 text-center Institutenav"
    },
    {
      tabName: "InstructorManagement",
      url: "adminroles",
      alias: "Admin Users",
      leftCssClass: "nav-link pt-3 pb-3 text-center Instructnav"
    },
    {
      tabName: "CourseManagement",
      url: "researchreports",
      alias: "Research Reports",
      leftCssClass: "nav-link pt-3 pb-3 text-center Coursenav"
    },
    {
      tabName: "StudentManagement",
      url: "members",
      alias: "Members",
      leftCssClass: "nav-link pt-3 pb-3 text-center Studentnav"
    },
    {
      tabName: "SwitchToScoreCard",
      url: "scorecard",
      alias: "Scorecard",
      leftCssClass: "nav-link pt-3 pb-3 text-center switchtoscorecardnav"
    },
   /* {
      tabName: "LicenseCourseMetaMaster",
      url: "audience",
      alias: "License &amp; Course Meta Master",
      leftCssClass: "nav-link pt-3 pb-3 text-center licenseCourseMetaMasterNav"
    },
    {
      tabName: "Events",
      url: "events",
      alias: "Events",
      leftCssClass: "nav-link pt-3 pb-3 text-center Eventnav"
    },
    {
      tabName: "GroupManagement",
      url: "community",
      alias: "Community",
      leftCssClass: "nav-link pt-3 pb-3 text-center Communitynav"
    },*/
    {
      tabName: "ProjectManagement",
      url: "projects",
      alias: "Projects",
      leftCssClass: "nav-link pt-3 pb-3 text-center Communitynav"
    }
  ];

}

export class LeftMenu
{
  tabName?: string;
  url?: string;
  alias?: string;
  leftCssClass?: string;
}
