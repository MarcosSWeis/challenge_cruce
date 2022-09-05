import { Category } from "../models/Category";
import { SubCategory } from "../models/Sub-category";
import { SubCategoryToy } from "../models/Sub-category-toy";
import { CCategories } from "./created-categories";

export function getSubCategoryByText(text: string): SubCategoryToy | undefined {
  return CCategories.getSubCategoryByText(text);
}

export function getAllCategories(): Array<Category> {
  return CCategories.getAllCategories();
}

export function getAllSubCategories(): Array<SubCategoryToy> {
  return CCategories.getAllSubCategories();
}

export function getSubCategotyByIds(categoriId: number, subCategoriId: number): SubCategory | undefined {
  return CCategories.getSubCategotyByIds(categoriId, subCategoriId);
}
export function getCategoryById(categoriId: number): Category | undefined {
  return CCategories.getCategoryById(categoriId);
}
