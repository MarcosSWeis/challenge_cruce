import { IProduct } from "../interfaces/products"
import { Product } from "../models/Product"

export function seedInstanceProduct(seedProducts: Array<IProduct>): Array<Product> {
    let products: Array<Product> = []
    for (let product of seedProducts) {
        const instanceProduct = new Product(product.title, product.price, product.description, product.category, product.image, product.quotas)
        products.push(instanceProduct)
    }
    return products
}