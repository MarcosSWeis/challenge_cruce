import { Product } from "../models/Product"

export interface IUser {
    id: number
    name: string
    lastName: string
    email: string
    password: string
    role: Role
    shoppingCart: Array<Product>
}

export enum Role {
    admin = 1,
    standard = 2,
}