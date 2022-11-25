import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExistingUsersComponent } from './existing-users/existing-users.component';
import { MainComponent } from './main.component';
import { ManagePlanComponent } from './manage-plan/manage-plan.component';
import { MyRequestComponent } from './my-request/my-request.component';
import { RequestCustomerDataComponent } from './request-customer-data/request-customer-data.component';

const routes: Routes = [
  { path: '', component: MainComponent , children:[
    { path: 'my-request', component: MyRequestComponent },
    { path: 'request-customer-data', component: RequestCustomerDataComponent },
    { path:'existing-users', component: ExistingUsersComponent },
    { path: 'manage-plan', component: ManagePlanComponent }
  ]}
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
