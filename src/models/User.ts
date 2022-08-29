import { IUser, Role } from "../interfaces/user";
import { Product } from "./Product";
import { hashSync, compareSync } from "bcryptjs";

export class User implements IUser {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  shoppingCart: Array<Product>;
  constructor(
    id: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
    shoppingCart: Array<Product>,
    role: Role
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = this.setEncryptPassword(password);
    this.role = role;
    this.shoppingCart = shoppingCart;
  }

  addToCart(product: Product): void {
    this.shoppingCart.push(product);
  }
  getShoppingCart(): Array<Product> {
    return this.shoppingCart;
  }

  setShoppingCart(products: Array<Product>) {
    this.shoppingCart = products;
  }

  setEncryptPassword(password: string): string {
    return hashSync(password, 10);
  }
  getDecryptPassword(password: string, hashedPassword: string): boolean {
    return compareSync(password, hashedPassword);
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
  setPassword(password: string): void {
    this.password = password;
  }

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
