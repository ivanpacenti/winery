import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, SidebarComponent, ProductListComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products = [
    { name: 'Rosso Piceno', category: 'red', price: 20, image: 'assets/rosso-piceno.jpg' },
    { name: 'Verdicchio', category: 'white', price: 15, image: 'assets/verdicchio.jpg' },
    { name: 'Rosso Conero', category: 'red', price: 25, image: 'assets/rosso-conero.jpg' },
    { name: 'Pecorino', category: 'white', price: 18, image: 'assets/pecorino.jpg' },
  ];

  filteredProducts = this.products;

  onCategorySelected(category: string) {
    this.filteredProducts = this.products.filter(product => product.category === category);
  }
}
