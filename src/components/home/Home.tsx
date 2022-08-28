import React, { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Product } from "../../models/Product";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ContainerCardHome from "./ContainerCardHome";
import { DB } from "../../services/createdDB";
import { IMAGES_DINO } from "../../services/importImagesDinosaurios";
import BtnSee from "../buttons/BtnSee";

interface HomeProps {
  seeCollection: boolean;
  products: Array<Product>;
}
interface HomeStates {
  products: Array<Product>;
}
const Home: React.FunctionComponent<HomeProps> = ({
  seeCollection,
  products,
}) => {
  const firstProducts = products.slice(0, 10);

  return (
    <>
      {!seeCollection ? (
        <div>
          {firstProducts.length > 0 && (
            <ContainerCardHome products={firstProducts} />
          )}
        </div>
      ) : (
        <div>
          {products.length > 0 && <ContainerCardHome products={products} />}
        </div>
      )}
    </>
  );
};

export default Home;
