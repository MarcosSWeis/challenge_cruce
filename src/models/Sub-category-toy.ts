import { SubCategory } from "./Sub-category";

export class SubCategoryToy extends SubCategory {
  constructor(id: number, subCategory: string, subCategoryIng: string, categoryId: number) {
    super(id, subCategory, subCategoryIng, categoryId);
  }
}
