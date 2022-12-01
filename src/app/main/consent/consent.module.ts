import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsentRoutingModule } from './consent-routing.module';
import { ConsentComponent } from './consent.component';
import { ConsentTableComponent } from './consent-table/consent-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ConsentComponent,
    ConsentTableComponent
  ],
  imports: [
    CommonModule,
    ConsentRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ConsentModule { }
