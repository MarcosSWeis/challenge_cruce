import React from "react";
import { TbSocNet, TbGeneral } from "../../interfaces/table";
import BtnSee from "../BtnSee";
import TableDescGeneral from "./TableDescGeneral";
import TableSocialNetwork from "./TableSocialNetwork";

interface FooterProps {

}

const Footer: React.FunctionComponent<FooterProps> = () => {
    const socialNetWorks: Array<TbSocNet> = [
        {
            nameSocNet: 'instagram',
            link: 'https://www.instagram.com/',
            classNameIcon: 'bi bi-instagram'
        },
        {
            nameSocNet: 'facebook',
            link: 'https://es-la.facebook.com/',
            classNameIcon: 'bi bi-facebook'
        },
        {

            nameSocNet: 'youtube',
            link: 'https://www.youtube.com/',
            classNameIcon: 'bi bi-youtube'

        }
    ]
    const tableGeneral: Array<TbGeneral> = [
        {
            title: 'Preguntas frec.',
            link: '/',
        }, {
            title: 'térm & Cond',
            link: '/',
        },
        {
            title: 'Mis pedidos',
            link: '/',
        }
    ]
    return (
        <div className="containerFooter">
            <div className="subContainerFooter">
                <div className="">
                    <h1>Contacto</h1>
                    <h3>MAYORISTAS</h3>
                </div>
                <div>
                    <h3></h3>
                    <form action="" id='fromContact' >
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                    </form>
                    <BtnSee bgColor="white" textColor="black" textRender="ENVIAR" />
                </div>
            </div>
            <div className="containerTableFooter">

                <table className="table" id="TableSocialNetwork">
                    {
                        socialNetWorks.map((socNet: TbSocNet) => <TableSocialNetwork nameSocNet={socNet.nameSocNet} link={socNet.link} classNameIcon={socNet.classNameIcon} />)
                    }
                </table>
                <table className="table" id="TableDescGeneral">
                    {
                        tableGeneral.map((tGeneral: TbGeneral) => <TableDescGeneral title={tGeneral.title} link={tGeneral.link} />)
                    }
                </table>
            </div>

        </div>
    );
}

export default Footer;