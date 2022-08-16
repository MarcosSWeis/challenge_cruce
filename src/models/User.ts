
import { IUser } from "../interfaces/user";
import { Product } from "./Product";


export class User implements IUser {
    id: number;
    name: string;
    lastName: string;
    email: string;
    password: string
    shoppingCart: Array<Product>
    constructor(id: number, name: string, lastName: string, email: string, password: string, shoppingCart: Array<Product>) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password
        this.shoppingCart = shoppingCart
    }





    // setCreateId(id: number): void {
    //     this.id = id
    // }
    // setName(name: string): void {
    //     this.name = name
    // }
    // setLastName(lastName: string): void {
    //     this.lastName = lastName
    // }
    // setEmail(email: string): void {
    //     this.email = email
    // }
    // setPassword(password: string): void {
    //     this.password = password
    // }

    // //------***   GETTERS   ***------//
    // getId(): number | undefined {
    //     return this.id
    // }
    // getTitle(): string {
    //     return this.name
    // }
    // getPrice(): string {
    //     return this.lastName
    // }
    // getDescription(): string {
    //     return this.email
    // }
    // getCategory(): string {
    //     return this.password
    // }

}