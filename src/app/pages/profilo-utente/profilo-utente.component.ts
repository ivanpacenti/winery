import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Utente } from '../../models/UtenteModel';

@Component({
  selector: 'app-profilo-utente',
  standalone: true,
  templateUrl: './profilo-utente.component.html',
  styleUrls: ['./profilo-utente.component.css']
})
export class UserProfileComponent {
  @Output() close = new EventEmitter<void>();
  user: Utente | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUserDetails();
  }

  closeModal(): void {
    this.close.emit();
  }
}
