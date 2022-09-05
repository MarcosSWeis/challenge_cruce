import { Category } from "./Category";
import { SubCategory } from "./Sub-category";

export class Categories {
  categories: Array<Category> = [];
  subCategories: Array<SubCategory> = [];
  constructor(categories: Array<Category>, subCategories: Array<SubCategory>) {
    this.categories = categories;
    this.subCategories = subCategories;
  }

  getAllCategories(): Array<Category> {
    return this.categories;
  }
  getAllSubCategories(): Array<SubCategory> {
    return this.subCategories;
  }

  getLastIdCategories(): number {
    let ids: Array<number> = this.categories.map((category) => category.id);
    let mayor: number = ids[0];
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] > mayor) {
        mayor = ids[i];
      }
    }
    return mayor + 1;
  }

  getLastIdSubCategories(): number {
    let ids: Array<number> = this.subCategories.map((subCategory) => subCategory.id);
    let mayor: number = ids[0];
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] > mayor) {
        mayor = ids[i];
      }
    }
    return mayor + 1;
  }

  getCategoryByText(text: string): Category | undefined {
    return this.categories.find((category) => category.categoryIng.toLocaleLowerCase() === text.toLocaleLowerCase());
  }
  getSubCategoryByText(text: string): SubCategory | undefined {
    return this.subCategories.find(
      (subCategory) =>
        subCategory.subCategoryIng.toLocaleLowerCase() === text.toLocaleLowerCase() ||
        subCategory.subCategory.toLocaleLowerCase() === text.toLocaleLowerCase()
    );
  }
  getSubCategotyByIds(categoriId: number, subCategoriId: number): SubCategory | undefined {
    return this.subCategories.find((subCategory) => subCategory.id === subCategoriId && subCategory.categoryId == categoriId);
  }
  getCategoryById(categoriId: number): Category | undefined {
    return this.categories.find((category) => category.id === categoriId);
  }
}
