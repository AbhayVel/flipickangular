import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingComponent } from './paging/paging.component';
import { TableComponent } from './table/table.component';
import { TableDirective } from './table.directive';
import { PopupComponent } from './popup/popup.component';
import { QdnFormDirective } from './forms/qdn-form.directive';
import { QdnModelDirective } from './forms/qdn-model.directive';



@NgModule({
  declarations: [
    PagingComponent,
    TableComponent,
    TableDirective,
    PopupComponent,
    QdnFormDirective,
    QdnModelDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagingComponent,
    TableComponent,
    TableDirective,
    PopupComponent,
    QdnFormDirective,
    QdnModelDirective
  ]
})
export class LibraryModule { }
