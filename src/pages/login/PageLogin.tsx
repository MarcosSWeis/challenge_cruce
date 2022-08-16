import React from "react";
import { MyForm } from "../../components/login/LoginForm";

interface PageLoginProps {

}

const PageLogin: React.FunctionComponent<PageLoginProps> = () => {
    return (
        <div className="p-5 mx-w-500">
            <h1 className="text-center">Login</h1>

            <MyForm message="Login" />
        </div>
    );




}

export default PageLogin;