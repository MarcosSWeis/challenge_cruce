import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContainerCardHome from "../../components/home/Container-card-home";
import Paginator from "../../components/Paginator";
import { PaginateProduct } from "../../models/Paginate-product";
import { Product } from "../../models/Product";
import { getSubCategoryByText } from "../../services/category-service";
import { getAllProductsPaginates, getProductsByCategory, getProductsBySubCategory } from "../../services/db-service";

interface DinosaurProps {}

const PageDinosaur: React.FunctionComponent<DinosaurProps> = () => {
  const { page } = useParams();
  const limit = 3;
  let currentPage: number = Number(page);
  const [response, setResponse] = useState<PaginateProduct>();

  const getDinos = () => {
    const SubCatDino = getSubCategoryByText("dinosaur");
    if (SubCatDino) {
      let dinos: Array<Product> | undefined = getProductsBySubCategory(SubCatDino);
      dinos && setResponse(getAllProductsPaginates(limit, currentPage, dinos));
    }
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
