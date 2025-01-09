import {Component, NgModule} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {ShopComponent} from './pages/shop/shop.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
}
