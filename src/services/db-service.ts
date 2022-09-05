import { UpdatedUserLogged } from "../interfaces/app-context-props";
import { Category } from "../models/Category";
import { PaginateProduct } from "../models/Paginate-product";
import { Product } from "../models/Product";
import { SubCategory } from "../models/Sub-category";
import { User } from "../models/User";
import Alert from "./alert-service";
import { DB, saveDB } from "./created-db";

export const addToCart = (id: number, user: User, updatedUserLogged: UpdatedUserLogged) => {
  const product = DB.getProductById(id);
  if (product) {
    user.addToCart(product);
    //save in the db
    const index: number = DB.getPositionUser(user.email);
    index !== -1 ? DB.updatedUser(index, user) : Alert.error({ title: "Error", message: "Debe registrarse" });
    saveDB();
    //once saved update the global state
    updatedUserLogged(user);
  }
};

export const getAllProducts = (): Array<Product> => {
  return DB.getAllProducts();
};

export const getProductsByCategory = (category: Category): Array<Product> | undefined => {
  return DB.getProductsByCategory(category);
};

export const getProductoByTitle = (toSearch: string): Array<Product> => {
  return DB.getProductoByTitle(toSearch);
};

export const getUserByEmail = (email: string): User | undefined => {
  return DB.getUserByEmail(email);
};

export const getAllProductsPaginates = (limit: number, page: number, arrToPaginate: Product[]): PaginateProduct => {
  return DB.getAllProductsPaginates(limit, page, arrToPaginate);
};

export const getProductById = (id: number): Product | undefined => {
  return DB.getProductById(id);
};

export function getProductsBySubCategory(subCategory: SubCategory): Array<Product> | undefined {
  return DB.getProductsBySubCategory(subCategory);
}

export function addProduct(product: Product): void {
  DB.addProduct(product);
}
