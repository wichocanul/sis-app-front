import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CitizenResponse } from 'src/app/interfaces/citizen-interface';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class CitizenService {
  private baseUrl: string = environment.urlApp;

  constructor(private http: HttpClient) {}

  getCitizens(): Observable<CitizenResponse> {
    const url = `${this.baseUrl}/citizens`;
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );

    return this.http.get<CitizenResponse>( url, { headers } );
  }
}
