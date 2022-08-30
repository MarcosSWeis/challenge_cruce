import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/notfound/Not-found";

import ShoppingCart from "../components/shpping-cart/Shopping-cart";
import PageHome from "../pages/home/Page-home";
import PageLogin from "../pages/login/Page-login";
import PageRegister from "../pages/register/Page-register";
import PageSearch from "../pages/search/Page-search";
import PrivareRouter from "./Private-router";
import ToyRoutes from "./Toy-routes";

interface PublicRoutesProps {}

const PublicRoutes: React.FunctionComponent<PublicRoutesProps> = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<PageHome />} />
        <Route path="search" element={<PageSearch />} />
        <Route path="juguetes/*" element={<ToyRoutes />} />
        <Route path="login" element={<PageLogin />} />
        <Route path="registrarse" element={<PageRegister />} />
        <Route
          path="carrito"
          element={
            <PrivareRouter>
              <ShoppingCart />
            </PrivareRouter>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
