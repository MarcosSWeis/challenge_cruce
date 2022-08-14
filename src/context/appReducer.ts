import { ISearchState } from "../interfaces/search";
import { Product } from "../models/Product";


type AppActions =
    | { type: 'search', payload: ISearchState }


export function appReducer(state: ISearchState, action: AppActions): ISearchState {
    switch (action.type) {
        case "search":
            return {
                ...state,
                resultSearch: action.payload.resultSearch,
                loading: action.payload.loading

            }


        default:
            return state;
    }
}