import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaMainComponent } from './sa-main/sa-main.component';
import { MembersMainComponent } from '../members/members-main/members-main.component';
import { WorkTemplateMainComponent } from '../work-template/work-template-main/work-template-main.component';

const routes: Routes = [
  {
    path: '',
    component: SaMainComponent,
    children: [
      {
        path: '',
        component: MembersMainComponent
      },
      {
        path: 'integrantes',
        component: MembersMainComponent
      },
      {
        path: 'plantilla',
        component: WorkTemplateMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
