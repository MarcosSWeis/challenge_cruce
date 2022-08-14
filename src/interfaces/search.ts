import { Product } from "../models/Product";

export interface ISearchState {
    loading: boolean,
    resultSearch: Array<Product> | undefined
}