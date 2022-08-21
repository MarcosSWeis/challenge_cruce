import { useNavigate } from "react-router-dom"
import { CallbackRedirect, Redirect } from "../interfaces/appContextProps"
import { IUserState } from "../interfaces/redusers"
import { User } from "../models/User"
import Alert from "./alert-service"

export const redirect: Redirect = (userLogged: IUserState, navigate: CallbackRedirect, to: string) => {

    const user = userLogged.userLogged
    if (user) {
        Alert.success({ title: 'Login', message: `Bienvenido ${user.name} ${user.lastName}` });
        navigate(to)
    }
    if (userLogged.errors.email !== "" && userLogged.errors.password !== "") {
        Alert.error({ title: 'Error', message: `${userLogged.errors.email}` })
    }
}