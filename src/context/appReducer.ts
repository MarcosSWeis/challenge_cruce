import { ISearchState } from "../interfaces/search";
import { Product } from "../models/Product";


type AppActions =
    | { type: 'search', payload: string }


export function appReducer(state: ISearchState, action: AppActions): ISearchState {
    switch (action.type) {
        case "search":
            return {
                ...state,
                textToSearch: action.payload

            }


        default:
            return state;
    }
}