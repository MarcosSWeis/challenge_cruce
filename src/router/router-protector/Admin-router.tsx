import React, { ReactElement, useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/App-context";
import Alert from "../../services/alert-service";

type PrivareRouterProps = {
  children: any;
};

const AdminRouter: React.FC<PrivareRouterProps> = ({ children }) => {
  const { userLogged } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const user = userLogged.userLogged;
  if (user && user.role === 1) {
    return children;
  } else {
    navigate("/");
    Alert.error({ title: "Error de permisos", message: "Debe ser administrador para poder ingresar" });
  }
};

export default AdminRouter;
