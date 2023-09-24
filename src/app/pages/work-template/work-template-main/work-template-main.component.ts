import { Component, OnInit } from '@angular/core';
import { DarkLightModeService } from 'src/app/services/darkLightMode/dark-light-mode.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-work-template-main',
  templateUrl: './work-template-main.component.html',
  styleUrls: ['./work-template-main.component.css']
})
export class WorkTemplateMainComponent implements OnInit {

  currentPeriod : boolean = true;
  lightModeEnabled: boolean = true;

  constructor(
    private darkLightmode: DarkLightModeService,
  ) {}

  ngOnInit(): void {
    this.darkLightmode.lightModeEnabled$.subscribe( status => {
      this.lightModeEnabled = status;
    })
  }

  endPeriod() {
    Swal.fire({
      title: 'Estas seguro de terminar el Periodo?',
      text: "Al terminar el periodo ya no podras hacer cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Terminar'
    }).then((result) => {
      if(result.isConfirmed) {
        Swal.fire(
          'Terminado Correctamente!',
          'El periodo se ha terminado',
          'success'
        )
        this.currentPeriod = false;
      }
    })

  }

}
