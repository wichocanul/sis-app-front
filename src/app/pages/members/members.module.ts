import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersMainComponent } from './members-main/members-main.component';
import { WorkTeamComponent } from './work-team/work-team.component';
import { DontWorkComponent } from './dont-work/dont-work.component';



@NgModule({
  declarations: [
    MembersMainComponent,
    WorkTeamComponent,
    DontWorkComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MembersModule { }
