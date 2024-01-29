import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.model';

// this controller handle request to: your-domain.com/products
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    // Alternatively instead of define each param of the body, we can get the complete budy by:
    // @Body() completeBody: ObjectType
    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ): any {
        const generatedID = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);

        return { id: generatedID };
    }

    // This method will be triggered after: /products/products-list
    @Get('products-list')
    getAllProducts() {
        return this.productsService.getAllProducts();
    }

    // This method will be triggered after: /products/products-list
    @Get('product/:title')
    getProduct(
        @Param('title') prodId: string
    ) {
        return this.productsService.getProduct(prodId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ) {
        this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string,) {
        this.productsService.deleteProduct(prodId);
        return null;
    }
}
