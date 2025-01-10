import { Component, Input } from '@angular/core';
import {Vino} from '../../../models/VinoModel';
import {DettagliListComponent} from './dettagli-list/dettagli-list.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html', // Percorso relativo corretto
  imports: [
    NgForOf,
    DettagliListComponent
  ],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() vini: Vino[] = [];
}
