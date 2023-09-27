import { Component, OnInit } from '@angular/core';
import { DarkLightModeService } from 'src/app/services/darkLightMode/dark-light-mode.service';

@Component({
  selector: 'app-incidents-main',
  templateUrl: './incidents-main.component.html',
  styleUrls: ['./incidents-main.component.css']
})
export class IncidentsMainComponent implements OnInit {

  lightModeEnabled: boolean = true;
  searchValue: string = 'Luis Pablo';

  constructor(
    private darkLightmode: DarkLightModeService,
  ) {}

  ngOnInit(): void {
    this.darkLightmode.lightModeEnabled$.subscribe( status => {
      this.lightModeEnabled = status;
    })
  }

}
