import React from "react";
import { FilterState } from "../../interfaces/filter";

interface FilterBySaleProps {
  setDiscount: React.Dispatch<React.SetStateAction<FilterState>>;
  discount: FilterState;
}

export interface ArrDiscount {
  value: number;
  option: string;
}

const FilterBySale: React.FunctionComponent<FilterBySaleProps> = ({
  setDiscount,
  discount,
}) => {
  let arrDiscount: Array<ArrDiscount> = [
    { value: 10, option: "0 - 10 %" },
    { value: 20, option: "10 - 20 %" },
    { value: 30, option: "20 - 30 %" },
    { value: 40, option: "30 - 40 %" },
    { value: 50, option: "40 - 50 %" },
  ];
  return (
    <select
      className="form-select"
      name="discount"
      aria-label="Default select example"
      onChange={(event) => {
        setDiscount({
          value: Number(event.target.value),
          name: event.target.name,
        });
      }}
    >
      <option value={0}>Filtrar por descuento</option>
      {arrDiscount.map((disc) => (
        <option
          value={disc.value}
          selected={disc.value === discount.value ? true : false}
        >
          {disc.option}
        </option>
      ))}
    </select>
  );
};

export default FilterBySale;
