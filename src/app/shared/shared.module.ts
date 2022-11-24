import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { SubCardComponent } from './components/sub-card/sub-card.component';
import { AppBtnComponent } from './components/app-btn/app-btn.component';
import { ApplicationInputComponent } from './components/application-input/application-input.component';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';


import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    SubCardComponent,
    AppBtnComponent,
    ApplicationInputComponent
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
    ApplicationInputComponent
  ]
})
export class SharedModule { }
