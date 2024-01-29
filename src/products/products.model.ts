export class Product {
    // since in te constructor we defined as public, it automatically set them as properties of the object
    // id: string;
    // title: string;
    // description: string;
    // price: number;

    constructor(public id: string, public title: string, public description: string, public price: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
    };
}