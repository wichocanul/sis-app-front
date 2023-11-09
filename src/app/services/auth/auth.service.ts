import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { LoginResponse, Logout } from 'src/app/interfaces/auth-interface';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.urlApp;

  constructor(private http: HttpClient) {}

  login(user: string, password: string) {
    const url = `${this.baseUrl}/login`;
    const body = { user: user, password: password };

    return this.http.post<LoginResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.message == 'success') {
          this.LocalStorageSaveData(resp);
        }
      }),
      map((valid) => valid.message),
      catchError((err) => of(err.error.message))
    );
  }

  logout(): Observable<Logout> {
    const url = `${this.baseUrl}/logout`;
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.http.get<Logout>(url, { headers });
  }

  LocalStorageSaveData(respData: LoginResponse) {
    localStorage.setItem('user', respData.data.user);
    localStorage.setItem('email', respData.data.email);
    localStorage.setItem('token', respData.access_token);
  }
}
