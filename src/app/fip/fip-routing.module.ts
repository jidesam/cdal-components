import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FipComponent } from './fip.component';

const routes: Routes = [{ path: '', component: FipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FipRoutingModule { }
