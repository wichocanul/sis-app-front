import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DarkLightModeService } from 'src/app/services/darkLightMode/dark-light-mode.service';

@Component({
  selector: 'app-edit-team-modal',
  templateUrl: './edit-team-modal.component.html',
  styleUrls: ['./edit-team-modal.component.css']
})
export class EditTeamModalComponent implements OnInit, OnChanges {

  modalEnabled: boolean = false;
  lightModeEnabled: boolean = true;
  textInput: string = '';

  @Input() titleModal: string = '';
  @Input() currentCitizen: any = {
    id: 0,
    name: '',
    puesto: '',
    observacion: ''
  }

  constructor(
    private darkLightmode: DarkLightModeService,
  ) {}

  ngOnInit(): void {
    this.darkLightmode.lightModeEnabled$.subscribe( status => {
      this.lightModeEnabled = status;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['titleModal'].currentValue == 'No Participa') {
      this.textInput = 'Justificacion';
    } else {
      this.textInput = 'Observaciones';
    }
  }

  statusModal() {
    this.modalEnabled = !this.modalEnabled;
  }

}
