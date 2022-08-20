import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyForm } from "../../components/login/LoginForm";
import { AppContext } from "../../context/AppContext";
import { Redirect } from "../../interfaces/appContextProps";

interface PageLoginProps {

}

const PageLogin: React.FunctionComponent<PageLoginProps> = () => {
    const { userLogged, setUserLogged } = useContext(AppContext)
    const navigate = useNavigate()
    const redirect: Redirect = (to: string) => {
        navigate(to)
    }
    return (
        <div className="p-5 mx-w-500">
            <h1 className="text-center">Login</h1>

            <MyForm message="Login" setUserLogged={setUserLogged} userLogged={userLogged} redirect={redirect} />
        </div>
    );




}

export default PageLogin;