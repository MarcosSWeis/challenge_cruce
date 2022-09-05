import React from "react";
import { Product } from "../../models/Product";
import ProductCard from "./Product-card";

interface IContainerCardHomeProps {
  products: Array<Product>;
}
const ContainerCardHome: React.FunctionComponent<IContainerCardHomeProps> = ({ products }) => {
  console.log(products);
  return (
    <div className="wrapper">
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ContainerCardHome;
