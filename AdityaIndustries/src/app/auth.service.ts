// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://127.0.0.1:5000/login'; 
  private signupUrl = 'http://127.0.0.1:5000/signup';

  constructor(private http: HttpClient) {}

  login(user_name: string, user_emailid: string, user_password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { user_name, user_emailid, user_password };

    return this.http.post<any>(this.loginUrl, body, { headers });
  }
  signup(user_name: string, user_emailid: string, user_password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { user_name, user_emailid, user_password };

    return this.http.post<any>(this.signupUrl, body, { headers });
  }
}