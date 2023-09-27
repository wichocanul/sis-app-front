import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaMainComponent } from './sa-main/sa-main.component';
import { MembersMainComponent } from '../members/members-main/members-main.component';
import { WorkTemplateMainComponent } from '../work-template/work-template-main/work-template-main.component';
import { CitizensMainComponent } from '../citizens/citizens-main/citizens-main.component';
import { IncidentsMainComponent } from '../incidents/incidents-main/incidents-main.component';

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
      },
      {
        path: 'ciudadanos',
        component: CitizensMainComponent
      },
      {
        path: 'incidencias',
        component: IncidentsMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
