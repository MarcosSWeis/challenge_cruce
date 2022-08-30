import React from "react";

interface BtnUpProps {
  text: string;
  fn: () => void;
}

const BtnUp: React.FunctionComponent<BtnUpProps> = ({ text, fn }) => {
  return (
    <div className="cnt-btn-up">
      <button className="semi-circulo" onClick={() => fn()}>
        <i className="bi bi-arrow-up h3"></i>
        <h3>{text}</h3>
      </button>
    </div>
  );
};

export default BtnUp;
