import { PaginateProducts } from "../interfaces/return-paginate-produdts";
import { Product } from "./Product";

export class PaginateProduct implements PaginateProducts {
  total_products: number;
  total_pages: number;
  current_page: number;
  products: Array<Product>;
  constructor(total_products: number, limit: number, current_page: number, products: Array<Product>) {
    this.total_products = total_products;
    this.total_pages = this.getTotalPage(total_products, limit);
    this.current_page = current_page;
    this.products = products;
  }

  getTotalPage(totalProducts: number, limit: number): number {
    if (Math.ceil(totalProducts / limit) <= 1) {
      return 1;
    } else {
      return Math.ceil(totalProducts / limit);
    }
  }
}
