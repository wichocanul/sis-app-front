import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DarkLightModeService } from 'src/app/services/darkLightMode/dark-light-mode.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lightModeEnabled: boolean = true;
  loginForm: FormGroup = this.fb.group({
    user: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private darkLightmode: DarkLightModeService,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    localStorage.clear()
    this.darkLightmode.lightModeEnabled$.subscribe( status => {
      this.lightModeEnabled = status;
    })
  }

  login() {
    const { user, password } = this.loginForm.value;

    this.authService.login(user, password).subscribe({
      next: (ok) => {
        if (ok == 'success') {
          this.router.navigateByUrl('/sa');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Campos invalidos',
          });
        }
      },
    });
  }

}
