import React from "react";
import Carousel from "react-material-ui-carousel";
import SlideCarruselSendEmail from "./Slide-Carrusel-send-email";
interface HtmlSendEmailProps {}

interface TextInf {
  resume: string;
  desc: string;
}
const HtmlSendEmail: React.FunctionComponent<HtmlSendEmailProps> = () => {
  let arrayText: Array<TextInf> = [
    {
      resume: "Nos comprometemos a proporcionar soluciones a medida ",
      desc: "Implementamos soluciones tecnológicas que ayudan a nuestros clientes a aumentar la rentabilidad de sus negocios, mediante la optimización de la experiencia omnicanal de sus usuarios.",
    },
    {
      resume: "Colaboramos en el aumento de la conversión de sus canales.",
      desc: "Implementamos soluciones tecnológicas que ayudan a nuestros clientes a aumentar la rentabilidad de sus negocios, mediante la optimización de la experiencia omnicanal de sus usuarios.",
    },
    {
      resume: "Actualmente, estamos presentes en Argentina | Chile | Perú | Uruguay | USA ",
      desc: "Nos encontramos en una etapa de expansión, profundizando las operaciones existentes y abriendo nuevos mercados en la región.",
    },
  ];
  return (
    <div>
      {/* url logo */}
      <div className="ctn-html-confirm-email">
        <div className="ctn-image-confirm-email">
          <img src="https://res.cloudinary.com/marcosweis/image/upload/v1662317343/challenge_cruce/juuupmswuivlo1yocr24.svg" alt="" />
        </div>
        <h1>Bienvenido a cruce </h1>
        <Carousel
          className="carrusel-email"
          indicatorIconButtonProps={{
            style: {},
          }}
          autoPlay={false}
          navButtonsAlwaysVisible={true}
          navButtonsProps={{
            style: {
              color: "#b250ff",
              border: "solid 1px #b250ff",
            },
          }}
          navButtonsWrapperProps={{
            style: {
              position: "absolute",
              top: "80%",
              backgroundColor: "transparent",
              height: "40px",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              backgroundColor: "#b250ff",
              color: "#b250ff",
            },
          }}
        >
          {arrayText.map((inf, index) => (
            <SlideCarruselSendEmail key={`slide-carruser-email${index}`} desc={inf.desc} resume={inf.resume} />
          ))}
        </Carousel>
      </div>
      <div className="ctn-btn-email-to">
        <button type="button" className="btn btn-primary mt-4 btn-email-to">
          Ir al sitio
        </button>
      </div>
    </div>
  );
};

export default HtmlSendEmail;
