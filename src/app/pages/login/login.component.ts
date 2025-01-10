import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();

  username = '';
  password = '';

  onSubmit() {
    console.log('Username:', this.username, 'Password:', this.password);
    this.close.emit(); // Chiude il popup dopo il login
  }

  closeModal() {
    this.close.emit();
  }
}
