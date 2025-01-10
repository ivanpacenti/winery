import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule
  ]
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();

  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        console.log('Login successful');
        this.close.emit(); // Chiude il popup
      },
      error: () => {
        this.errorMessage = 'Invalid username or password';
      },
    });
  }

  closeModal() {
    this.close.emit();
  }
}
