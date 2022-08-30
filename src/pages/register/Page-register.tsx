import React from "react";
import { RegisterForm } from "../../components/register/RegisterForm";

interface PageRegisterProps {}

const PageRegister: React.FunctionComponent<PageRegisterProps> = () => {
  return (
    <div className="page-register-form">
      <RegisterForm />
    </div>
  );
};

export default PageRegister;
