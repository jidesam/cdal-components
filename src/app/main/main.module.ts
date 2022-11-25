import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { MyRequestComponent } from './my-request/my-request.component';
import { RequestCustomerDataComponent } from './request-customer-data/request-customer-data.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { ExistingUsersComponent } from './existing-users/existing-users.component';
import { ManagePlanComponent } from './manage-plan/manage-plan.component';

@NgModule({
  declarations: [
    MainComponent,
    MyRequestComponent,
    RequestCustomerDataComponent,
    ExistingUsersComponent,
    ManagePlanComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MainModule { }
