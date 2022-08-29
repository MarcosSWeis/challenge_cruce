import React from "react";
import { Link, useLocation } from "react-router-dom";

interface PaginatorProps {
  pageCount: number;
  currentPage: number;
  justify: string;
}

const Paginator: React.FunctionComponent<PaginatorProps> = ({
  pageCount,
  currentPage,
  justify = "center",
}) => {
  const location = useLocation();
  let pathName: string;
  let pathComplete: string;
  let page: number = Number(currentPage);
  //si no viene con un string vacio quiere decir que trae un query
  if (location.search !== "") {
    let pageIndex = location.search.length - 1;
    page = Number(location.search.slice(-1, pageIndex + 1));
    console.log(page);
    pathComplete = location.pathname + location.search;
    pathName = pathComplete.slice(0, pathComplete.length - 1);
    console.log(pathName, "pathName");
  } else {
    const loc = location.pathname.lastIndexOf("/");
    console.log(loc, "loc");
    pathName = location.pathname.slice(0, loc + 1);
    console.log(pathName, "pathName");
  }

  const renderPages = () => {
    let li = [];
    li.push(
      <li
        key={"page/prev"}
        className={page > 1 ? "page-item" : "page-item disabled"}
      >
        <Link className="page-link" to={`${pathName}${page - 1}`}>
          Ant.
        </Link>
      </li>
    );
    for (let i = 0; i < pageCount; i++) {
      li.push(
        <li
          key={`page${i + 1}`}
          className={i + 1 === page ? "page-item  pageActive" : "page-item"}
        >
          <Link className="page-link" to={`${pathName}${i + 1}`}>
            {i + 1}
          </Link>
        </li>
      );
    }

    li.push(
      <li
        key={"page/next"}
        className={page < pageCount ? "page-item" : "page-item disabled"}
      >
        <Link className="page-link" to={`${pathName}${page + 1}`}>
          Sig.
        </Link>
      </li>
    );

    return li;
  };

  return (
    <>
      {pageCount > 0 && (
        <div
          className={`overflow-hidden  d-flex justify-content-${justify}`}
          style={{ width: "100%", height: "fit-content" }}
        >
          <nav className="mt-5 p-0 m-auto">
            <ul
              className="pagination pagination-lg d-flex flex-wrap m-0 p-0 "
              id="paginator"
            >
              {renderPages()}
            </ul>
          </nav>
        </div>
      )}
      ;
    </>
  );
};

export default Paginator;
