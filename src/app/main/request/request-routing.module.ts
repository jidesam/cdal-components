import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestCustomerDataComponent } from './request-customer-data/request-customer-data.component';
import { ExistingUsersComponent } from './existing-users/existing-users.component';
import { MyRequestComponent } from './my-request/my-request.component';
import { RequestComponent } from './request.component';

const routes: Routes = [{ path: '', component: ExistingUsersComponent},
                         { path: 'my-request', component: MyRequestComponent },
                        {path:'existing-users', component: ExistingUsersComponent},
                        { path: 'request-customer-data', component: RequestCustomerDataComponent},
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule {
   
 }
