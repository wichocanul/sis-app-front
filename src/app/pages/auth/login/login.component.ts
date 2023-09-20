import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { DarkLightModeService } from 'src/app/services/darkLightMode/dark-light-mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lightModeEnabled: boolean = true;

  constructor(
    private darkLightmode: DarkLightModeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.darkLightmode.lightModeEnabled$.subscribe( status => {
      this.lightModeEnabled = status;
    })
  }

  //TODO: Delete this method
  test() {
    this.router.navigate(['sa/members']);
  }

}
