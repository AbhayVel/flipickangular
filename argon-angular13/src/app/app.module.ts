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
import { FirstService } from './services/first.service';
import { VkcompComponent } from './vkcomp/vkcomp.component';
import { MkuserComponent } from './components/mkuser/mkuser.component';
import { SbCoursesComponent } from './components/sb-courses/sb-courses.component';
import { MkUserEditPopupComponent } from './components/mk-user-edit-popup/mk-user-edit-popup.component';
import { DepartmentsMJComponent } from './components/departments-mj/departments-mj.component';
import { DeparmentmjeditpopupComponent } from './components/deparmentmjeditpopup/deparmentmjeditpopup.component';
import { PksalesComponent } from './components/pksales/pksales.component';
import { KjCourseComponent } from './components/kj-course/kj-course.component';
import { KjAuthorComponent } from './components/kj-author/kj-author.component';
import { KjCompanyComponent } from './components/kj-company/kj-company.component';
import { KjEventComponent } from './components/kj-event/kj-event.component';
import { VmQuestionBankComponent } from './components/vm-question-bank/vm-question-bank.component';
import { AmOrganizationsComponent } from './components/am-organizations/am-organizations.component';
import { AmEmployeesComponent } from './components/am-employees/am-employees.component';
import { AmOrganizationsEditPopupComponent } from './components/am-organizations-edit-popup/am-organizations-edit-popup.component';
import { PkSalseAprilComponent } from './components/pk-salse-april/pk-salse-april.component';
import { PkSalseMayComponent } from './components/pk-salse-may/pk-salse-may.component';
import { MJEmployeeComponent } from './components/mj-employee/mj-employee.component';
import { EmployeeEditPopupComponent } from './components/employee-edit-popup/employee-edit-popup.component';
import { MkEmployeeDetailsComponent } from './components/mk-employee-details/mk-employee-details.component';
import { MkemployeeEditPopupComponent } from './components/mkemployee-edit-popup/mkemployee-edit-popup.component';
import { MkProductsComponent } from './components/mk-products/mk-products.component';

import { UAUsersComponent } from './components/uausers/uausers.component';
import { UAEmployeesComponent } from './components/uaemployees/uaemployees.component';
import { UaEmployeeEditPopupComponent } from './components/ua-employee-edit-popup/ua-employee-edit-popup.component';
import { UserEditTemplatePopUpComponent } from './components/user-edit-template-pop-up/user-edit-template-pop-up.component';
import { FormsModule } from '@angular/forms';
import { UserEditReactiveFormComponent } from './components/user-edit-reactive-form/user-edit-reactive-form.component';

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
    AmOrganizationsComponent,
    AmEmployeesComponent,
    VkcompComponent,
    PksalesComponent,
    MkuserComponent,
    SbCoursesComponent,
    MkUserEditPopupComponent,
    DepartmentsMJComponent,
    DeparmentmjeditpopupComponent,
    KjCourseComponent,
    KjAuthorComponent,
    KjCompanyComponent,
    KjEventComponent,
    VmQuestionBankComponent,
    AmOrganizationsComponent,
    AmEmployeesComponent,
    AmOrganizationsEditPopupComponent,
    PkSalseAprilComponent,
    PkSalseMayComponent,
    MJEmployeeComponent,
    EmployeeEditPopupComponent,
    MkEmployeeDetailsComponent,
    MkemployeeEditPopupComponent,
    MkProductsComponent,

    UAUsersComponent,
    UAEmployeesComponent,
    UaEmployeeEditPopupComponent,
    UserEditTemplatePopUpComponent,
    UserEditReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibraryModule,
    FormsModule
  ],
  providers: [Title, FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
