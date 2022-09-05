import { ISubCategory } from "../interfaces/categories";

export class SubCategory implements ISubCategory {
  id: number;
  subCategory: string;
  subCategoryIng: string;
  categoryId: number;
  constructor(id: number, subCategory: string, subCategoryIng: string, categoryId: number) {
    this.id = id;
    this.subCategory = subCategory;
    this.subCategoryIng = subCategoryIng;
    this.categoryId = categoryId;
  }
}
