import { User } from "../models/User";
import { ISearchState, IUserState } from "./redusers";
import { IUser } from "./user";

export interface IAppContextProps {
    searching: ISearchState;
    setSearching: (toSearch: string) => void;
    userLogged: IUserState
    setUserLogged: (email: string, password: string) => void
    logout: () => void
    updatedUserLogged: UpdatedUserLogged
}
export type Redirect = (user: IUserState, CallbackRedirect: CallbackRedirect, to: string) => void | undefined
export type CallbackRedirect = (to: string) => void
export type UpdatedUserLogged = (updatedUser: User) => void 