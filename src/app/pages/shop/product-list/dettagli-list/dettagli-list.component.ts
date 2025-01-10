import { Component, Input } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-dettagli-list',
  standalone: true,
  templateUrl: './dettagli-list.component.html',
  imports: [
    CurrencyPipe
  ],
  styleUrls: ['./dettagli-list.component.css']
})
export class DettagliListComponent {
  @Input() prezzo!: number; // Il prezzo sarà passato come input

  onFavoriteClick() {
    console.log('Aggiunto ai preferiti');
    // Puoi aggiungere qui la logica per i preferiti
  }

  onCartClick() {
    console.log('Aggiunto al carrello');
    // Puoi aggiungere qui la logica per il carrello
  }
}
