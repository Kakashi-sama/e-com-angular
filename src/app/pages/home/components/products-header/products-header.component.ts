import { Component, EventEmitter, Output, output } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [
    MatMenuModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './products-header.components.html'
})

export class ProductsHeaderComponent {
  sort = 'desc'
  @Output() columnsCountChange = new EventEmitter<number>();
  itemsShowCount = 12;
  

  onSortUpdated(newSort: string) : void {
    this.sort = newSort;
  }

  onItemUpdated(count: number): void {
    this.itemsShowCount = count;
  }
  onColumnUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
