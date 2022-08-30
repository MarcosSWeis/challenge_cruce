import { createContext } from "react";
import { IAppContextProps } from "../interfaces/app-context-props";
import { ISearchState } from "../interfaces/redusers";
import { ILoginUser } from "./App-provider";

export const AppContext = createContext<IAppContextProps>({} as IAppContextProps);
