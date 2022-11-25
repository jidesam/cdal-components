import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';

const routes: Routes = [
  {path: '', component: AuthComponent, children:[
    {path: 'login', component: LoginComponent},
    { path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'email-sent', component: EmailSentComponent},
    {path: 'new-password', component: NewPasswordComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
