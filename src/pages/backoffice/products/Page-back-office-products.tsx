import React from "react";
import ProductList from "../../../components/product-list/Product-list";
import UserList from "../../../components/user-list/User-list";

interface PageBackOfficeProductsProps {}

const PageBackOfficeProducts: React.FunctionComponent<PageBackOfficeProductsProps> = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default PageBackOfficeProducts;
