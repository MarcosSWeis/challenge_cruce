import { User } from "../models/User";
import { ISearchState, IUserState } from "./redusers";
import { IUser } from "./user";

export interface IAppContextProps {
    searching: ISearchState;
    setSearching: (toSearch: string) => void;
    userLogged: IUserState
    setUserLogged: (email: string, password: string) => void
}