import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cart } from '../../models/cart.model';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    CurrencyPipe,
    RouterLink,
    CommonModule
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private _cart: Cart = {items: []};
  itemsQuantity = 0;

  constructor(private cartService: CartService) {}

  @Input() 
  get cart(): Cart {
    return this._cart;
  }
  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
    .map((item) => item.quantity)
    .reduce((prev, curr) => prev + curr, 0);
  }

  getTotal(cart: Cart): number {
    return this.cartService.getTotal(cart.items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

}
