import { Component, OnInit } from '@angular/core';
import { DarkLightModeService } from 'src/app/services/darkLightMode/dark-light-mode.service';

@Component({
  selector: 'app-create-citizen',
  templateUrl: './create-citizen.component.html',
  styleUrls: ['./create-citizen.component.css']
})
export class CreateCitizenComponent implements OnInit {

  modalEnabled: boolean = false;
  lightModeEnabled: boolean = true;

  constructor(
    private darkLightmode: DarkLightModeService,
  ) {}

  ngOnInit(): void {
    this.darkLightmode.lightModeEnabled$.subscribe( status => {
      this.lightModeEnabled = status;
    })
  }

  statusModal() {
    this.modalEnabled = !this.modalEnabled;
  }

}
