import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import AlertTouch from "../components/AlertTouch";
import Home from "../components/home/Home";
import NavBar from "../components/nav-bar/NavBar";
import Search from "../components/Search";
import PageHome from "../pages/home/Page-home";
import PublicRoutes from "../routes/Public-routes";

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
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
