import { Component, OnInit } from '@angular/core';
import { DarkLightModeService } from 'src/app/services/darkLightMode/dark-light-mode.service';

@Component({
  selector: 'app-sa-main',
  templateUrl: './sa-main.component.html',
  styleUrls: ['./sa-main.component.css']
})
export class SaMainComponent implements OnInit {

  lightModeEnabled: boolean = true;
  sidebarHidden: boolean = true;

  constructor(
    private darkLightmode: DarkLightModeService,
  ) {}

  ngOnInit(): void {
    this.darkLightmode.lightModeEnabled$.subscribe( status => {
      this.lightModeEnabled = status;
    })
  }

  statusMenu(status: boolean) {
    this.sidebarHidden = status;
  }

}
