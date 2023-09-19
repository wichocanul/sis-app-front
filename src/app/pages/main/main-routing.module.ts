import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../home/dashboard/dashboard.component';
import { SaMainComponent } from './sa-main/sa-main.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   component: SaMainComponent
  // }
  {
    path: '',
    component: SaMainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'home',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
