export interface ICategory {
  id: number;
  category: string;
  categoryIng: string;
}

export interface ISubCategory {
  id: number;
  subCategory: string;
  subCategoryIng: string;
  categoryId: number;
}

export enum Toy {
  Funko = 0,
  Dinosaurio,
}
export enum School {
  Jansport = 0,
}
