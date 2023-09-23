import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkTemplateMainComponent } from './work-template-main/work-template-main.component';
import { RepresentativesComponent } from './representatives/representatives.component';



@NgModule({
  declarations: [
    WorkTemplateMainComponent,
    RepresentativesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WorkTemplateModule { }
