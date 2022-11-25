import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { PaymentComponent } from './payment/payment.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'sub', component: SubscriptionComponent},
  { path: 'payment/:plan', component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
