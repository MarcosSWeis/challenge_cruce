import { countShoppingCart, TotalsPay } from "../components/shpping-cart/Shopping-cart";
import { IUser, Role } from "../interfaces/user";
import { PaginatesUser } from "../models/Paginate-user";

import { Product } from "../models/Product";
import { User } from "../models/User";
import { DB } from "./created-db";

export function instanceUser(seedUsers: Array<IUser>): Array<User> {
  let users: Array<User> = [];
  for (let user of seedUsers) {
    const instanceUser = new User(user.id, user.name, user.lastName, user.email, user.password, user.shoppingCart, user.role);
    users.push(instanceUser);
  }
  return users;
}

export function instanceUserWithHashing(seedUsers: Array<IUser>): Array<User> {
  let users: Array<User> = [];
  for (let user of seedUsers) {
    const instanceUser = new User(user.id, user.name, user.lastName, user.email, user.password, user.shoppingCart, user.role);
    instanceUser.setEncryptPassword(instanceUser.password);
    users.push(instanceUser);
  }
  return users;
}

export function cartItemSeparator(userCart: Array<Product>, filterCart: Array<countShoppingCart>): void {
  //recorro el carrito del usuario tantas veces como productos tenga
  userCart.forEach(({ id, price, priceDiscount, title, description, images, category, subCategory, quotas }, index) => {
    let discount = price.discount;
    let productPrice = discount === 0 ? price.price : priceDiscount;
    //por cada iteracion del forEach del carrito, recalizo un agrupamiento de productos por id y los actulizo en el indice correspondiente
    //agregando propiedades y sumando sus precios
    //si el producto no estarepito entra al if y se crean esas propiedades, si ese producto ya esta en el array
    let indexExistingItem = filterCart.findIndex(({ idProduct }) => idProduct == id);
    console.log(indexExistingItem, "indexExistingItem");
    console.log(index, "index");
    //la primera vez le mando el objeto objCountShoppingCart a el array filterCart, depues ya van todas al else
    if (indexExistingItem === -1) {
      //se crea un item para carrito
      let objCountShoppingCart: countShoppingCart = {
        count: 1,
        idProduct: id,
        totalPriceWithDiscount: productPrice,
        totalPrice: price.price,
        description: description,
        title: title,
        discount: discount,
        images: images,
        category: category,
        subCategory: subCategory,
        quotas: quotas,
        priceXUd: productPrice,
      };
      filterCart.push(objCountShoppingCart);
    } else {
      //si exite ese item en el array
      //se actualzia cada item del carrito
      filterCart[indexExistingItem].count = filterCart[indexExistingItem].count + 1;
      filterCart[indexExistingItem].idProduct = id;
      filterCart[indexExistingItem].totalPriceWithDiscount = Number((filterCart[indexExistingItem].totalPriceWithDiscount + productPrice).toFixed(2));
      filterCart[indexExistingItem].totalPrice = filterCart[indexExistingItem].totalPrice + price.price;
      filterCart[indexExistingItem].discount = discount;
      filterCart[indexExistingItem].title = title;
      filterCart[indexExistingItem].images = images;
      filterCart[indexExistingItem].category = category;
      filterCart[indexExistingItem].quotas = quotas;
      filterCart[indexExistingItem].description = description;
      filterCart[indexExistingItem].priceXUd = productPrice;
    }
  });
}

export function getTotalPriceCart(shoppingCart: Array<countShoppingCart>): TotalsPay {
  let total: number = 0,
    discount: number = 0;
  shoppingCart.forEach(({ totalPriceWithDiscount, totalPrice }) => {
    total = total + totalPriceWithDiscount;
    discount = discount + (totalPrice - totalPriceWithDiscount);
  });
  return {
    total: total,
    discount: discount,
  };
}

export function getLastIdUsers(): number {
  return DB.getLastIdUser();
}
export function addUserInDb(user: User): void {
  DB.addUser(user);
}

export function getUserByEmail(email: string): User | undefined {
  return DB.getUserByEmail(email);
}

export function getAllUsers(): Array<User> {
  return DB.getAllUsers();
}

export function getAllUserPaginates(limit: number, page: number): PaginatesUser {
  return DB.getAllUserPaginates(limit, page);
}

export function paginateUsers(limit: number, page: number, arrToPaginate: Array<User>): PaginatesUser {
  const offset = limit * page;
  const previousOffset = limit * (page - 1);
  if (page == 1) {
    return new PaginatesUser(arrToPaginate.length, limit, page, arrToPaginate.slice(page - 1, limit));
  } else {
    return new PaginatesUser(arrToPaginate.length, limit, page, arrToPaginate.slice(previousOffset, offset));
  }
}

export function getTableFilterUser(sortByColum: string, sortDirection: string): Array<User> {
  return DB.getTableFilterUser(sortByColum, sortDirection);
}

export function getUserById(userId: number): User | undefined {
  return DB.getUserById(userId);
}

export function deleteUser(userId: number): void {
  DB.deleteUser(userId);
}
