import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { UsersComponent } from './components/users/users.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UAUsersComponent } from './components/uausers/uausers.component';
import { UAEmployeesComponent } from './components/uaemployees/uaemployees.component';

const routes: Routes = 
[   
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'uaemployees', component: UAEmployeesComponent, data: { title: 'UAEmployees' } }, 
      { path: 'uausers', component: UAUsersComponent, data: { title: 'UAUsers' } }, 
      { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'} }, 
      { path: 'users', component: UsersComponent, data: {title: 'Users'} }, 
      { path: 'projects', component: ProjectsComponent, data: {title: 'Projects'} },  
      { path: 'organizations', component: OrganizationsComponent, data: {title: 'Organizations'} },   
      { path: 'employees', component: EmployeesComponent, data: {title: 'Employees'} },  
      { path: '', redirectTo: '/dashboard', pathMatch: 'full', data: {title: 'Dashboard'} },    
    ]
  }, 
];

export const routes1 = routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
