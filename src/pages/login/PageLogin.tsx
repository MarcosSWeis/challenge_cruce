import React, { useContext, useEffect, useState } from "react";
import { MyForm } from "../../components/login/LoginForm";
import { AppContext } from "../../context/AppContext";

interface PageLoginProps {

}

const PageLogin: React.FunctionComponent<PageLoginProps> = () => {
    const { userLogged, setUserLogged } = useContext(AppContext)

    return (
        <div className="p-5 mx-w-500">
            <h1 className="text-center">Login</h1>

            <MyForm message="Login" setUserLogged={setUserLogged} userLogged={userLogged} />
        </div>
    );




}

export default PageLogin;