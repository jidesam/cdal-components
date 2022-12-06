import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FipRoutingModule } from './fip-routing.module';
import { FipComponent } from './fip.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FipComponent
  ],
  imports: [
    CommonModule,
    FipRoutingModule,
    SharedModule
  ]
})
export class FipModule { }
