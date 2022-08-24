import { number } from "yup"
import { IProduct, QuotaProduct } from "../interfaces/products"
import { Product } from "../models/Product"

export function instanceProduct(seedProducts: Array<IProduct>): Array<Product> {
    let products: Array<Product> = []
    for (let product of seedProducts) {
        const instanceProduct = new Product(product.id, product.title, product.price, product.description, product.category, product.image, product.quotas)
        products.push(instanceProduct)
    }
    return products
}


export function filterByPrice(minPrice?: number, maxPrice?: number, arrToFilter?: Array<Product>): Array<Product> | [] {
    let min: number, max: number;
    min = !minPrice ? 0 : minPrice
    max = !maxPrice ? Infinity : maxPrice
    if (arrToFilter) {
        return arrToFilter.filter((product) => product.price.price < max && product.price.price > min)
    } else {
        return []
    }

}

export function getFilterByQuota(quotas: QuotaProduct, products: Array<Product>): Array<Product> | undefined {
    return products.filter((product) => product.quotas === quotas)
}

export function getFilterDiscount(discount: number, products: Array<Product>): Array<Product> | undefined {
    return products.filter((product) => product.price.discount <= discount && product.price.discount > discount - 10)
}