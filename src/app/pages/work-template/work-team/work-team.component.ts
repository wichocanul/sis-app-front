import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-work-team',
  templateUrl: './work-team.component.html',
  styleUrls: ['./work-team.component.css']
})
export class WorkTeamComponent {

  userEdit: any[] = [
    {
      id: 1,
      name: 'Javier Florez Garcia',
      puesto: 'Responsable de calle',
      observacion: ''
    },
    {
      id: 2,
      name: 'Victor Zeferino Garcia',
      puesto: 'Apoyo',
      observacion: ''
    }
  ]

  removeCitizen() {
    Swal.fire({
      title: 'El usuario sera eliminado del equipo de trabajo',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if(result.isConfirmed) {
        Swal.fire(
          'Eliminado Correctamente!',
          'El usuario fue eliminado',
          'success',
        )
      }
    })
  }

}
