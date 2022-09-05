import React from "react";
import { useNavigate } from "react-router-dom";

interface BackOfficeProps {}

const BackOffice: React.FunctionComponent<BackOfficeProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="menu_container">
      <div className="col-md-12 backoffice_card">
        <div>
          <h4 className="fs-2 mb-4">Crear Producto</h4>
          <i className="fa-solid fa-newspaper fa-2xl"></i>
          <button className="fs-2 px-4" onClick={() => navigate("crear-producto")}>
            Ir
          </button>
        </div>
        <div>
          <h4 className="fs-2 mb-4">Usuarios</h4>
          <i className="fa-solid fa-list-check fa-2xl"></i>
          <button className="fs-2 px-4" onClick={() => navigate("usuarios/1")}>
            Ir
          </button>
        </div>
        <div>
          <h4 className="fs-2 mb-4">Productos</h4>
          <i className="fa-solid fa-rectangle-list fa-2xl"></i>
          <button className="fs-2 px-4" onClick={() => navigate("productos/1")}>
            Ir
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackOffice;
