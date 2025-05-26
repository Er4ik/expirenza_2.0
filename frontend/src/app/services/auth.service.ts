import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4000/api/users'; 
  constructor(private http: HttpClient) {}

  register(user: { name: string, email: string, password: string }): Observable<any> {
    console.log(user)
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
