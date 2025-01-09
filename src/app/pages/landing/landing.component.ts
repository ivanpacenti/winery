import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router: Router) {}

  enterShop() {
    // Qui puoi navigare alla pagina dello shop (quando esisterà)
    this.router.navigate(['/shop']);
  }
}
