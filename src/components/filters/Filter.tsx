import React, { useState } from "react";
import { FilterState } from "../../interfaces/filter";
import FilterByQuota from "./FilterByQuota";
import FilterBySale from "./FilterBySale";

interface FilterProps {
    setCuotas: React.Dispatch<React.SetStateAction<FilterState>>
    setDiscount: React.Dispatch<React.SetStateAction<FilterState>>
    setDiscountSearch: React.Dispatch<React.SetStateAction<boolean>>
    setQuotasSearch: React.Dispatch<React.SetStateAction<boolean>>

    quotas: FilterState
    discount: FilterState
    setFilterSelected: React.Dispatch<React.SetStateAction<number>>
    filterSelected: number
}
export interface Filters {
    text: string
}
const Filter: React.FunctionComponent<FilterProps> = ({ setCuotas, setDiscount, quotas, discount, setFilterSelected, filterSelected, setDiscountSearch, setQuotasSearch }) => {

    const filters: Array<Filters> =
        [
            {
                text: 'Filtrar por cuotas'
            },
            {
                text: 'Filtrar por descuentos'
            }
        ]
    return (<div className="container-filters">
        <div className=" input-group mb-3">

            <label className="input-group-text" htmlFor="inputGroupSelect01"><i className="bi bi-funnel"></i> </label>

            <select className="form-select" aria-label="Default select example" onChange={(event) => setFilterSelected(Number(event.target.value))}>
                <option selected value={-1}>{'   Filtrar'}</option>

                {
                    filters.map((filter, index) => <option value={index} key={'filter' + index} >{filter.text}</option>)
                }
            </select >
        </div>

        {filterSelected !== -1 ? <div className="container-sub-filter">
            {filterSelected === 0 && <FilterByQuota setCuotas={setCuotas} setQuotasSearch={setQuotasSearch} setDiscountSearch={setDiscountSearch} />}
            {filterSelected === 1 && <FilterBySale setDiscount={setDiscount} setDiscountSearch={setDiscountSearch} setQuotasSearch={setQuotasSearch} />}
        </div> : null
        }
    </div>
    );
}

export default Filter;