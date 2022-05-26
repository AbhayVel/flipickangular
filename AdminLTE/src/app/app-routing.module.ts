import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserComponent } from './components/browser/browser.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustompipeComponent } from './components/pipeexample/custompipe.component';
import { InbuiltpipeComponent } from './components/pipeexample/inbuiltpipe.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = 
[
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'browsers', component: BrowserComponent },
  { path: 'builtinpipe', component: InbuiltpipeComponent },
  { path: 'custompipe', component: CustompipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
