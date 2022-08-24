import { Product } from "../models/Product";

export interface PaginateProducts {
    total_products: number//count, 
    total_pages: number //Math.ceil(count / limit),
    current_page: number//page + 1,
    products: Array<Product>
}