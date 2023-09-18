import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SaMainComponent } from './sa-main/sa-main.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    SaMainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HomeModule
  ]
})
export class MainModule { }
