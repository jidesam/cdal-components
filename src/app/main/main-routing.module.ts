import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';


const routes: Routes = [
  { path: '', component: MainComponent , children:[
     { path: 'request', loadChildren: () => import('./request/request.module').then(m => m.RequestModule) },
    { path: 'plans', loadChildren: () => import('./plans/plans.module').then(m => m.PlansModule) },
     { path: 'consent', loadChildren: () => import('./consent/consent.module').then(m => m.ConsentModule) }
 
   
   
   

  ]},
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
