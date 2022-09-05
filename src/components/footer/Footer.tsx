import React, { useState } from "react";
import { TbSocNet, TbGeneral } from "../../interfaces/table";
import BtnSee from "../buttons/Btn-see";
import TableDescGeneral from "./Table-desc-general";
import TableSocialNetwork from "./Table-social-network";
import afip from "../../assets/footer/afip.svg";
import ahora_18 from "../../assets/footer/ahora_18.svg";
import cace from "../../assets/footer/cace.svg";
import hotsale from "../../assets/footer/hotsale.svg";
import vtex from "../../assets/footer/vtex.svg";
import logo from "../../assets/logo.svg";
import { sendEmail } from "../../services/send-email";
import Loader from "../loader/Loader";

interface FooterProps {}
interface ErrorSendEmail {
  error: boolean;
  text: string;
}
const Footer: React.FunctionComponent<FooterProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [errorEmail, setErrorEmail] = useState<ErrorSendEmail>({ error: false, text: "" });

  function handlerValidationEmail(email: string): boolean {
    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
      setErrorEmail({ error: true, text: "Email no valido" });
      return false;
    } else {
      setErrorEmail({ error: false, text: "" });
      return true;
    }
  }
  const socialNetWorks: Array<TbSocNet> = [
    {
      nameSocNet: "instagram",
      link: "https://www.instagram.com/",
      classNameIcon: "bi bi-instagram",
    },
    {
      nameSocNet: "facebook",
      link: "https://es-la.facebook.com/",
      classNameIcon: "bi bi-facebook",
    },
    {
      nameSocNet: "youtube",
      link: "https://www.youtube.com/",
      classNameIcon: "bi bi-youtube",
    },
  ];
  const tableGeneral: Array<TbGeneral> = [
    {
      title: "Preguntas frec.",
      link: "/",
    },
    {
      title: "térm & Cond",
      link: "/",
    },
    {
      title: "Mis pedidos",
      link: "/",
    },
  ];

  return (
    <div className="containerFooter">
      <div className="subContainerFooter">
        <div className="">
          <h1>Contacto</h1>
          <h3>MAYORISTAS</h3>
        </div>
        <div>
          <h3></h3>
          <div id="ctn-contact">
            <div className="input-group mb-3 d-flex">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              {errorEmail.error && (
                <h6 className="mt-2 mb-2 text-danger" style={{ height: "38px", marginLeft: "2rem" }}>
                  {errorEmail.text}
                </h6>
              )}
              {loading && (
                <div style={{ height: "38px", marginLeft: "2rem" }}>
                  <Loader />
                </div>
              )}
            </div>
          </div>
          <BtnSee
            bgColor="white"
            textColor="black"
            textRender="ENVIAR"
            padding={3}
            dispatchAction={async () => {
              if (handlerValidationEmail(email)) {
                setLoading(true);
                try {
                  const response = await sendEmail(email);
                } catch (err) {
                  console.log(err);
                }

                setLoading(false);
              }
            }}
          />
        </div>
      </div>
      <div className="containerTableFooter">
        <table className="table" id="TableSocialNetwork">
          {socialNetWorks.map((socNet: TbSocNet) => (
            <TableSocialNetwork nameSocNet={socNet.nameSocNet} link={socNet.link} classNameIcon={socNet.classNameIcon} />
          ))}
        </table>
        <table className="table" id="TableDescGeneral">
          {tableGeneral.map((tGeneral: TbGeneral) => (
            <TableDescGeneral title={tGeneral.title} link={tGeneral.link} />
          ))}
        </table>
      </div>
      <div className="container-sponsor">
        <div className="top-sponsor">
          <img src={cace} alt="case" />
          <img src={ahora_18} alt="ahora_18" />
          <img src={hotsale} alt="hotsale" />
        </div>
        <div className="bottom-sponsor">
          <img src={afip} alt="afip" />
          <img src={vtex} alt="vtex" />
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
