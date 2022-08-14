import { CategoriesProduct, Price, QuotaProduct } from "../interfaces/products";
import { Product } from "./Product";

export class Funko extends Product {

    algo: string
    constructor(title: string, price: Price, description: string, category: CategoriesProduct, image: any, quotas: QuotaProduct, algo: string) {

        super(title, price, description, category, image, quotas)
        this.algo = algo
    }
    getAlgo(): string {
        return this.algo
    }

}