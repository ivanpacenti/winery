import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private role = new BehaviorSubject<string | null>(null);
  role$ = this.role.asObservable();

  login(username: string, password: string) {
    // Simula una chiamata API e imposta il ruolo
    const mockResponse = { token: 'jwt-token', role: 'Administrator' };
    localStorage.setItem('token', mockResponse.token);
    this.isAuthenticated = true; // Simula un login
    this.role.next(mockResponse.role);
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false; // Simula un login

    this.role.next(null);
  }

  getRole(): string | null {
    return this.role.getValue();
  }

  checkAuth(): boolean {
    return this.isAuthenticated;
  }
}
