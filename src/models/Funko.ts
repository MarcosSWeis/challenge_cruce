import { CategoryProduct, Price, QuotaProduct } from "../interfaces/products";
import { Product } from "./Product";

export class Funko extends Product {

    algo: string
    constructor(id: number, title: string, price: Price, description: string, category: CategoryProduct, image: any, quotas: QuotaProduct, algo: string) {

        super(id, title, price, description, category, image, quotas)
        this.algo = algo
    }
    getAlgo(): string {
        return this.algo
    }

}