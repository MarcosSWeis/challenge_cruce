import React from "react";
import { FilterState } from "../../interfaces/filter";

interface FilterBySaleProps {
    setDiscount: React.Dispatch<React.SetStateAction<FilterState>>
    setDiscountSearch: React.Dispatch<React.SetStateAction<boolean>>
    setQuotasSearch: React.Dispatch<React.SetStateAction<boolean>>
}

const FilterBySale: React.FunctionComponent<FilterBySaleProps> = ({ setDiscount, setDiscountSearch, setQuotasSearch }) => {
    return (
        <select className="form-select" name="discount" aria-label="Default select example" onChange={(event) => {
            setDiscount({ value: Number(event.target.value), name: event.target.name })
            setDiscountSearch(true)
            setQuotasSearch(false)
        }}>
            <option  >Filtrar por descuento</option>
            <option value={10}>hasta %10</option>
            <option value={20}>hasta %20</option>
            <option value={30}>hasta %30</option>
            <option value={40}>hasta %40</option>
            <option value={50}>hasta %50</option>
            <option value={60}>hasta %60</option>
        </select>
    );
}

export default FilterBySale;