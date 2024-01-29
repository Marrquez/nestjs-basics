import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

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
    getProducts(): void {
        
    }
}
