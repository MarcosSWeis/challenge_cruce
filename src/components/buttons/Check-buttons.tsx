import React, { Fragment } from "react";
import { RadioButtons } from "./Container-button";

interface CheckButtonsProps extends RadioButtons {
  text: string;
  value: string;
  setValueButton: React.Dispatch<React.SetStateAction<string>>;
}

const CheckButtons: React.FunctionComponent<CheckButtonsProps> = ({ text, value, setValueButton }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="toysButtons"
        id="toysButtons"
        value={value}
        onChange={(event) => {
          setValueButton(event.target.value);
        }}
      />
      <label className="form-check-label" htmlFor="toysButtons">
        {text}
      </label>
    </div>
  );
};

export default CheckButtons;
