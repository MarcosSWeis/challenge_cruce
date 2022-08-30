import { type } from "os";
import { ISearchState, IUserState } from "../interfaces/redusers";
import { IAppContextProps } from "../interfaces/app-context-props";
import { Product } from "../models/Product";
import { ILoginUser } from "./App-provider";
import { User } from "../models/User";
import { IUser } from "../interfaces/user";

type AppActions = { type: "search"; payload: ISearchState };

export function searchReducer(state: ISearchState, action: AppActions): ISearchState {
  switch (action.type) {
    case "search":
      return {
        ...state,
        resultSearch: action.payload.resultSearch,
        loading: action.payload.loading,
      };
      break;

    default:
      return state;
  }
}
