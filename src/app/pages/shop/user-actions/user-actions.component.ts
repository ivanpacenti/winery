import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { LoginModalComponent } from '../../login/login.component';
import { UserProfileComponent } from '../../profilo-utente/profilo-utente.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-actions',
  standalone: true,
  imports: [
    LoginModalComponent,
    NgIf,
    UserProfileComponent
  ],
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.css']
})
export class UserActionsComponent {
  isLoginModalOpen = false;
  isProfileModalOpen = false;
  isLogoutConfirmOpen = false;
  userName: string | null = null; // Variabile per il nome utente

  ngOnInit() {
    this.setUserName(); // Imposta il nome utente all'avvio
  }

  setUserName() {
    if (this.authService.checkAuth()) {
      const userDetails = this.authService.getUserDetails();
      this.userName = userDetails?.nome || null; // Imposta il nome utente
    } else {
      this.userName = null; // Resetta il nome utente se non loggato
    }
  }

  constructor(private authService: AuthService) {}

  onUserClick() {
    if (this.authService.checkAuth()) {
      this.isProfileModalOpen = true;
    } else {
      this.isLoginModalOpen = true;
    }
    document.body.classList.add('modal-open');
  }

  closeLoginModal() {
    this.isLoginModalOpen = false;
    this.cleanupModalState();
    this.setUserName(); // Aggiorna il nome utente dopo il login

  }

  closeProfileModal() {
    this.isProfileModalOpen = false;
    this.cleanupModalState();
  }

  onLogoutClick() {
    this.authService.logout();
    this.isLogoutConfirmOpen = true;
    this.userName = null; // Resetta il nome utente dopo il logout
    document.body.classList.add('modal-open');
  }

  private cleanupModalState() {
    if (!this.isLoginModalOpen && !this.isProfileModalOpen) {
      document.body.classList.remove('modal-open');
    }
  }

  onFavoritesClick() {
    
  }
}
