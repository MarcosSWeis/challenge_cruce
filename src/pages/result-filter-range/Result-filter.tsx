import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ContainerCardHome from "../../components/home/ContainerCardHome";
import Paginator from "../../components/Paginator";
import { QuotaProduct, Toy } from "../../interfaces/products";
import { Paginate } from "../../models/Paginate";
import { Product } from "../../models/Product";
import { getAllProductsPaginates, getProductsByCategory } from "../../services/db-service";
import { filterByPrice, getFilterByQuota, getFilterDiscount } from "../../services/product-service";

interface ResultFilterProps {}

const ResultFilter: React.FunctionComponent<ResultFilterProps> = () => {
  const [response, setResponse] = useState<Paginate>();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));
  const min = Number(searchParams.get("min"));
  const max = Number(searchParams.get("max"));
  const quota = Number(searchParams.get("quota"));
  const discount = Number(searchParams.get("discount"));
  const toy = searchParams.get("toy");
  let toyType: Toy;
  switch (toy) {
    case Toy.FUNKO.toLowerCase():
      {
        toyType = Toy.FUNKO;
      }
      break;
    case Toy.DINOSAURIO.toLowerCase():
      {
        toyType = Toy.DINOSAURIO;
      }
      break;
  }
  const limit = 6;

  console.log(page, "page");
  console.log(min, "min");
  console.log(max, "max");
  console.log(quota, "quota");
  console.log(discount, "discount");

  function filter() {
    let filteredProducts: Array<Product> = filterByPrice(min, max, getProductsByCategory({ toy: toyType }));

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
