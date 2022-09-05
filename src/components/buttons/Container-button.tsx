import React from "react";
import CheckButtons from "./Check-buttons";

interface ContainerButtonProps {
  radioBtns: Array<RadioButtons>;
  setValueButton: React.Dispatch<React.SetStateAction<string>>;
}

export interface RadioButtons {
  text: string;
  value: string;
}
const ContainerButton: React.FunctionComponent<ContainerButtonProps> = ({ radioBtns, setValueButton }) => {
  return (
    <div className="cnt-check-buttons">
      {radioBtns.map((button, index) => (
        <CheckButtons text={button.text} value={button.value} key={button.text + index} setValueButton={setValueButton} />
      ))}
    </div>
  );
};

export default ContainerButton;
