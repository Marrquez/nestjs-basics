import { Injectable } from '@nestjs/common';
import { Product } from './products.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsService {
    products: Product[] = [];

    insertProduct(title: string, description: string, price: number): string {
        const id = uuidv4();
        const newProduct = new Product(id, title, description, price);
        this.products.push(newProduct);

        return id;
    }
}
