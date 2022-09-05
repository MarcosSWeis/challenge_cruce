import { number } from "yup";
import { ICategory, ISubCategory } from "../interfaces/categories";
import { IProduct, QuotaProduct } from "../interfaces/products";
import { mockSubCategoriesToy } from "../mocks/categories/mock-sub-categories-toy";
import { Category } from "../models/Category";
import { Product } from "../models/Product";
import { SubCategory } from "../models/Sub-category";
import { SubCategoryToy } from "../models/Sub-category-toy";

export function instanceProduct(seedProducts: Array<IProduct>): Array<Product> {
  let products: Array<Product> = [];
  for (let product of seedProducts) {
    const instanceProduct = new Product(
      product.id,
      product.title,
      product.price,
      product.description,
      product.category,
      product.subCategory,
      product.quotas,
      product.images
    );
    products.push(instanceProduct);
  }
  return products;
}

export function instanceCategory(seedCategories: Array<ICategory>): Array<Category> {
  let categories: Array<Category> = [];
  let subCategoriesToy: Array<SubCategoryToy> = instanceSubCategory(mockSubCategoriesToy);
  let i = 0;
  for (let category of seedCategories) {
    const instanceCategory = new Category(category.id, category.category, category.categoryIng);
    if (instanceCategory.id === 1) {
      instanceCategory.setSubCategoy(subCategoriesToy[i]);
    }
    categories.push(instanceCategory);
  }
  i++;
  return categories;
}

export function instanceSubCategory(seedSubCategories: Array<ISubCategory>): Array<SubCategoryToy> {
  let subCategories: Array<SubCategory> = [];
  for (let subCategory of seedSubCategories) {
    const instanceSubCategory = new SubCategoryToy(subCategory.id, subCategory.subCategory, subCategory.subCategoryIng, 1);
    subCategories.push(instanceSubCategory);
  }
  return subCategories;
}

export function filterByPrice(minPrice?: number, maxPrice?: number, arrToFilter?: Array<Product>): Array<Product> | [] {
  let min: number, max: number;
  min = !minPrice ? 0 : minPrice;
  max = !maxPrice ? Infinity : maxPrice;
  if (arrToFilter) {
    return arrToFilter.filter((product) => product.price.price < max && product.price.price > min);
  } else {
    return [];
  }
}

export function getFilterByQuota(quotas: QuotaProduct, products: Array<Product>): Array<Product> {
  return products.filter((product) => product.quotas === quotas);
}

export function getFilterDiscount(discount: number, products: Array<Product>): Array<Product> {
  return products.filter((product) => product.price.discount <= discount && product.price.discount > discount - 10);
}
