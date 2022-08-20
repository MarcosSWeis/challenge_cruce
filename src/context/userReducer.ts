import { IUserState } from "../interfaces/redusers";
import { ILoginUser } from "./AppProvider";

type AppActions =
    { type: 'user', payload: IUserState }



export function userReducer(state: IUserState, action: AppActions): IUserState {
    switch (action.type) {

        case "user":
            return {
                ...state,
                userLogged: action.payload.userLogged,
                loading: action.payload.loading,
                errors: action.payload.errors
            }
        default:
            return state;
    }
}