import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {
  browsers: BrowserData[] = [
    {
      id:1,
      renderEnging: "Trident",
      browser: "Internet Explorer 4.0",
      platForms: "Win 95+",
      engineVersion: "1.7",
      cssGrade: "X"
    },
    {
      id:2,
      renderEnging: "Gecko",
      browser: "Firefox 1.0",
      platForms: "Win 98+ / OSX.2+",
      engineVersion: "1.7",
      cssGrade: "A"
    },
    {
      id:3,
      renderEnging: "Webkit",
      browser: "Safari 1.2",
      platForms: "OSX.3",
      engineVersion: "125.5",
      cssGrade: "A"
    },
    {
      id:4,
      renderEnging: "Presto",
      browser: "Opera 8.0",
      platForms: "Win 95+ / OSX.2+",
      engineVersion: "1.7",
      cssGrade: "A"
    },
    {
      id:5,
      renderEnging: "KHTML",
      browser: "Konqureror 3.1",
      platForms: "KDE 3.1",
      engineVersion: "3.1",
      cssGrade: "C"
    },
    {
      id:6,
      renderEnging: "KHTML",
      browser: "Konqureror 3.1",
      platForms: "KDE 3.1",
      engineVersion: "3.3",
      cssGrade: "A"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  orderby: number=-1;
  sortData(columnName:string)
  {
    this.orderby = this.orderby*-1;
    console.log('coulmnName:' + columnName);
    this.browsers.sort((a:any,b:any)=>{
      return a[columnName] > b[columnName] ? -1*this.orderby : 1*this.orderby;
    });
  }

}

export interface BrowserData {
  id:number;
  renderEnging: string;
  browser: string;
  platForms: string;
  engineVersion: string;
  cssGrade: string;
}
