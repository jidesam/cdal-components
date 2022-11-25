import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { PaymentComponent } from './payment/payment.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';

  
  const routes: Routes = [
    {path: '', component: AuthComponent, children:[
      { path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      { path: 'forgot-password', component: ForgotPasswordComponent},
      {path: 'email-sent', component: EmailSentComponent},
      {path: 'new-password', component: NewPasswordComponent},
      { path: 'sub', component: SubscriptionComponent},
      { path: 'payment/:plan', component: PaymentComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
