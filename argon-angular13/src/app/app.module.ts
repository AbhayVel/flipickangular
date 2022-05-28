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
import { TablesComponent } from './components/tables/tables.component';
import { OtherPipe } from './pipes/other.pipe';
import { ConcatPipe } from './pipes/concat.pipe';
import { StatusMasterPipe } from './pipes/status-master.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { LibraryModule } from './feature/library/library.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    TablesComponent,
    OtherPipe,
    ConcatPipe,
    StatusMasterPipe,
    SortingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibraryModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }