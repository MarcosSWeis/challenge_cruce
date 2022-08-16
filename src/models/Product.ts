
import { CategoryProduct, IProduct, Price, QuotaProduct } from "../interfaces/products";


export class Product implements IProduct {
    id: number
    title: string;
    price: Price;
    description: string;
    priceDiscount: number
    category: CategoryProduct;
    image: any;
    quotas: QuotaProduct;
    constructor(id: number, title: string, price: Price, description: string, category: CategoryProduct, image: any, quotas: QuotaProduct) {
        this.id = id
        this.title = title
        this.price = price
        this.description = description
        this.category = category
        this.image = image
        this.quotas = quotas
        this.priceDiscount = this.getPriceDiscount(price.price, price.discount)

    }
    //------***   SETTERS   ***------//
    setCreateId(id: number): void {
        this.id = id
    }
    setTitle(title: string): void {
        this.title = title
    }
    setPrice(price: Price): void {
        this.price = price
    }
    setDescription(description: string): void {
        this.description = description
    }
    setCategory(category: CategoryProduct): void {
        this.category = category
    }
    setImage(image: any): void {
        this.image = image
    }
    getPriceDiscount(price: number, discount: number): number {

        let result = discount === 0 ? price : Number((price - ((discount * price) / 100)).toFixed(2))
        return result
    }
    getPriceForQuota(price: number, quota: QuotaProduct): number {
        let totalQuota = Number(quota)
        let result: number = totalQuota === 0 ? price : price / totalQuota
        return Number((result).toFixed(2))
    }

    //------***   GETTERS   ***------//
    getId(): number {
        return this.id
    }
    getTitle(): string {
        return this.title
    }
    getPrice(): Price {
        return this.price
    }
    getDescription(): string {
        return this.description
    }
    getCategory(): CategoryProduct {
        return this.category
    }
    getImage(): any {
        return this.image
    }
}

