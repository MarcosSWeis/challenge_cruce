import { FilterState } from "../../interfaces/filter";
import { QuotaProduct } from "../../interfaces/products";

interface FilterByQuotaProps {
  setCuotas: React.Dispatch<React.SetStateAction<FilterState>>;
  quotas: FilterState;
}

const FilterByQuota: React.FunctionComponent<FilterByQuotaProps> = ({
  setCuotas,
  quotas,
}) => {
  const arrQuotas: number[] = [3, 6, 9, 12];
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      name="quotas"
      onChange={(event) => {
        setCuotas({
          value: Number(event.target.value),
          name: event.target.name,
        });
      }}
    >
      <option value={0}>Filtrar por cuotas</option>
      {arrQuotas.map((quota, index) => (
        <option value={quota} selected={quota === quotas.value ? true : false}>
          {quota} cuotas
        </option>
      ))}
    </select>
  );
};

export default FilterByQuota;
