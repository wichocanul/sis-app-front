import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DarkLightModeService } from 'src/app/services/darkLightMode/dark-light-mode.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  lightModeEnabled: boolean = true;
  menuEnabled: boolean = false;

  @Output() statusMenu = new EventEmitter<boolean>();

  constructor(
    private darkLightmode: DarkLightModeService,
  ) {}

  ngOnInit(): void {
    this.darkLightmode.lightModeEnabled$.subscribe( status => {
      this.lightModeEnabled = status;
    })
  }

  changeStatusMenu() {
    this.statusMenu.emit(this.menuEnabled);
    this.menuEnabled = !this.menuEnabled
  }

}

