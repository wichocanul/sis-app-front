import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaMainComponent } from './sa-main/sa-main.component';
import { MembersMainComponent } from '../members/members-main/members-main.component';

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
        path: 'members',
        component: MembersMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
