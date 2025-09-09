import { Injectable } from '@nestjs/common';
import { Product } from '@types';

@Injectable()
export class AppService {
  getProducts(): Product[] {
    return [
      {
        id: '1',
        title: 'Produit test',
        variants: [{ id: 'v1', price: 10 }],
      },
    ];
  }
}