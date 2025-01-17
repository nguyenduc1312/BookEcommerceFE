import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cart: any[] = [];

  menulist: { title: string; path: string }[] = [];
  isMenu = false;
  constructor(public auth: AuthService) {
  }
  openMenu() {
    this.isMenu = true;
  }
  closeMenu() {
    this.isMenu = false;
  }
  logOut() {
    // this.authService.logout();
  }

  logIn() {
    this.auth.loginWithRedirect();
  }
  ngOnInit(): void {
    // this.cart = this.cartService.getCart;
  }
}
