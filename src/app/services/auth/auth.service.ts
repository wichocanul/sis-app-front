import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { LoginResponse } from 'src/app/interfaces/auth-interface';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.urlStoreApp;

  constructor(private http: HttpClient) {}

  login(user: string, password: string) {
    const url = `${this.baseUrl}/login`;
    const body = { 'email': user, 'password': password };

    // console.log(body);

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

  LocalStorageSaveData(respData: LoginResponse) {
    localStorage.setItem('user', respData.data.name);
    localStorage.setItem('userType', respData.data.email);
    localStorage.setItem('token', respData.access_token);
  }

}
