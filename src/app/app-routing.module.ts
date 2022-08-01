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
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoanStatusCheckComponent } from './loan-status-check/loan-status-check.component'
import { LoanSuccessComponent } from './loan-success/loan-success.component';

const routes: Routes = [
  { path:'admindashboard', component: AdminDashboardComponent },
  { path:'viewallusers', component: ViewAllUsersComponent },
  { path:'viewclients', component: ViewClientsComponent },
  { path:'viewapplicants', component: ViewApplicantsComponent },
  { path:'viewrejected', component: ViewRejectedComponent },
  { path:'applicationdetailed/:id', component: ApplicationDetailedComponent },
  { path:'userdashboard/:id', component: UserDashboardComponent },
  { path:'loanstatuscheckuser/:id', component: LoanStatusCheckComponent },
  { path:'loansuccess', component: LoanSuccessComponent },
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