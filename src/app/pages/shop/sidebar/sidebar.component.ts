import { Component, Output, EventEmitter } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  selectedCategory: string | null = "Tutti"; // Traccia la categoria selezionata
  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(category: string): void {
    this.selectedCategory = category; // Aggiorna lo stato locale
    this.categorySelected.emit(category);
  }
}
