import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { MkuserComponent } from './components/mkuser/mkuser.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { UsersComponent } from './components/users/users.component';
import { PksalesComponent } from './components/pksales/pksales.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = 
[   
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'} }, 
      { path: 'users', component: UsersComponent, data: {title: 'Users'} }, 
      { path: 'mkuser', component: MkuserComponent, data: {title: 'mkuser'} }, 
      { path: 'projects', component: ProjectsComponent, data: {title: 'Projects'} },  
      { path: 'organizations', component: OrganizationsComponent, data: {title: 'Organizations'} },   
      { path: 'employees', component: EmployeesComponent, data: {title: 'Employees'} },  
      { path: 'salse', component: PksalesComponent, data: {title: 'Salse'} },
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
