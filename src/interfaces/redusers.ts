import { Product } from "../models/Product";
import { User } from "../models/User";
import { IUser } from "./user";

export interface ISearchState {
    loading: boolean,
    resultSearch: Array<Product> | undefined
}

export interface IUserState {
    loading: boolean,
    userLogged: User | undefined,
    errors: {
        email: string,
        password: string
    }
}