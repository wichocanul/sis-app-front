import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SaMainComponent } from './sa-main/sa-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MembersModule } from '../members/members.module';
import { WorkTemplateModule } from '../work-template/work-template.module';
import { CitizensModule } from '../citizens/citizens.module';
import { IncidentsModule } from '../incidents/incidents.module';


@NgModule({
  declarations: [
    SaMainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MembersModule,
    WorkTemplateModule,
    CitizensModule,
    IncidentsModule
  ]
})
export class MainModule { }
