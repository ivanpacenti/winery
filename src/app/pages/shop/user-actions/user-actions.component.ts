import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {LoginModalComponent} from '../../login/login.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-user-actions',
  standalone: true,
  imports: [
    LoginModalComponent,
    NgIf
  ],
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.css']
})
export class UserActionsComponent {
  isLoginModalOpen = false;

  constructor(private router: Router, private authService: AuthService) {}
  onUserClick() {
    if (this.authService.checkAuth()) {
      this.router.navigate(['profile']); // Naviga al profilo se l'utente è loggato
    } else {
      this.isLoginModalOpen = true; // Mostra il popup di login se non loggato
    }
  }

  closeLoginModal() {
    this.isLoginModalOpen = false; // Chiude il popup
  }


  onLogoutClick() {
    console.log('Logout icon clicked');
    this.authService.logout();
  }

}
