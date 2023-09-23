import { Component, OnInit } from '@angular/core';
import { DarkLightModeService } from 'src/app/services/darkLightMode/dark-light-mode.service';

@Component({
  selector: 'app-work-template-main',
  templateUrl: './work-template-main.component.html',
  styleUrls: ['./work-template-main.component.css']
})
export class WorkTemplateMainComponent implements OnInit {

  currentPeriod : boolean = false;
  lightModeEnabled: boolean = true;

  constructor(
    private darkLightmode: DarkLightModeService,
  ) {}

  ngOnInit(): void {
    this.darkLightmode.lightModeEnabled$.subscribe( status => {
      this.lightModeEnabled = status;
    })
  }

}
