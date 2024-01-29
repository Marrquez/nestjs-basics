import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, description: string, price: number): string {
        const id = uuidv4();
        const newProduct = new Product(id, title, description, price);
        this.products.push(newProduct);

        return id;
    }

    getAllProducts(): Product[] {
        return [...this.products];
    }

    getProduct(title: string): Product {
        const product = this.products.find((item) => item.title === title);

        if(!product) {
            throw new NotFoundException();
        }

        return {...product};
    }

    updateProduct(id: string, title: string, description: string, price: number): void {
        const productIndex = this.products.findIndex((item) => item.id === id);
        const product = this.products[productIndex];

        if(!product) {
            throw new NotFoundException();
        }

        if (title) {
            product.title = title;
        }

        if (description) {
            product.description = description;
        }

        if (price) {
            product.price = price;
        }

        this.products[productIndex] = product;
    }

    deleteProduct(id: string) {
        const productIndex = this.products.findIndex((item) => item.id === id);
        const product = this.products[productIndex];

        if(!product) {
            throw new NotFoundException();
        }

        this.products.splice(productIndex, 1);
    }
}
