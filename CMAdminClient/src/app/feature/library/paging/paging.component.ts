import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { PagingAccess } from 'src/app/models/pagingaccess';


@Component({
  selector: 'cmadmin-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {
  @Input() filterObject: any; 
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
  ngOnInit(): void { }

  paging(p: number){
    this.filterObject.currentPage = p;
    this.pageChange.next(p);  
  }

  pgSizeChange(event: any): void {
    this.filterObject.currentPage = 0;
    this.pageSizeChange.next(event.target.value);   
  }

  onChange(e: any) {
    var number = parseInt(e.target.value);
    this.filterObject.currentPage = number;
    this.filterObject.selectedPageAccess  = number; 
    this.pageChange.next(number);    
  }
}
