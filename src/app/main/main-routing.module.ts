import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExistingUsersComponent } from './request/existing-users/existing-users.component';
import { MainComponent } from './main.component';
import { ManagePlanComponent } from './plans/manage-plan/manage-plan.component';
import { MyRequestComponent } from './request/my-request/my-request.component';
import { RequestCustomerDataComponent } from './request/request-customer-data/request-customer-data.component';
import { UpgradePlanComponent } from './plans/upgrade-plan/upgrade-plan.component';

const routes: Routes = [
  { path: '', component: MainComponent , children:[
     { path: 'request', loadChildren: () => import('./request/request.module').then(m => m.RequestModule) },
  { path: 'plans', loadChildren: () => import('./plans/plans.module').then(m => m.PlansModule) },
 
   
   
   

  ]},
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
