import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentsMJComponent } from './components/departments-mj/departments-mj.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { MkuserComponent } from './components/mkuser/mkuser.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SbCoursesComponent } from './components/sb-courses/sb-courses.component';
import { UsersComponent } from './components/users/users.component';
import { PksalesComponent } from './components/pksales/pksales.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { VkcompComponent } from './vkcomp/vkcomp.component';
import { DepartmentMJ } from './models/DepartmentsMJ';
import { KjCourseComponent } from './components/kj-course/kj-course.component';
import { KjAuthorComponent } from './components/kj-author/kj-author.component';
import { KjCompanyComponent } from './components/kj-company/kj-company.component';
import { KjEventComponent } from './components/kj-event/kj-event.component';
import { VmQuestionBankComponent } from './components/vm-question-bank/vm-question-bank.component';

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
        { path: 'projects', component: ProjectsComponent, data: { title: 'Projects' } },
        { path: 'organizations', component: OrganizationsComponent, data: { title: 'Organizations' } },
        { path: 'employees', component: EmployeesComponent, data: { title: 'Employees' } },
        { path: 'salse', component: PksalesComponent, data: { title: 'Salse' } },
        { path: 'departmentMJ', component: DepartmentsMJComponent, data: { title: 'departmentMJ' } },
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
