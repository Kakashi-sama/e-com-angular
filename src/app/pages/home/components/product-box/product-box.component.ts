import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { Product } from '../../../../models/Product.models';

@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    CurrencyPipe,
    NgClass,
    CommonModule
  ],
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;

  @Input() product!: Product;

  @Output() itemEmitted = new EventEmitter<Product>();

  onAddToCart(product: Product): void {
    this.itemEmitted.emit(product);
  }
}
