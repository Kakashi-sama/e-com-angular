import { Component, OnInit } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { Cart, CartItem } from '../../models/cart.model';
import { CurrencyPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatSidenavModule, 
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatCard,
    NgIf,
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: 'cart.component.html'
})
export class CartComponent implements OnInit{
  cart: Cart = { items: [] };

  constructor(private cartService: CartService) {}

  dataSource: CartItem[] = [];
  displayColumns : string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];
  
  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem) :void {
    this.cartService.removeFromCart(item);
  }

  onDecreaseQuantity(item: CartItem): void {
    this.cartService.decreaseQuantity(item);
  }
  onIncreaseQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

}
