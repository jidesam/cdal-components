import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { MyRequestComponent } from './request/my-request/my-request.component';
import { RequestCustomerDataComponent } from './request/request-customer-data/request-customer-data.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { ExistingUsersComponent } from './request/existing-users/existing-users.component';
import { UpgradePlanComponent } from './plans/upgrade-plan/upgrade-plan.component';
import { ManagePlanComponent } from './plans/manage-plan/manage-plan.component';
import { MaterialModule } from 'src/app/material.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    MainComponent,
    MyRequestComponent,
    RequestCustomerDataComponent,
    ExistingUsersComponent,
    UpgradePlanComponent,
    ManagePlanComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgxPaginationModule
  ]
})
export class MainModule { }
