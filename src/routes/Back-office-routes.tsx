import React from "react";
import { Route, Routes } from "react-router-dom";
import FormProductCreate from "../components/fom-create-product/From-create-product";
import UserList from "../components/user-list/User-list";
import BackOffice from "../pages/backoffice/Back-office";
import PageBackOfficeProducts from "../pages/backoffice/products/Page-back-office-products";
import PageBackOfficeUsers from "../pages/backoffice/users/Page-back-office-users";

interface BackOfficeRoutesProps {}

const BackOfficeRoutes: React.FunctionComponent<BackOfficeRoutesProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<BackOffice />} />
      <Route path="crear-producto" element={<FormProductCreate />} />
      <Route path="usuarios/:page" element={<PageBackOfficeUsers />} />
      <Route path="productos/:page" element={<PageBackOfficeProducts />} />
    </Routes>
  );
};

export default BackOfficeRoutes;
