import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { OtherPipe } from './pipes/other.pipe';
import { ConcatPipe } from './pipes/concat.pipe';
import { StatusMasterPipe } from './pipes/status-master.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { LibraryModule } from './feature/library/library.module';

import { UserEditPopupComponent } from './components/user-edit-popup/user-edit-popup.component';

import { ProjectsComponent } from './components/projects/projects.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { FirstService } from './services/first.service';

import { MkuserComponent } from './components/mkuser/mkuser.component';
import { SbCoursesComponent } from './components/sb-courses/sb-courses.component';
import { MkUserEditPopupComponent } from './components/mk-user-edit-popup/mk-user-edit-popup.component';
import { DepartmentsMJComponent } from './components/departments-mj/departments-mj.component';
import { DeparmentmjeditpopupComponent } from './components/deparmentmjeditpopup/deparmentmjeditpopup.component';
import { PksalesComponent } from './components/pksales/pksales.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    OtherPipe,
    ConcatPipe,
    StatusMasterPipe,
    SortingPipe,

    UserEditPopupComponent,

    ProjectsComponent,
    OrganizationsComponent,
    EmployeesComponent,
    PksalesComponent,

    MkuserComponent,
    SbCoursesComponent,
    MkUserEditPopupComponent,
    DepartmentsMJComponent,
    DeparmentmjeditpopupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibraryModule
  ],
  providers: [Title, FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
