import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  menuEnabled: boolean = false;

  @Output() statusMenu = new EventEmitter<boolean>();

  changeStatusMenu() {
    this.statusMenu.emit(this.menuEnabled);
    this.menuEnabled = !this.menuEnabled
  }

}

