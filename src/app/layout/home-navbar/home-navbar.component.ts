import { Component } from '@angular/core';

@Component({
  selector: 'app-home-navbar',
  standalone: false,
  
  templateUrl: './home-navbar.component.html',
  styleUrl: './home-navbar.component.css'
})
export class HomeNavbarComponent {
  dropdownVisible = false;

  toggleDropdown(show: boolean) {
    this.dropdownVisible = show;
  }
}
