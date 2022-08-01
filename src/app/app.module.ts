import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { ViewApplicantsComponent } from './view-applicants/view-applicants.component';
import { ViewRejectedComponent } from './view-rejected/view-rejected.component';
import { ApplicationDetailedComponent } from './application-detailed/application-detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    ViewAllUsersComponent,
    ViewClientsComponent,
    ViewApplicantsComponent,
    ViewRejectedComponent,
    ApplicationDetailedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
