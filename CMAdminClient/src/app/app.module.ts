import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ConcatPipe } from './pipes/concat.pipe';
import { OtherPipe } from './pipes/other.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { StatusMasterPipe } from './pipes/status-master.pipe';
import { LibraryModule } from './feature/library/library.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    UsersComponent,
    OrganizationsComponent,
    FacilitiesComponent,
    ProjectsComponent,  
    ConcatPipe, 
    OtherPipe, 
    SortingPipe, 
    StatusMasterPipe    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LibraryModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
