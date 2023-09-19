import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkLightModeComponent } from './dark-light-mode/dark-light-mode.component';



@NgModule({
  declarations: [
    DarkLightModeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DarkLightModeComponent
  ]
})
export class ComponentsModule { }
