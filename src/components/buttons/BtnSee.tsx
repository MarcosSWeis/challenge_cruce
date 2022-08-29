import { padding } from "@mui/system";
import React from "react";

interface BtnSeeProps<T> {
  textRender: string;
  marginTop?: number;
  marginBottom?: number;
  dispatchAction?: React.Dispatch<TypeDispatcher["bol"]> | TypeDispatcher["fn"];
  estateAction?: boolean;
  textClose?: string;
  textColor?: string;
  bgColor?: string;
  padding?: number;
}
interface TypeDispatcher {
  bol: boolean;
  fn: () => {};
}
function BtnSee<T extends TypeDispatcher>({
  textRender,
  marginTop = 0,
  marginBottom = 0,
  dispatchAction,
  estateAction,
  textClose,
  textColor,
  bgColor,
  padding = 0,
}: BtnSeeProps<T>): JSX.Element {
  return (
    <div
      className="btnSee"
      style={{
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
      }}
    >
      <button
        className=""
        onClick={() => {
          if (dispatchAction) {
            !estateAction ? dispatchAction(true) : dispatchAction(false);
          }
        }}
        style={{
          backgroundColor: `#${bgColor}`,
          color: `#${textColor}`,
          padding: `${padding}px`,
        }}
      >
        {textClose ? (!estateAction ? textRender : textClose) : textRender}
      </button>
    </div>
  );
}

export default BtnSee;
