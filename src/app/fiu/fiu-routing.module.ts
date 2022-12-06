import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiuComponent } from './fiu.component';

const routes: Routes = [{ path: '', component: FiuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiuRoutingModule { }
