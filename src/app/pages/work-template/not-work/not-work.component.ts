import { Component } from '@angular/core';

@Component({
  selector: 'app-not-work',
  templateUrl: './not-work.component.html',
  styleUrls: ['./not-work.component.css']
})
export class NotWorkComponent {

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

}
