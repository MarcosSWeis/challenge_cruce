import React, { useContext, useEffect } from "react";
import ContainerCardHome from "../../components/home/Container-card-home";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AppContext } from "../../context/App-context";
import { useLocation } from "react-router-dom";
interface PageSearchProps {}

const PageSearch: React.FunctionComponent<PageSearchProps> = () => {
  const { searching, setSearching } = useContext(AppContext);
  const { resultSearch, loading } = searching;
  const { search } = useLocation();

  useEffect(() => {
    setSearching(search.substring(1));
  }, []);

  return (
    <div className="">
      {loading && <Skeleton width={"100%"} />}

      {resultSearch != undefined && !loading ? (
        resultSearch?.length == 0 ? (
          <h2>No hubo resultados para la busqueda</h2>
        ) : (
          <ContainerCardHome products={resultSearch} />
        )
      ) : null}
    </div>
  );
};

export default PageSearch;
