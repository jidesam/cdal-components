import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { MyRequestComponent } from './my-request/my-request.component';
import { RequestCustomerDataComponent } from './request-customer-data/request-customer-data.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { ExistingUsersComponent } from './existing-users/existing-users.component';
import { UpgradePlanComponent } from './upgrade-plan/upgrade-plan.component';
import { ManagePlanComponent } from './manage-plan/manage-plan.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    MainComponent,
    MyRequestComponent,
    RequestCustomerDataComponent,
    ExistingUsersComponent,
    UpgradePlanComponent,
    ManagePlanComponent,
    TestComponent
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
