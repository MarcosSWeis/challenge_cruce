import { Console } from "console";
import { CategoryProduct, QuotaProduct } from "../interfaces/products";
import { Category } from "../models/Category";
import { PaginateProduct } from "../models/Paginate-product";
import { PaginatesUser } from "../models/Paginate-user";
import { Product } from "../models/Product";
import { SubCategory } from "../models/Sub-category";
import { User } from "../models/User";

export class dbProducts {
  private products: Array<Product> = [];
  private users: Array<User> = [];

  constructor(products: Array<Product>, users: Array<User>) {
    this.products = products;
    this.users = users;
  }
  //------***   GETTERS   ***------//

  //listar todos los productos
  getAllProducts(): Array<Product> {
    return this.products;
  }

  getAllUsers(): Array<User> {
    return this.users;
  }
  //retorna un objeto para poder paginar
  getAllProductsPaginates(limit: number, page: number, arrToPaginate: Array<Product>): PaginateProduct {
    const offset = limit * page;
    const previousOffset = limit * (page - 1);
    if (page == 1) {
      return new PaginateProduct(arrToPaginate.length, limit, page, arrToPaginate.slice(page - 1, limit));
    } else {
      return new PaginateProduct(arrToPaginate.length, limit, page, arrToPaginate.slice(previousOffset, offset));
    }
  }

  getAllUserPaginates(limit: number, page: number): PaginatesUser {
    const offset = limit * page;
    const previousOffset = limit * (page - 1);
    if (page == 1) {
      return new PaginatesUser(this.users.length, limit, page, this.users.slice(page - 1, limit));
    } else {
      return new PaginatesUser(this.users.length, limit, page, this.users.slice(previousOffset, offset));
    }
  }

  //obtener producto por su id
  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
  //obtener productos por category
  getProductsByCategory(category: Category): Array<Product> | undefined {
    if (category.categoryIng) {
      return this.products.filter((product) => product.category.categoryIng === category.categoryIng);
    }
  }
  //obtener productos por subCategoria
  getProductsBySubCategory(subCategory: SubCategory): Array<Product> | undefined {
    if (subCategory.subCategoryIng) {
      return this.products.filter((product) => product.subCategory.subCategoryIng === subCategory.subCategoryIng);
    }
  }

  //obtener el id mayor
  getLastIdProduct(): number {
    let ids: Array<number> = this.products.map((product) => product.id);
    let mayor: number = ids[0];
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] > mayor) {
        mayor = ids[i];
      }
    }
    return mayor + 1;
  }

  getLastIdUser(): number {
    let ids: Array<number> = this.users.map((user) => user.id);
    let mayor: number = ids[0];
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] > mayor) {
        mayor = ids[i];
      }
    }
    return mayor + 1;
  }
  //filtrar por precio maximo y minimo
  getFilterPrice(minPrice?: number | undefined, maxPrice?: number | undefined): Array<Product> {
    let min: number, max: number;
    min = !minPrice ? 0 : minPrice;
    max = !maxPrice ? Infinity : maxPrice;
    return this.products.filter((product) => product.price.price < max && product.price.price > min);
  }
  //filtrar por descuento
  getFilterDiscount(discount: number): Array<Product> | undefined {
    return this.products.filter((product) => product.price.discount <= discount);
  }
  //buscar producto pro nombre
  getProductoByTitle(search: string): Array<Product> {
    return this.products.filter((product) => product.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) != -1);
  }

  //filtrar producto por cantidad de cuotas
  getFilterProductByQuota(quotas: QuotaProduct): Array<Product> | undefined {
    return this.products.filter((product) => product.quotas === quotas);
  }

  //------***   SETTERS   ***------//

  //añadir un producto
  addProduct(product: Product): void {
    product.setCreateId(this.getLastIdProduct());
    this.products.push(product);
  }
  //borrar un producto
  deleteProduct(id: number): void {
    let index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index, 1);
  }
  /// save method
  //tipo produsct o user

  //------***   Users   ***------//
  getUserByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email.trim() === email);
  }
  addUser(user: User): void {
    this.users.push(user);
  }
  getPositionUser(email: string): number {
    return this.users.findIndex((user) => user.email === email);
  }
  deleteUser(userId: number): void {
    const index = this.users.findIndex((user) => user.id === userId);
    this.users.splice(index, 1);
  }
  updatedUser(index: number, updatedUser: User): void {
    this.users[index] = updatedUser;
  }

  getUserById(userId: number): User | undefined {
    return this.users.find((user) => user.id === userId);
  }
  getTableFilterUser(sortByColum: string, sortDirection: string): Array<User> {
    let short = this.users.sort((a: User, b: User): number => {
      if (sortByColum == "id") {
        if (sortDirection == "DESC") {
          return a.id - b.id;
        }
        if (sortDirection == "ASC") {
          return b.id - a.id;
        }
      }

      if (sortByColum == "name") {
        if (sortDirection == "DESC") {
          return b.name.localeCompare(a.name);
        }
        if (sortDirection == "ASC") {
          return a.name.localeCompare(b.name);
        }
      }

      if (sortByColum == "lastName") {
        if (sortDirection == "DESC") {
          return b.lastName.localeCompare(a.lastName);
        }
        if (sortDirection == "ASC") {
          return a.lastName.localeCompare(b.lastName);
        }
      }

      if (sortByColum == "role") {
        if (sortDirection == "DESC") {
          return a.role - b.role;
        }
        if (sortDirection == "ASC") {
          return b.role + -a.role;
        }
      }

      if (sortByColum == "email") {
        if (sortDirection == "DESC") {
          return b.email.localeCompare(a.email);
        }
        if (sortDirection == "ASC") {
          return a.email.localeCompare(b.email);
        }
      }

      return 0;
    });

    return short;
  }

  getTableFilterProducts(sortByColum: string, sortDirection: string): Array<Product> {
    let short = this.products.sort((a: Product, b: Product): number => {
      //a.[sortByColum] si pudiera hacer esto reduciria lineas de codigo
      if (sortByColum == "id") {
        if (sortDirection == "DESC") {
          return a.id - b.id;
        }
        if (sortDirection == "ASC") {
          return b.id - a.id;
        }
      }

      if (sortByColum == "title") {
        if (sortDirection == "DESC") {
          return b.title.localeCompare(a.title);
        }
        if (sortDirection == "ASC") {
          return a.title.localeCompare(b.title);
        }
      }

      if (sortByColum == "price") {
        if (sortDirection == "DESC") {
          return a.price.price - b.price.price;
        }
        if (sortDirection == "ASC") {
          return b.price.price + -a.price.price;
        }
      }

      if (sortByColum == "categoryId") {
        if (sortDirection == "DESC") {
          return a.category.id - b.category.id;
        }
        if (sortDirection == "ASC") {
          return b.category.id + -a.category.id;
        }
      }

      if (sortByColum == "category") {
        if (sortDirection == "DESC") {
          return b.category.category.localeCompare(a.category.category);
        }
        if (sortDirection == "ASC") {
          return a.category.category.localeCompare(b.category.category);
        }
      }
      if (sortByColum == "subCategoryId") {
        if (sortDirection == "DESC") {
          return a.subCategory.id - b.subCategory.id;
        }
        if (sortDirection == "ASC") {
          return b.subCategory.id + -a.subCategory.id;
        }
      }

      if (sortByColum == "subCategory") {
        if (sortDirection == "DESC") {
          return b.subCategory.subCategory.localeCompare(a.subCategory.subCategory);
        }
        if (sortDirection == "ASC") {
          return a.subCategory.subCategory.localeCompare(b.subCategory.subCategory);
        }
      }

      if (sortByColum == "quotas") {
        if (sortDirection == "DESC") {
          return a.quotas - b.quotas;
        }
        if (sortDirection == "ASC") {
          return b.quotas + -a.quotas;
        }
      }

      return 0;
    });

    return short;
  }
}
