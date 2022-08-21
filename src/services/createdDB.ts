import { dbProducts } from "../db/DbProducts"
import { mockProducts } from "../mock/products/mockProducts"
import { mockUsers } from "../mock/users/mockUsers"
import { instanceProduct } from "./product-service"
import { instanceUser } from "./user-service"

export let DB: dbProducts;

export function createDB(): void {
    const db_cruce = localStorage.getItem('db_cruce')
    if (db_cruce) {
        const db = JSON.parse(db_cruce)
        DB = new dbProducts(instanceProduct(db.products), instanceUser(db.users))
    } else {
        DB = new dbProducts(instanceProduct(mockProducts), instanceUser(mockUsers))
        localStorage.setItem('db_cruce', JSON.stringify(DB))
    }
}

export function saveDB() {
    localStorage.setItem('db_cruce', JSON.stringify(DB))
}

