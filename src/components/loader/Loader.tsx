import React from "react";
import { ThreeDots } from "react-loader-spinner";
interface LoaderProps {
  height?: number;
  width?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Loader: React.FunctionComponent<LoaderProps> = ({ height = 80, width = 80, style, className }) => {
  return (
    <div className={`container-loader ${className}`} style={style}>
      <ThreeDots color="#7d5a94" height={height} width={width} />
    </div>
  );
};

export default Loader;
