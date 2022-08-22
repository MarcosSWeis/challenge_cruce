import React, { useContext, useEffect, useState } from "react";
import { NavigateProps, useLocation, useNavigate } from "react-router-dom";
import { MyForm } from "../../components/login/LoginForm";
import { AppContext } from "../../context/AppContext";
import { Redirect } from "../../interfaces/appContextProps";
import { LocationProps } from "../../interfaces/location";
import Alert from "../../services/alert-service";
import { redirect } from "../../services/redirect-service";

interface PageLoginProps {

}

const PageLogin: React.FunctionComponent<PageLoginProps> = () => {
    const { userLogged, setUserLogged } = useContext(AppContext)
    const navigate = useNavigate()
    const location = useLocation() as unknown as LocationProps;
    if (location.state) {
        console.log(location.state.from)
    }
    const from = location.state?.from?.pathname || '/'

    const redirectNavigate = (to: string) => {
        navigate(to)
    }
    redirect(userLogged, redirectNavigate, from)
    return (
        <div className="p-5 mx-w-500">
            <h1 className="text-center">Login</h1>

            <MyForm message="Login" setUserLogged={setUserLogged} userLogged={userLogged} />
        </div>
    );




}

export default PageLogin;