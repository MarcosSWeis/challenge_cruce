import { FilterState } from "../../interfaces/filter";
import { QuotaProduct } from "../../interfaces/products";

interface FilterByQuotaProps {
    setCuotas: React.Dispatch<React.SetStateAction<FilterState>>
    setDiscountSearch: React.Dispatch<React.SetStateAction<boolean>>
    setQuotasSearch: React.Dispatch<React.SetStateAction<boolean>>
}

const FilterByQuota: React.FunctionComponent<FilterByQuotaProps> = ({ setCuotas, setQuotasSearch, setDiscountSearch }) => {

    return (
        <select className="form-select" aria-label="Default select example" name="quotas" onChange={(event) => {
            setCuotas({ value: Number(event.target.value), name: event.target.name })
            setQuotasSearch(true)
            setDiscountSearch(false)
        }}>
            <option selected>Filtrar por cuotas</option>
            <option value={QuotaProduct['tres']}>3 cuotas</option>
            <option value={QuotaProduct["seis"]}>6 cuotas</option>
            <option value={QuotaProduct['nueve']}>9 cuotas</option>
            <option value={QuotaProduct['doce']}>12 cuotas</option>
        </select>
    );
}

export default FilterByQuota;