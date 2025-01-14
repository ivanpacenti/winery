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
  }

  closeProfileModal() {
    this.isProfileModalOpen = false;
    this.cleanupModalState();
  }

  onLogoutClick() {
    this.authService.logout();
    this.isLogoutConfirmOpen = true;
    document.body.classList.add('modal-open');
  }

  private cleanupModalState() {
    if (!this.isLoginModalOpen && !this.isProfileModalOpen) {
      document.body.classList.remove('modal-open');
    }
  }
}
