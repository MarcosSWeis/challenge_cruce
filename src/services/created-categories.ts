import { mockCategories } from "../mocks/categories/mock-categories";
import { mockSubCategoriesToy } from "../mocks/categories/mock-sub-categories-toy";
import { Categories } from "../models/Categories";
import { instanceCategory, instanceSubCategory } from "./product-service";

export let CCategories: Categories;
export function createCategories(): void {
  CCategories = new Categories(instanceCategory(mockCategories), instanceSubCategory(mockSubCategoriesToy));
}
