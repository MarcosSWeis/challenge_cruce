interface CarruselProps {
  imgSlides: Array<imgSlides>;
  imgHeight: number;
  idCarrusel: string;
  buttonsNone: boolean;
  hiddenText?: boolean;
  borderRadius?: number;
}
export interface imgSlides {
  image: string;
  text: string;
}

const Carrusel: React.FunctionComponent<CarruselProps> = ({ imgSlides, imgHeight, idCarrusel, buttonsNone, hiddenText, borderRadius }) => {
  let none: string = hiddenText ? "none" : "";
  const imgStyles = {};
  let dispalyButtons: string = buttonsNone ? "inline" : "none";
  return (
    <div id={idCarrusel} className="carousel slide m-3" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {imgSlides.map((img, index) => (
          <button
            type="button"
            key={img.text}
            data-bs-target={`#${idCarrusel}`}
            data-bs-slide-to={index}
            className={index === 0 ? "carousel-button active" : "carousel-button"}
            /*  aria-current={index === 0 ? "true" : ""} */
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner bg-black" style={{ borderRadius: `${borderRadius}rem` }}>
        {imgSlides.map((img, index) => (
          <div key={img.text} className={index === 0 ? "carousel-item active" : "carousel-item"}>
            <img
              className="d-block w-100 "
              style={{
                opacity: ".8",
                objectFit: "cover",
                objectPosition: "centered",
                overflow: "hidden",
                height: `${imgHeight}rem`,
                borderRadius: `${borderRadius}rem`,
              }}
              src={`${img.image}`}
              alt={img.text}
            />
            {img.text && (
              <div className="carousel-caption  d-md-block">
                <h1 style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.50)", display: `${none}` }}>{img.text}</h1>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#standardCarousel"
        data-bs-slide="prev"
        style={{ display: dispalyButtons }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#standardCarousel"
        data-bs-slide="next"
        style={{ display: dispalyButtons }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default Carrusel;
