import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Filter from "../../components/filters/Filter";
import ContainerCardHome from "../../components/home/Container-card-home";
import Paginator from "../../components/Paginator";
import Range from "../../components/Range";
import { FilterState } from "../../interfaces/filter";
import { Toy } from "../../interfaces/products";
import { Paginate } from "../../models/Paginate";
import { Product } from "../../models/Product";
import { getAllProductsPaginates, getProductsByCategory } from "../../services/db-service";
import { filterByPrice, getFilterByQuota, getFilterDiscount } from "../../services/product-service";

interface DinosaurProps {}
const INITIAL_STATE_FILTER = { value: 0, name: "" };
const PageDinosaur: React.FunctionComponent<DinosaurProps> = () => {
  const { page } = useParams();
  const limit = 3;
  let currentPage: number = Number(page);
  const [response, setResponse] = useState<Paginate>();

  const getDinos = () => {
    let dinos: Array<Product> | undefined = getProductsByCategory({
      toy: Toy.DINOSAURIO,
    });
    dinos && setResponse(getAllProductsPaginates(limit, currentPage, dinos));
  };
  useEffect(() => {
    getDinos();
  }, [page]);
  return (
    <>
      {response && (
        <div>
          <ContainerCardHome products={response.products} key={"pageDinos"} />
          <Paginator currentPage={currentPage} pageCount={response?.total_pages} justify={""} />
        </div>
      )}
    </>
  );
};

export default PageDinosaur;
