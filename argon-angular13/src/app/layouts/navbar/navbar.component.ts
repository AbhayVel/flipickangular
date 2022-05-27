import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { routes1 } from "src/app/app-routing.module";
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit 
{
   listTitles:any; 
   routeData: any[] = [];
   location: Location; 
   name: string ='';
  constructor(location: Location,  private element: ElementRef, private router: Router) {
    this.location = location; 
  }

  ngOnInit() {
    this.listTitles = routes1.filter(listTitle => listTitle.children);
  }

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '/'){
        titlee = titlee.slice( 1 );
    }
    for(var i = 0; i < this.listTitles.length; i++)
    {
       for(var item = 0; item < this.listTitles[i].children.length; item++){
            if(this.listTitles[i].children[item].path === titlee)
            {
                return this.listTitles[i].children[item].data.title;
            }
        }
     }
    return 'Dashboard';
  }


}
