import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiuRoutingModule } from './fiu-routing.module';
import { FiuComponent } from './fiu.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FiuComponent
  ],
  imports: [
    CommonModule,
    FiuRoutingModule,
    SharedModule
  ]
})
export class FiuModule { }
