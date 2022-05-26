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
import { ConcatPipe } from './pipe/concat.pipe';
import { BrowserComponent } from './components/browser/browser.component';
import { InbuiltpipeComponent } from './components/pipeexample/inbuiltpipe.component';
import { CustompipeComponent } from './components/pipeexample/custompipe.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { FilterimpurePipe } from './pipe/filterimpure.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageSidebarComponent,
    PageContentWrapperComponent,
    PageFooterComponent,
    DashboardComponent,
    UsersComponent,
    ConcatPipe,
    BrowserComponent,
    InbuiltpipeComponent,
    CustompipeComponent,
    FilterPipe,
    FilterimpurePipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
