import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  
  { path: 'fiu', loadChildren: () => import('./fiu/fiu.module').then(m => m.FiuModule) },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
