import { Component } from '@angular/core';
import { DarkLightModeService } from 'src/app/services/darkLightMode/dark-light-mode.service';

@Component({
  selector: 'app-dark-light-mode',
  templateUrl: './dark-light-mode.component.html',
  styleUrls: ['./dark-light-mode.component.css']
})
export class DarkLightModeComponent {

  darkModeEnabled: boolean = false;
  imgMode: string = 'assets/img/shared/md-dark.png';

  constructor(
    private darkLightMode: DarkLightModeService,
  ) {}

  changeMode() {
    this.darkLightMode.statusMode(this.darkModeEnabled)

    this.darkModeEnabled === false ? this.imgMode = 'assets/img/shared/md-light.png' : this.imgMode = 'assets/img/shared/md-dark.png';

    this.darkModeEnabled = !this.darkModeEnabled;
  }

}
