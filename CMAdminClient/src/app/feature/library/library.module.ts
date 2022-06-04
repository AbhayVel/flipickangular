import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingComponent } from './paging/paging.component';
import { TableComponent } from './table/table.component';
import { TableDirective } from './table.directive';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PagingComponent,
    TableComponent,
    TableDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PagingComponent,
    TableComponent,
    TableDirective
  ]
})
export class LibraryModule { }