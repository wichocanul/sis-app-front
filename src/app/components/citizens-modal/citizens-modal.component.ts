import { Component, Input } from '@angular/core';
import { DarkLightModeService } from 'src/app/services/darkLightMode/dark-light-mode.service';

@Component({
  selector: 'app-citizens-modal',
  templateUrl: './citizens-modal.component.html',
  styleUrls: ['./citizens-modal.component.css']
})
export class CitizensModalComponent {

  searchCitizen: string = '';
  subtitle: string = 'hola';
  modalEnabled: boolean = false;
  lightModeEnabled: boolean = true;
  @Input() titleButton: string = '';
  @Input() titleModal: string = '';

  constructor(
    private darkLightmode: DarkLightModeService,
  ) {}

  ngOnInit(): void {
    this.darkLightmode.lightModeEnabled$.subscribe( status => {
      this.lightModeEnabled = status;
    })
  }

  statusModal() {
    this.modalEnabled = !this.modalEnabled;
  }

  changeName(name: string) {
    console.log(name)
    this.searchCitizen = name;
  }

}
