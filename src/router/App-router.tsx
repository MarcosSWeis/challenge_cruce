import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import AlertTouch from "../components/Alert-touch";
import Home from "../components/home/Home";
import NavBar from "../components/nav-bar/Nav-bar";
import Search from "../components/Search";
import PageHome from "../pages/home/Page-home";
import PublicRoutes from "../routes/Public-routes";
import AdminRouter from "./router-protector/Admin-router";
import FormCreateProduct from "../components/fom-create-product/From-create-product";
import BackOffice from "../pages/backoffice/Back-office";
import PrivateRouter from "./router-protector/Private-router";
import ShoppingCart from "../components/shpping-cart/Shopping-cart";
import BackOfficeRoutes from "../routes/Back-office-routes";
import HtmlSendEmail from "../components/html-email-send/Html-send-email";

interface IAppRouterProps {}

const AppRouter: React.FunctionComponent<IAppRouterProps> = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <AlertTouch />
        <div className="disable-serarch-bottom">
          <Search />
        </div>
      </div>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route
          path="/carrito"
          element={
            <PrivateRouter>
              <ShoppingCart />
            </PrivateRouter>
          }
        />
        <Route
          path="/backoffice/*"
          element={
            <AdminRouter>
              <BackOfficeRoutes />
            </AdminRouter>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
