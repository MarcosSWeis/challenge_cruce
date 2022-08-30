import React, { useContext } from "react";

import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/App-context";

type PrivareRouterProps = {
  children: React.ReactElement<any, any> | null;
};

const PrivareRouter: React.FC<PrivareRouterProps> = ({ children }) => {
  const location = useLocation();
  const { userLogged } = useContext(AppContext);
  const user = userLogged.userLogged;
  return user ? children : <Navigate to={"/login"} state={{ from: location }} />;
};

export default PrivareRouter;
