import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FipComponent } from './fip.component';
import { ReportFirstScreenComponent } from './report-first-screen/report-first-screen.component';

const routes: Routes = [{ path: '', component: FipComponent , 
children: [
  {path: 'generate-report', component: ReportFirstScreenComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FipRoutingModule { }
