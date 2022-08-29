import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BtnSee from "../../components/buttons/BtnSee";
import ContainerButton, {
  RadioButtons,
} from "../../components/buttons/ContainerButton";
import Filter from "../../components/filters/Filter";
import FilterByQuota from "../../components/filters/FilterByQuota";
import FilterBySale from "../../components/filters/FilterBySale";
import Range from "../../components/Range";
import ToyNavbar from "../../components/toyNavBar/ToyNavBar";
import { FilterState } from "../../interfaces/filter";
import { Toy } from "../../interfaces/products";

interface PageToyProps {}

const PageToy: React.FunctionComponent<PageToyProps> = () => {
  const INITIAL_STATE_FILTER = { value: 0, name: "" };
  const [max, setMax] = useState<number>(10000);
  const [min, setMin] = useState<number>(1);
  const [sendFilterPrice, setSendFilterPrice] = useState<boolean>(false);
  const [quotas, setCuotas] = useState<FilterState>(INITIAL_STATE_FILTER);
  const [discount, setDiscount] = useState<FilterState>(INITIAL_STATE_FILTER);
  const [filterSelected, setFilterSelected] = useState<number>(-1);
  const [valueButton, setValueButton] = useState<string>("Funko");

  const navigate = useNavigate();

  const radioButtons: Array<RadioButtons> = [
    { text: "Funko", value: Toy.FUNKO },
    { text: "Dinosaurio", value: Toy.DINOSAURIO },
  ];

  const sendFilter = () => {
    navigate(
      `/juguetes/${valueButton.toLowerCase()}/filter?min=${min}&max=${max}&quota=${
        quotas.value
      }&discount=${discount.value}&toy=${valueButton.toLowerCase()}&page=${1}`
    );
  };

  return (
    <>
      <ToyNavbar />
      <div className="ctn-top-filters">
        <Range
          setMax={setMax}
          setMin={setMin}
          max={max}
          min={min}
          sendFilterPrice={sendFilterPrice}
          setSendFilterPrice={setSendFilterPrice}
        />
        <div>
          <h3 className="text-center">Tipo de juguete</h3>
          <div>
            <ContainerButton
              radioBtns={radioButtons}
              setValueButton={setValueButton}
              key={radioButtons[0].value + radioButtons[1].value}
            />
          </div>
        </div>
        <div className="">
          <Filter setFilterSelected={setFilterSelected} />

          <div className="container-sub-filter">
            {filterSelected === 0 && (
              <FilterByQuota setCuotas={setCuotas} quotas={quotas} />
            )}

            {filterSelected === 1 && (
              <FilterBySale setDiscount={setDiscount} discount={discount} />
            )}
          </div>
        </div>
      </div>
      <BtnSee
        key={"btnFilter"}
        textRender="Filtrar"
        dispatchAction={sendFilter}
        bgColor={"7d5a94"}
        textColor={"fff"}
        padding={5}
      />
      <Outlet />
    </>
  );
};

export default PageToy;
