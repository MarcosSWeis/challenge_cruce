import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Filter from "../../components/filters/Filter";
import FilterByQuota from "../../components/filters/Filter-by-quota";
import FilterBySale from "../../components/filters/Filter-by-sale";
import ContainerCardHome from "../../components/home/Container-card-home";
import Paginator from "../../components/Paginator";
import Range from "../../components/Range";
import { FilterState } from "../../interfaces/filter";
import { CategoryProduct, QuotaProduct, Toy } from "../../interfaces/products";
import { Paginate } from "../../models/Paginate";
import { Product } from "../../models/Product";
import { getAllProductsPaginates, getProductsByCategory } from "../../services/db-service";
import { filterByPrice, getFilterByQuota, getFilterDiscount } from "../../services/product-service";

interface PageFunkoProps {}

const PageFunko: React.FunctionComponent<PageFunkoProps> = () => {
  const { page } = useParams();
  let currentPage: number = Number(page);
  const navigate = useNavigate();

  const [funkos, setFunkos] = useState<Array<Product> | undefined>(undefined);

  const [responseFunkos, setResponseFunkos] = useState<Paginate>();

  const [sendFilterPrice, setSendFilterPrice] = useState<boolean>(false);

  const limit = 4;

  const getFunkos = () => {
    let funkos: Array<Product> | undefined = getProductsByCategory({
      toy: Toy.FUNKO,
    });
    if (funkos) {
      setFunkos(funkos);
      setResponseFunkos(getAllProductsPaginates(limit, currentPage, funkos));
    }
  };

  useEffect(() => {
    getFunkos();
  }, [page, sendFilterPrice]);

  return (
    <>
      {responseFunkos && responseFunkos.products.length > 0 && (
        <div>
          <ContainerCardHome products={responseFunkos.products} key={"pageFunko"} />
          <Paginator currentPage={currentPage} pageCount={responseFunkos?.total_pages} justify={""} />
        </div>
      )}
    </>
  );
};

export default PageFunko;
