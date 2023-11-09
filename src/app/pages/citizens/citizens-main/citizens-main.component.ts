import { Component, OnInit } from '@angular/core';
import { Citizen } from 'src/app/interfaces/citizen-interface';
import { CitizenService } from 'src/app/services/citizen/citizen.service';

@Component({
  selector: 'app-citizens-main',
  templateUrl: './citizens-main.component.html',
  styleUrls: ['./citizens-main.component.css']
})
export class CitizensMainComponent implements OnInit {

  citizens: Citizen[] = [];

  constructor(private citizenService: CitizenService ) {}

  ngOnInit(): void {
    this.getCitizen();
  }

  getCitizen() {
    this.citizenService.getCitizens()
      .subscribe({
        next: (resp) => {
          this.citizens = resp.data;
        },
        error: (err) => {
          console.log('Fallo');
        }
      })
  }

}
