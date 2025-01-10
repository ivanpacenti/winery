import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViniService } from '../../services/vini.service';
import {Vino} from '../../models/VinoModel';
import {UserActionsComponent} from './user-actions/user-actions.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, SidebarComponent, ProductListComponent, UserActionsComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  vini: Vino[] = [];
  filteredProducts: Vino[] = [];

  constructor(private viniService: ViniService) {}

  ngOnInit(): void {
    // Recupera i vini dal backend
    this.viniService.getVini().subscribe({
      next: (data) => {
        this.vini = data;
        this.filteredProducts = this.vini; // Inizializza la lista filtrata con tutti i vini
      },
      error: (err) => {
        console.error('Errore durante il recupero dei vini:', err);
      }
    });
  }

  onCategorySelected(category: string): void {

    if (!category || category === 'Tutti') {
      this.filteredProducts = this.vini; // Mostra tutti i vini
    } else {
      this.filteredProducts = this.vini.filter(product => product.categoria === category);
    }
  }

}
