import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'cmadmin-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {
  @Input() filterObject: any; 
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  paging(p: number){
    if (p < 1 || p > this.filterObject.paging.length) {
      return;
    }
    this.filterObject.currentPage = p;
    this.pageChange.next(p);
  }
}
