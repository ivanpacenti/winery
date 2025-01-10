import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {NgIf} from '@angular/common';
import {Utente} from '../../models/UtenteModel';

@Component({
  selector: 'app-profilo-utente',
  standalone: true,
  templateUrl: './profilo-utente.component.html',
  styleUrls: ['./profilo-utente.component.css'],
  imports: [
    NgIf
  ]
})
export class UserProfileComponent implements OnInit {
  utente: Utente | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.utente = this.authService.getUserDetails();
  }
}
