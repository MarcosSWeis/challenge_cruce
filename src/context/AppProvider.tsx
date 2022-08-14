import { useReducer } from "react";
import { AppContext } from "./AppContext";
import { appReducer } from "./appReducer";
import { ISearchState } from "../interfaces/search";
import { Product } from "../models/Product";
import { DB } from "../services/createdDB";

interface AppProviderProps {
    children: JSX.Element | JSX.Element[]
}


const INITIAL_STATE_SEARCH: ISearchState = {
    loading: false,
    resultSearch: []
}

export const AppProvider = ({ children }: AppProviderProps) => {

    const [searching, dispatch] = useReducer(appReducer, INITIAL_STATE_SEARCH)
    const setSearching = (toSearch: string) => {
        console.log(DB.getProductoByTitle(toSearch))
        console.log(DB, 2323)
        dispatch({ type: 'search', payload: { loading: true, resultSearch: [] } })
        console.log(toSearch.length > 0, 666)

        setTimeout(() => {//simulo la asincronia
            dispatch({ type: 'search', payload: { loading: false, resultSearch: DB.getProductoByTitle(toSearch) } })
        }, 1000 * 3);//3seg



    }



    return (
        <AppContext.Provider value={{ searching, setSearching }}>
            {children}
        </AppContext.Provider>
    )
}