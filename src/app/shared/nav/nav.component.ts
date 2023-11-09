import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
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
    private authService: AuthService,
    private router: Router,
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

  logout() {
    this.router.navigateByUrl('/')
    this.authService.logout().subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}

