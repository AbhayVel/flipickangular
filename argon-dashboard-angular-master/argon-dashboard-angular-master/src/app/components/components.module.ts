import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './users/users.component';
import { OtherPipe } from '../pipes/other.pipe';
import { ConcatPipe } from '../pipes/concat.pipe';
import { StatusMasterPipe } from '../pipes/status-master.pipe';
import { SortingPipe } from '../pipes/sorting.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UsersComponent,
    OtherPipe,
    ConcatPipe,
    StatusMasterPipe,
    SortingPipe
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UsersComponent
  ]
})
export class ComponentsModule { }
