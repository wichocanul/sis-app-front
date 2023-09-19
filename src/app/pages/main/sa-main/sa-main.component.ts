import { Component } from '@angular/core';

@Component({
  selector: 'app-sa-main',
  templateUrl: './sa-main.component.html',
  styleUrls: ['./sa-main.component.css']
})
export class SaMainComponent {

  sidebarHidden: boolean = true;

  statusMenu(status: boolean) {
    this.sidebarHidden = status;
  }

}
