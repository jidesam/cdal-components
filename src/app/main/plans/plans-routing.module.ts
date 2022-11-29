import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePlanComponent } from './manage-plan/manage-plan.component';
import { PlansComponent } from './plans.component';
import { UpgradePlanComponent } from './upgrade-plan/upgrade-plan.component';

const routes: Routes = [{ path: '', component: ManagePlanComponent },
   {path: 'upgrade-plan', component: UpgradePlanComponent},
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
