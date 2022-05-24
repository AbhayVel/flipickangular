import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/layout/page-header/page-header.component';
import { PageSidebarComponent } from './components/layout/page-sidebar/page-sidebar.component';
import { PageContentWrapperComponent } from './components/layout/page-content-wrapper/page-content-wrapper.component';
import { PageFooterComponent } from './components/layout/page-footer/page-footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageSidebarComponent,
    PageContentWrapperComponent,
    PageFooterComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
