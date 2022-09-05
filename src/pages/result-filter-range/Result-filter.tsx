import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ContainerCardHome from "../../components/home/Container-card-home";
import Paginator from "../../components/Paginator";
import { PaginateProduct } from "../../models/Paginate-product";
import { Product } from "../../models/Product";
import { getSubCategoryByText } from "../../services/category-service";
import { getAllProductsPaginates, getProductsByCategory, getProductsBySubCategory } from "../../services/db-service";
import { filterByPrice, getFilterByQuota, getFilterDiscount } from "../../services/product-service";

interface ResultFilterProps {}

const ResultFilter: React.FunctionComponent<ResultFilterProps> = () => {
  const [response, setResponse] = useState<PaginateProduct>();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));
  const min = Number(searchParams.get("min"));
  const max = Number(searchParams.get("max"));
  const quota = Number(searchParams.get("quota"));
  const discount = Number(searchParams.get("discount"));
  const toy = searchParams.get("toy");
  const limit = 6;

  function filter() {
    let filteredProducts: Array<Product> = [];
    if (toy) {
      const subCat = getSubCategoryByText(toy);
      if (subCat) {
        filteredProducts = filterByPrice(min, max, getProductsBySubCategory(subCat));
      }
    }

    if (quota !== 0) {
      filteredProducts = getFilterByQuota(quota, filteredProducts);
    }

    if (discount !== 0) {
      filteredProducts = getFilterDiscount(discount, filteredProducts);
    }
    setResponse(getAllProductsPaginates(limit, page, filteredProducts));
  }
  useEffect(() => {
    filter();
  }, [page, min, max, quota, discount, toy]);
  return (
    <>
      {response && response.products.length > 0 ? (
        <div>
          <ContainerCardHome products={response.products} key={"pageFunko"} />
          <Paginator currentPage={page} pageCount={response?.total_pages} justify={""} />
        </div>
      ) : (
        <h2>No hay productos para esos filtros</h2>
      )}
    </>
  );
};

export default ResultFilter;
