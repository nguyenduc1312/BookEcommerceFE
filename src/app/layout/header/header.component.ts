import { Component } from '@angular/core';

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
  constructor() {
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
  ngOnInit(): void {
    // this.cart = this.cartService.getCart;
  }
}
