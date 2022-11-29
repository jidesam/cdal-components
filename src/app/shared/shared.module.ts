import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { SubCardComponent } from './components/sub-card/sub-card.component';
import { AppBtnComponent } from './components/app-btn/app-btn.component';
import { ApplicationInputComponent } from './components/application-input/application-input.component';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';


import { RouterModule } from '@angular/router';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { LoginInputComponent } from './login-input/login-input.component';
import { UpgradePlanCardComponent } from './components/upgrade-plan-card/upgrade-plan-card.component';
import { NotificationComponent } from './components/notification/notification.component';
import { AppDateComponent } from './components/app-date/app-date.component';
import { LogoutComponent } from './modals/logout/logout.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    SubCardComponent,
    AppBtnComponent,
    ApplicationInputComponent,
    AuthHeaderComponent,
    LoginInputComponent,
    UpgradePlanCardComponent,
    NotificationComponent,
    AppDateComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
 
  exports: [
    HeaderComponent,
    AsideComponent,
    SubCardComponent,
    AppBtnComponent,
    ApplicationInputComponent,
    AuthHeaderComponent,
    LoginInputComponent,
    UpgradePlanCardComponent,
    AppDateComponent

  ]
})
export class SharedModule { }
