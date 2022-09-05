import { CategoryProduct, Price, QuotaProduct } from "../interfaces/products";
import { Category } from "./Category";
import { Product } from "./Product";
import { SubCategory } from "./Sub-category";

export class Funko extends Product {
  constructor(
    id: number,
    title: string,
    price: Price,
    description: string,
    category: Category,
    subCategory: SubCategory,
    images: Array<string>,
    quotas: number
  ) {
    super(id, title, price, description, category, subCategory, quotas, images);
  }
}
