import React, { useState } from "react";
import { FilterState } from "../../interfaces/filter";
import FilterByQuota from "./Filter-by-quota";
import FilterBySale from "./Filter-by-sale";

interface FilterProps {
  setFilterSelected: React.Dispatch<React.SetStateAction<number>>;
}
export interface Filters {
  text: string;
}
const Filter: React.FunctionComponent<FilterProps> = ({ setFilterSelected }) => {
  const filters: Array<Filters> = [
    {
      text: "Filtrar por cuotas",
    },
    {
      text: "Filtrar por descuentos",
    },
  ];
  return (
    <div className="container-filters">
      <div className=" input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          <i className="bi bi-funnel"></i>{" "}
        </label>

        <select className="form-select" aria-label="Default select example" onChange={(event) => setFilterSelected(Number(event.target.value))}>
          <option selected value={-1}>
            {"   Filtrar"}
          </option>

          {filters.map((filter, index) => (
            <option value={index} key={"filter" + index}>
              {filter.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
