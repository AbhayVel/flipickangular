import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablesComponent } from './components/tables/tables.component';
import { UsersComponent } from './components/users/users.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = 
[   
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'} }, 
      { path: 'users', component: UsersComponent, data: {title: 'Users'} }, 
      { path: 'tables', component: TablesComponent, data: {title: 'Tables'} },      
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
