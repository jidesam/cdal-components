import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { SubCardComponent } from './components/sub-card/sub-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    SubCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AsideComponent,
    SubCardComponent

  ]
})
export class SharedModule { }
