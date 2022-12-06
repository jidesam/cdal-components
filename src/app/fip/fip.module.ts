import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FipRoutingModule } from './fip-routing.module';
import { FipComponent } from './fip.component';


@NgModule({
  declarations: [
    FipComponent
  ],
  imports: [
    CommonModule,
    FipRoutingModule
  ]
})
export class FipModule { }
