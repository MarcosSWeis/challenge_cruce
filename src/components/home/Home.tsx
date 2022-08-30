import React, { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../../context/App-context";
import { Product } from "../../models/Product";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ContainerCardHome from "./Container-card-home";
import { DB } from "../../services/created-db";
import { IMAGES_DINO } from "../../services/import-images-dinosaurios";
import BtnSee from "../buttons/Btn-see";

interface HomeProps {
  seeCollection: boolean;
  products: Array<Product>;
}
interface HomeStates {
  products: Array<Product>;
}
const Home: React.FunctionComponent<HomeProps> = ({ seeCollection, products }) => {
  const firstProducts = products.slice(0, 10);

  return (
    <>
      {!seeCollection ? (
        <div className="cnt-wrapper">{firstProducts.length > 0 && <ContainerCardHome products={firstProducts} />}</div>
      ) : (
        <div className="cnt-wrapper">{products.length > 0 && <ContainerCardHome products={products} />}</div>
      )}
    </>
  );
};

export default Home;
