import { Category } from "../models/Category";
import { SubCategory } from "../models/Sub-category";

export type Price = {
  price: number;
  discount: number;
};

export interface IProduct {
  id: number;
  title: string;
  price: Price;
  description: string;
  category: Category;
  subCategory: SubCategory; //capaz cambiear por array
  images: Array<string>;
  quotas: number;
}
export enum QuotaProduct {
  tres = 3,
  seis = 6,
  nueve = 9,
  doce = 12,
}

//ver porque cambiarlo para hacerlo escalable y no tan confuso en el front
export interface CategoryProduct {
  toy?: string;
  school?: string;
}

export enum Catefory {
  toy = 1,
  school,
}
