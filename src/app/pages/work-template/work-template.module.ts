import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkTemplateMainComponent } from './work-template-main/work-template-main.component';
import { RepresentativesComponent } from './representatives/representatives.component';
import { WorkTeamComponent } from './work-team/work-team.component';
import { NotWorkComponent } from './not-work/not-work.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { EditTeamModalComponent } from './edit-team-modal/edit-team-modal.component';



@NgModule({
  declarations: [
    WorkTemplateMainComponent,
    RepresentativesComponent,
    WorkTeamComponent,
    NotWorkComponent,
    EditTeamModalComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class WorkTemplateModule { }
