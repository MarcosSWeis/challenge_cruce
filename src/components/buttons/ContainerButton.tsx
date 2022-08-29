import React from "react";
import { Toy } from "../../interfaces/products";
import CheckButtons from "./CheckButtons";

interface ContainerButtonProps {
  radioBtns: Array<RadioButtons>;
  setValueButton: React.Dispatch<React.SetStateAction<string>>;
}

export interface RadioButtons {
  text: string;
  value: Toy;
}
const ContainerButton: React.FunctionComponent<ContainerButtonProps> = ({
  radioBtns,
  setValueButton,
}) => {
  return (
    <div>
      {radioBtns.map((button, index) => (
        <CheckButtons
          text={button.text}
          value={button.value}
          key={button.text + index}
          setValueButton={setValueButton}
        />
      ))}
    </div>
  );
};

export default ContainerButton;
