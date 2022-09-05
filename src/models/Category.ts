import { ICategory } from "../interfaces/categories";
import { SubCategory } from "./Sub-category";

export class Category implements ICategory {
  category: string;
  id: number;
  categoryIng: string;
  subCategories: Array<SubCategory> = []; //con esto se podria mejorar  aun mas el codigo , no esta implementado
  constructor(id: number, category: string, categoryIng: string) {
    this.id = id;
    this.category = category;
    this.categoryIng = categoryIng;
  }

  setSubCategoy(subCategory: SubCategory) {
    this.subCategories.push(subCategory);
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
}
