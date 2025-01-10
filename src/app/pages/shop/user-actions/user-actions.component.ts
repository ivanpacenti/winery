import { Component } from '@angular/core';

@Component({
  selector: 'app-user-actions',
  standalone: true,
  imports: [],
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.css']
})
export class UserActionsComponent {
  onUserClick() {
    console.log('User icon clicked');
    // Puoi aggiungere logica per il profilo utente qui
  }

  onLogoutClick() {
    console.log('Logout icon clicked');
    // Puoi aggiungere logica per il logout qui
  }
}
