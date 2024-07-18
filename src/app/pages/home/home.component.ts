import { Component } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { NgFor } from '@angular/common';
import { Product } from '../../models/Product.models';
import { CartService } from '../../Services/cart.service';

const ROW_HEIGHT: {[id: number]: number} = {1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatGridList,
    MatGridTile,
    ProductsHeaderComponent,
    ProductBoxComponent,
    NgFor
  ],
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  cols: number = 3;
  selectedCategory: string | undefined;
  rowHeight = ROW_HEIGHT[this.cols];

  productsList:Product[] = [
    {
      id: 1,
      title: 'Sneakers',
      price: 150,
      category: 'shoes',
      description: 'Comfortable and stylish sneakers.',
      image: 'https://images.unsplash.com/photo-1559561852-24b9f94b09c4'
    },
    {
      id: 2,
      title: 'Smartphone',
      price: 699,
      category: 'electronics',
      description: 'Latest model smartphone with advanced features.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
    },
    {
      id: 3,
      title: 'Backpack',
      price: 89,
      category: 'accessories',
      description: 'Durable and spacious backpack for everyday use.',
      image: 'https://images.unsplash.com/photo-1581574209781-e9450e27a1d1'
    },
    {
      id: 4,
      title: 'Watch',
      price: 250,
      category: 'accessories',
      description: 'Elegant wristwatch with leather strap.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    },
    {
      id: 5,
      title: 'Laptop',
      price: 1200,
      category: 'electronics',
      description: 'High-performance laptop for all your needs.',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8'
    },
    {
      id: 6,
      title: 'Headphones',
      price: 199,
      category: 'electronics',
      description: 'Noise-cancelling headphones with superior sound quality.',
      image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980'
    },
    {
      id: 7,
      title: 'Sunglasses',
      price: 120,
      category: 'accessories',
      description: 'Stylish sunglasses with UV protection.',
      image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d'
    },
    {
      id: 8,
      title: 'Gaming Chair',
      price: 350,
      category: 'furniture',
      description: 'Ergonomic gaming chair with adjustable features.',
      image: 'https://images.unsplash.com/photo-1616627986035-63db4b0d6a51'
    },
    {
      id: 9,
      title: 'Coffee Maker',
      price: 85,
      category: 'appliances',
      description: 'Automatic coffee maker with programmable settings.',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348'
    },
    {
      id: 10,
      title: 'Fitness Tracker',
      price: 149,
      category: 'electronics',
      description: 'Waterproof fitness tracker with heart rate monitor.',
      image: 'https://images.unsplash.com/photo-1570714891287-30e8fce5e6d4'
    }
  ];
  constructor(private cartService: CartService) { }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }
  onSelectedCategory(categoryString : string) :void {
    this.selectedCategory = categoryString;
  }
  addToCart(product: Product) : void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
