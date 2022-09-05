import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContainerCardHome from "../../components/home/Container-card-home";
import Paginator from "../../components/Paginator";
import { PaginateProduct } from "../../models/Paginate-product";
import { Product } from "../../models/Product";
import { getSubCategoryByText } from "../../services/category-service";

import { getAllProductsPaginates, getProductsByCategory, getProductsBySubCategory } from "../../services/db-service";

interface PageFunkoProps {}

const PageFunko: React.FunctionComponent<PageFunkoProps> = () => {
  const { page } = useParams();
  let currentPage: number = Number(page);
  const [responseFunkos, setResponseFunkos] = useState<PaginateProduct>();

  const limit = 4;

  const getFunkos = () => {
    const subCatFunko = getSubCategoryByText("funko");
    let funkos: Array<Product> | undefined = [];
    if (subCatFunko) {
      funkos = getProductsBySubCategory(subCatFunko);
      if (funkos) {
        setResponseFunkos(getAllProductsPaginates(limit, currentPage, funkos));
      }
    }
  };

  useEffect(() => {
    getFunkos();
  }, [page]);

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
