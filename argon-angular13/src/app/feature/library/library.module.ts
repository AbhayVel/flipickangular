import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingComponent } from './paging/paging.component';
import { TableComponent } from './table/table.component';
import { TableDirective } from './table.directive';
import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [
    PagingComponent,
    TableComponent,
    TableDirective,
    PopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagingComponent,
    TableComponent,
    TableDirective,
    PopupComponent
  ]
})
export class LibraryModule { }
