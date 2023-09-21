import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkLightModeService {

  private lightModeEnabled = new BehaviorSubject<boolean>(this.typeMode());

  public lightModeEnabled$ = this.lightModeEnabled.asObservable();

  constructor() { }

  statusMode(status: boolean) {

    status === true ? this.lightModeEnabled.next(true): this.lightModeEnabled.next(false);

  }

  typeMode(): boolean {
    let current = ''
    if(!localStorage.getItem('typeMode')) {
      localStorage.setItem('typeMode', 'light')
      current = 'light';
      return true;
    }
    current = localStorage.getItem('typeMode')!;
    if(current == 'light') {
      return true
    } else {
      return false
    }
  }
}
