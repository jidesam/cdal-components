import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { AppBtnComponent } from './components/app-btn/app-btn.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    AppBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AsideComponent
  ]
})
export class SharedModule { }
