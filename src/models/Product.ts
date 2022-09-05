import { image } from "@cloudinary/url-gen/qualifiers/source";
import { array } from "yup";
import { CategoryProduct, IProduct, Price, QuotaProduct } from "../interfaces/products";
import { Category } from "./Category";
import { SubCategory } from "./Sub-category";

export class Product implements IProduct {
  id: number;
  title: string;
  price: Price;
  description: string;
  priceDiscount: number;
  category: Category;
  subCategory: SubCategory;
  images: Array<string> = []; //string solo , para cuadno se actualice
  quotas: QuotaProduct;
  constructor(
    id: number,
    title: string,
    price: Price,
    description: string,
    category: Category,
    subCategory: SubCategory,
    quotas: QuotaProduct,
    images: Array<string> | string
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.quotas = quotas;
    this.subCategory = subCategory;
    this.setLoadImage(images);
    this.priceDiscount = this.getPriceDiscount(price.price, price.discount);
  }

  //------***   SETTERS   ***------//
  setCreateId(id: number): void {
    this.id = id;
  }
  setTitle(title: string): void {
    this.title = title;
  }
  setPrice(price: Price): void {
    this.price = price;
  }
  setDescription(description: string): void {
    this.description = description;
  }
  setCategory(category: Category): void {
    this.category = category;
  }
  setSubCategory(subCategory: SubCategory): void {
    this.subCategory = subCategory;
  }
  setImages(images: Array<string>): void {
    this.images = images;
  }

  setLoadImage(images: Array<string> | string): void {
    if (typeof images !== "string") {
      images.forEach((image) => {
        this.images.push(image);
      });
    } else {
      this.images.push(images);
    }
  }
  getPriceDiscount(price: number, discount: number): number {
    let result = discount === 0 ? price : Number((price - (discount * price) / 100).toFixed(2));
    return result;
  }
  getPriceForQuota(price: number, quota: QuotaProduct): number {
    let totalQuota = Number(quota);
    let result: number = totalQuota === 0 ? price : price / totalQuota;
    return Number(result.toFixed(2));
  }

  //------***   GETTERS   ***------//
  getId(): number {
    return this.id;
  }
  getTitle(): string {
    return this.title;
  }
  getPrice(): Price {
    return this.price;
  }
  getDescription(): string {
    return this.description;
  }
  getCategory(): Category {
    return this.category;
  }
  getSubCategory(): SubCategory {
    return this.subCategory;
  }
  getImages(): Array<string> {
    return this.images;
  }
}
