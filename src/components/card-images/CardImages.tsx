import React from "react";
import { imgSlides } from "../carrusel/Carrusel";

interface CardImagesProps {
  slide: imgSlides;
}

const CardImages: React.FunctionComponent<CardImagesProps["slide"]> = ({
  image,
  text,
}) => {
  return (
    <div className="container-image-card">
      <img src={image} alt={text} />
    </div>
  );
};

export default CardImages;
