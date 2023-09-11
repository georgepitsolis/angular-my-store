import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class PorductsService {
  constructor() {}

  getProducts() {
    return [
      new Product(
        'Product1',
        10,
        'Currently, the product list displays the name and description of each product. The ProductListComponent also defines a products property that contains imported data for each product from the products array in products.ts.'
      ),
      new Product(
        'Product2',
        15,
        'Currently2, the product list displays the name and description of each product. The ProductListComponent also defines a products property that contains imported data for each product from the products array in products.ts.'
      ),
      new Product(
        'Product3',
        20,
        'Currently3, the product list displays the name and description of each product. The ProductListComponent also defines a products property that contains imported data for each product from the products array in products.ts.'
      ),
      new Product('Product4', 20),
    ];
  }
}
