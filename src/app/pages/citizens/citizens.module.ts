import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitizensMainComponent } from './citizens-main/citizens-main.component';
import { CreateCitizenComponent } from './create-citizen/create-citizen.component';



@NgModule({
  declarations: [
    CitizensMainComponent,
    CreateCitizenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CitizensModule { }
