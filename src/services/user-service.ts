import {
  countShoppingCart,
  TotalsPay,
} from "../components/shppingCart/ShoppingCart";
import { IUser, Role } from "../interfaces/user";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { DB } from "./createdDB";

export function instanceUser(seedUsers: Array<IUser>): Array<User> {
  let users: Array<User> = [];
  for (let user of seedUsers) {
    const instanceUser = new User(
      user.id,
      user.name,
      user.lastName,
      user.email,
      user.password,
      user.shoppingCart,
      user.role
    );
    users.push(instanceUser);
  }
  return users;
}

export function cartItemSeparator(
  userCart: Array<Product>,
  filterCart: Array<countShoppingCart>
): void {
  userCart.forEach(
    ({
      id,
      price,
      priceDiscount,
      title,
      description,
      image,
      category,
      quotas,
    }) => {
      let discount = price.discount;
      let productPrice = discount === 0 ? price.price : priceDiscount;
      let indexExistingItem = filterCart.findIndex(
        ({ idProduct }) => idProduct == id
      );
      if (indexExistingItem === -1) {
        let objCountShoppingCart: countShoppingCart = {
          count: 1,
          idProduct: id,
          totalPriceWithDiscount: productPrice,
          totalPrice: price.price,
          description: description,
          title: title,
          discount: discount,
          image: image,
          category: category,
          quotas: quotas,
          priceXUd: price.price,
        };
        filterCart.push(objCountShoppingCart);
      } else {
        filterCart[indexExistingItem].count =
          filterCart[indexExistingItem].count + 1;
        filterCart[indexExistingItem].idProduct = id;
        filterCart[indexExistingItem].totalPriceWithDiscount = Number(
          (
            filterCart[indexExistingItem].totalPriceWithDiscount + productPrice
          ).toFixed(2)
        );
        filterCart[indexExistingItem].totalPrice =
          filterCart[indexExistingItem].totalPrice + price.price;
        filterCart[indexExistingItem].discount = discount;
        filterCart[indexExistingItem].title = title;
        filterCart[indexExistingItem].image = image;
        filterCart[indexExistingItem].category = category;
        filterCart[indexExistingItem].quotas = quotas;
        filterCart[indexExistingItem].description = description;
        filterCart[indexExistingItem].priceXUd = price.price;
      }
    }
  );
}

export function getTotalPriceCart(
  shoppingCart: Array<countShoppingCart>
): TotalsPay {
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
