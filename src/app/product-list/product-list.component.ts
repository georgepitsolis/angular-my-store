import { Component } from '@angular/core';
import { PorductsService } from './porducts.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products;
  soldOut = false;

  constructor(service: PorductsService) {
    this.products = service.getProducts();
  }

  addToCart() {
    window.alert('The product added to the cart!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
