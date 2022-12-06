import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsentTableComponent } from './consent-table/consent-table.component';
import { ConsentComponent } from './consent.component';

const routes: Routes = [{ path: '', component: ConsentTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsentRoutingModule { }
