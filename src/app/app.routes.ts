import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import {ShopComponent} from './pages/shop/shop.component';
import {LoginModalComponent} from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'login', component: LoginModalComponent },


];
