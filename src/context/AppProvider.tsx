import { useReducer } from "react";
import { AppContext } from "./AppContext";
import { appReducer } from "./appReducer";
import { ISearchState } from "../interfaces/search";
import { Product } from "../models/Product";
import { DB } from "../db/DbProducts";
interface AppProviderProps {
    children: JSX.Element | JSX.Element[]
}


const INITIAL_STATE_SEARCH: ISearchState = {
    textToSearch: "",

}

export const AppProvider = ({ children }: AppProviderProps) => {

    const [search, dispatch] = useReducer(appReducer, INITIAL_STATE_SEARCH)
    const setSearch = (toSearch: string) => {
        dispatch({ type: 'search', payload: toSearch })
    }
    return (
        <AppContext.Provider value={{ search, setSearch }}>
            {children}
        </AppContext.Provider>
    )
}