import axios, { Axios, AxiosResponse } from "axios";
import { UpdatedUserLogged } from "../interfaces/appContextProps";
import { CategoryProduct, Toy } from "../interfaces/products";
import { Paginate } from "../models/Paginate";
import { Product } from "../models/Product";
import { User } from "../models/User";
import Alert from "./alert-service";
import { DB, saveDB } from "./created-db";

axios.defaults.baseURL = "https://fakestoreapi.com";

//antes usaba una api pero quise que la data sea lo mas fiel al boceto, no se podia base de datos y de debido a que react interactúa
// con el dom no era posible o viable usar json , ya que no es posible usar módulos como fs , o path de nodejs, entonces opte por una clase db,
// export async function getPublic<T, U>(path: string, query: T): Promise<U> {
//     try {
//         const res = await axios.get(path, {
//             params: query
//         })
//         return res.data
//     } catch (err: any) {
//         return err
//     }
// }

export const addToCart = (id: number, user: User, updatedUserLogged: UpdatedUserLogged) => {
  const product = DB.getProductById(id);
  if (product) {
    user.addToCart(product);
    //save in the db
    const index: number = DB.getPositionUser(user.email);
    index !== -1 ? DB.saveUser(index, user) : Alert.error({ title: "Error", message: "Debe registrarse" });
    saveDB();
    //once saved update the global state
    updatedUserLogged(user);
  }
};

export const getAllProducts = (): Array<Product> => {
  return DB.getAllProducts();
};

export const getProductsByCategory = (category: CategoryProduct): Array<Product> | undefined => {
  return DB.getProductsByCategory(category);
};

export const getProductoByTitle = (toSearch: string): Array<Product> => {
  return DB.getProductoByTitle(toSearch);
};

export const getUserByEmail = (email: string): User | undefined => {
  return DB.getUserByEmail(email);
};

export const getAllProductsPaginates = (limit: number, page: number, arrToPaginate: Product[]): Paginate => {
  return DB.getAllProductsPaginates(limit, page, arrToPaginate);
};
