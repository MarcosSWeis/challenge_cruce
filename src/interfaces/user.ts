import { Product } from "../models/Product"

export interface IUser {
    id: number
    name: string
    lastName: string
    email: string
    password: string
    shoppingCart: Array<Product>
}