import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { Cart } from './models/cart.model';
import { CartService } from './Services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header [cart]="cart" />
    <router-outlet/>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  cart : Cart = { items: []};
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
    });
  }

}