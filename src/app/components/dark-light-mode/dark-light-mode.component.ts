import { Component } from '@angular/core';
import { DarkLightModeService } from 'src/app/services/darkLightMode/dark-light-mode.service';

@Component({
  selector: 'app-dark-light-mode',
  templateUrl: './dark-light-mode.component.html',
  styleUrls: ['./dark-light-mode.component.css']
})
export class DarkLightModeComponent {

  darkModeEnabled: boolean = !this.darkLightMode.typeMode();
  imgMode: string = this.selectImg();

  constructor(
    private darkLightMode: DarkLightModeService,
  ) {}

  ngOnInit() {
    this.darkLightMode.typeMode();
  }

  changeMode() {

    if(localStorage.getItem('typeMode') == 'light') {
      localStorage.setItem('typeMode', 'dark');
      this.darkModeEnabled = false;
    } else {
      localStorage.setItem('typeMode', 'light');
      this.darkModeEnabled = true;
    }

    this.darkLightMode.statusMode(this.darkModeEnabled)

    this.darkModeEnabled === false ? this.imgMode = 'assets/img/shared/md-light.png' : this.imgMode = 'assets/img/shared/md-dark.png';

    this.darkModeEnabled = !this.darkModeEnabled;
  }

  selectImg(): string {
    if(!localStorage.getItem('typeMode')) {
      return 'assets/img/shared/md-dark.png';
    }
    if(localStorage.getItem('typeMode') == 'light') {
      return 'assets/img/shared/md-dark.png'
    } else {
      return 'assets/img/shared/md-light.png';
    }
  }

}
