import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SaMainComponent } from './sa-main/sa-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MembersModule } from '../members/members.module';


@NgModule({
  declarations: [
    SaMainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MembersModule
  ]
})
export class MainModule { }
