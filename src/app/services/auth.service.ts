import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {Utente} from '../models/UtenteModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null);
  private utente: Utente | null = null;
  token$ = this.tokenSubject.asObservable();
  role$: any;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string,utente:Utente }>('https://16.170.247.142/api/auth/login', { username, password }).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('utente', JSON.stringify(response.utente));
        this.utente = response.utente;
        this.tokenSubject.next(response.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('utente');
    this.tokenSubject.next(null);
    this.utente = null;
  }

  checkAuth(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token'); // Recupera il token
  }
  decodeToken(): any | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      console.error('Errore nella decodifica del token:', e);
      return null;
    }
  }
  getUserDetails(): Utente | null {
    if (this.utente) {
      return this.utente;
    }

    const userData = localStorage.getItem('utente');
    if (userData) {
      this.utente = JSON.parse(userData);
      return this.utente;
    }

    return null;
  }


  getRole(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }
}
