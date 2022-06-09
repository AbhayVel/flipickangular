import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentsMJComponent } from './components/departments-mj/departments-mj.component';
import { MkuserComponent } from './components/mkuser/mkuser.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SbCoursesComponent } from './components/sb-courses/sb-courses.component';
import { UsersComponent } from './components/users/users.component';
import { PksalesComponent } from './components/pksales/pksales.component';
import { PkSalseAprilComponent } from './components/pk-salse-april/pk-salse-april.component';
import { PkSalseMayComponent } from './components/pk-salse-may/pk-salse-may.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { VkcompComponent } from './vkcomp/vkcomp.component';
import { DepartmentMJ } from './models/DepartmentsMJ';
import { KjCourseComponent } from './components/kj-course/kj-course.component';
import { KjAuthorComponent } from './components/kj-author/kj-author.component';
import { KjCompanyComponent } from './components/kj-company/kj-company.component';
import { KjEventComponent } from './components/kj-event/kj-event.component';
import { VmQuestionBankComponent } from './components/vm-question-bank/vm-question-bank.component';
import { AmOrganizationsComponent } from './components/am-organizations/am-organizations.component';
import { AmEmployeesComponent } from './components/am-employees/am-employees.component';
import { MJEmployeeComponent } from './components/mj-employee/mj-employee.component';
import { MkEmployeeDetailsComponent } from './components/mk-employee-details/mk-employee-details.component';
import { MkProductsComponent } from './components/mk-products/mk-products.component';


const routes: Routes =
  [
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
        { path: 'vmquestionbank', component: VmQuestionBankComponent, data: {title: 'QuestionBank'} },
        { path: 'kjEvent', component: KjEventComponent, data: { title: 'kjEvent' } },
        { path: 'kjCompany', component: KjCompanyComponent, data: { title: 'kjCompany' } },
        { path: 'kjAuthor', component: KjAuthorComponent, data: { title: 'kjAuthor' } },
        { path: 'kjCourse', component: KjCourseComponent, data: { title: 'kjCourse' } },
        { path: 'vkcomp', component: VkcompComponent, data: { title: 'Mylist' } },
        { path: 'courses', component: SbCoursesComponent, data: { title: 'SB Courses' } },
        { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
        { path: 'users', component: UsersComponent, data: { title: 'Users' } },
        { path: 'mkuser', component: MkuserComponent, data: { title: 'mkuser' } },
        { path: 'mkemployeedetails', component: MkEmployeeDetailsComponent, data: { title: 'MK-EmployeeDetails' } },
        { path: 'projects', component: ProjectsComponent, data: { title: 'Projects' } },
        { path: 'amorganizations', component: AmOrganizationsComponent, data: { title: 'AM-Organizations' } },
        { path: 'amemployees', component: AmEmployeesComponent, data: { title: 'AM-Employees' } },
        { path: 'salse', component: PksalesComponent, data: { title: 'Salse' } },
        { path: 'pksalse', component: PksalesComponent, data: { title: 'pksalse' } },
        { path: 'pksalseapril', component: PkSalseAprilComponent, data: { title: 'pksalseapril' } },
        { path: 'pksalsemay', component: PkSalseMayComponent, data: { title: 'pksalsemay' } },
        { path: 'departmentMJ', component: DepartmentsMJComponent, data: { title: 'departmentMJ' } },
        { path: 'mjemployee', component: MJEmployeeComponent, data: { title: 'mjemployee' } },
        { path: 'mkproducts', component: MkProductsComponent, data: { title: 'Mk-Products' } },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full', data: { title: 'Dashboard' } },
      ]
    },
  ];


export const routes1 = routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
