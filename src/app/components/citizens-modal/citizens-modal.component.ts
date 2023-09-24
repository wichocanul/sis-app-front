import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-citizens-modal',
  templateUrl: './citizens-modal.component.html',
  styleUrls: ['./citizens-modal.component.css']
})
export class CitizensModalComponent {

  searchCitizen: string = ' ';
  subtitle: string = 'hola';
  modalEnabled: boolean = false;
  @Input() titleButton: string = '';
  @Input() titleModal: string = '';

  statusModal() {
    this.modalEnabled = !this.modalEnabled;
  }

}
