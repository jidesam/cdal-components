import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { AppBtnComponent } from './components/app-btn/app-btn.component';
import { ApplicationInputComponent } from './components/application-input/application-input.component';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    AppBtnComponent,
    ApplicationInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    AsideComponent,
    AppBtnComponent,
    ApplicationInputComponent
  ]
})
export class SharedModule { }
