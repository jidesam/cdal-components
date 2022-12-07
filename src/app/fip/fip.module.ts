import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FipRoutingModule } from './fip-routing.module';
import { FipComponent } from './fip.component';
import { SharedModule } from '../shared/shared.module';
import { ReportFirstScreenComponent } from './report-first-screen/report-first-screen.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    FipComponent,
    ReportFirstScreenComponent
  ],
  imports: [
    CommonModule,
    FipRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class FipModule { }
