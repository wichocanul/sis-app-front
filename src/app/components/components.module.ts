import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkLightModeComponent } from './dark-light-mode/dark-light-mode.component';
import { CitizensModalComponent } from './citizens-modal/citizens-modal.component';



@NgModule({
  declarations: [
    DarkLightModeComponent,
    CitizensModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DarkLightModeComponent,
    CitizensModalComponent
  ]
})
export class ComponentsModule { }
