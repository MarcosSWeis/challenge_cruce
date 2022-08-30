import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import PageDinosaur from "../pages/dino/Page-dinosaur";
import PageFunko from "../pages/funko/Page-funko";
import PageFilter from "../pages/page-filter/Page-filter";
import ResultFilter from "../pages/result-filter-range/Result-filter";
import PageToy from "../pages/Toy/Page-toy";

interface ToyRoutesProps {}

const ToyRoutes: React.FunctionComponent<ToyRoutesProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<PageToy />}>
        <Route path="funko/:page" element={<PageFunko />} />
        <Route path="dinosaurio/:page" element={<PageDinosaur />} />
        <Route path="funko/filter" element={<ResultFilter />} />
        <Route path="dinosaurio/filter" element={<ResultFilter />} />
      </Route>
    </Routes>
  );
};

export default ToyRoutes;
