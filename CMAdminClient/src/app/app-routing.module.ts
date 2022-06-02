import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = 
[
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'organizations', component: OrganizationsComponent }, 
  { path: 'facilities', component: FacilitiesComponent}, 
  { path: 'users', component: UsersComponent },
  { path: 'projects', component: ProjectsComponent } 
];
export const routes1 = routes;
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
