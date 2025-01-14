import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  brandlogo='https://www.pngkey.com/png/detail/361-3617936_b2b-e-commerce-b2b-e-commerce-icon.png';
  year=new Date().getFullYear();
  brand='Book 2 Buy';
}
