import axios, { AxiosResponse } from "axios";

//axios.defaults.baseURL = "https://fakestoreapi.com";

export async function getPublic<T, U>(path: string, query: T): Promise<U> {
  try {
    const res = await axios.get(path, {
      params: query,
    });
    return res.data;
  } catch (err: any) {
    return err;
  }
}

export async function postPublic<T, U>(path: string, data: T, config?: U): Promise<AxiosResponse<any, any>> {
  console.log(data);
  try {
    const res = await axios.post(path, data, config);
    return res.data;
  } catch (err: any) {
    return err;
  }
}
