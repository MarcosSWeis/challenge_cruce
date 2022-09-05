import { dbProducts } from "../db/db";
import { mockProducts } from "../mocks/products/mock-products";
import { mockUsers } from "../mocks/users/mock-users";
import { instanceProduct } from "./product-service";
import { instanceUser, instanceUserWithHashing } from "./user-service";

export let DB: dbProducts;

export function createDB(): void {
  const db_cruce = localStorage.getItem("db_cruce");
  if (db_cruce) {
    const db = JSON.parse(db_cruce);
    DB = new dbProducts(instanceProduct(db.products), instanceUser(db.users));
  } else {
    DB = new dbProducts(instanceProduct(mockProducts), instanceUserWithHashing(mockUsers));
    localStorage.setItem("db_cruce", JSON.stringify(DB));
  }
}

export function saveDB() {
  localStorage.setItem("db_cruce", JSON.stringify(DB));
}
