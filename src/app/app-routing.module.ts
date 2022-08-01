import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { ViewApplicantsComponent } from './view-applicants/view-applicants.component';
import { ViewRejectedComponent } from './view-rejected/view-rejected.component';
import { ApplicationDetailedComponent } from './application-detailed/application-detailed.component';

const routes: Routes = [
  { path:'admindashboard', component: AdminDashboardComponent },
  { path:'viewallusers', component: ViewAllUsersComponent },
  { path:'viewclients', component: ViewClientsComponent },
  { path:'viewapplicants', component: ViewApplicantsComponent },
  { path:'viewrejected', component: ViewRejectedComponent },
  { path:'applicationdetailed/:id', component: ApplicationDetailedComponent }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }