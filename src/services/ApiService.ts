import { queries } from '@testing-library/react';
import axios, { Axios, AxiosResponse } from 'axios'
import path from 'path';
import { GetPublic } from '../interfaces/get-public-interface';
import { IProduct } from '../interfaces/products';



axios.defaults.baseURL = 'https://fakestoreapi.com'

//antes usaba una api pero quise que la data sea lo mas fiel al boceto, no se podia base de datos y de debido a que react interactúa
// con el dom no era posible o viable usar json , ya que no es posible usar módulos como fs , o path de nodejs, entonces opte por una clase db,
export async function getPublic<T, U>(path: string, query: T): Promise<U> {
    try {
        const res = await axios.get(path, {
            params: query
        })
        return res.data
    } catch (err: any) {
        return err
    }
}