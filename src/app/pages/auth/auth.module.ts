import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
