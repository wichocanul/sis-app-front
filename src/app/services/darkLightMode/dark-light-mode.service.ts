import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkLightModeService {

  private lightModeEnabled = new BehaviorSubject<boolean>(true);

  public lightModeEnabled$ = this.lightModeEnabled.asObservable();

  constructor() { }

  statusMode(status: boolean) {

    status === true ? this.lightModeEnabled.next(true): this.lightModeEnabled.next(false);

  }
}
