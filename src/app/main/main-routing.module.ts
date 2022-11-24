import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { MyRequestComponent } from './my-request/my-request.component';
import { RequestCustomerDataComponent } from './request-customer-data/request-customer-data.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'my-request', component: MyRequestComponent },
  { path: 'request-customer-data', component: RequestCustomerDataComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
