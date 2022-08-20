import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BtnSee from "../../components/BtnSee";
import CardProduct2 from "../../components/CardProduct2";
import CardCarrusel from "../../components/carrusel/CardCarrusel";
import Carrusell from "../../components/carrusel/Carrusel";

import Home from "../../components/home/Home";
import ProductCard from "../../components/home/ProductCard";
import { Product } from "../../models/Product";
import { DB } from "../../services/createdDB";

import { CategoryProduct, Toy } from '../../interfaces/products'
import Timer from "../../components/timer/Timer";
import { AppContext } from "../../context/AppContext";
interface PageHomeProps {

}

const PageHome: React.FunctionComponent<PageHomeProps> = () => {
    const [seeCollection, setSeeCollection] = useState<boolean>(false)
    const products = useMemo(() => DB.getAllProducts(), [seeCollection])
    const [funkos, setFunkos] = useState<Array<Product>>([])
    const [dinos, setDinos] = useState<Array<Product>>([])


    function getFunkos() {
        let funkos: Array<Product> | undefined = DB.getProductsByCategory({ toy: Toy.FUNKO })
        if (funkos) {
            setFunkos(funkos)
        }
    }
    function getDinos() {
        let dinos: Array<Product> | undefined = DB.getProductsByCategory({ toy: Toy.DINOSAURIO })
        if (dinos) {
            setDinos(dinos)
        }
    }

    useEffect(() => {
        getFunkos()
        getDinos()

    }, [])
    return (
        <>
            <Home seeCollection={seeCollection} products={products} />
            <BtnSee textRender="Ver colección" marginTop={30} marginBottom={20}
                dispatchAction={setSeeCollection} estateAction={seeCollection} textClose='Cerrar Colección' textColor="white" bgColor="F26522" />

            <CardCarrusel carouselId="funkos-card-carousel" cardsData={funkos} cardsPerSlide={4} CardComponent={ProductCard} titleCarrusel={'Novedades'} />
            <div className="containerTimerSale">
                <Timer />
                <CardCarrusel carouselId="dinos-card-carousel" cardsData={dinos} cardsPerSlide={4} CardComponent={CardProduct2} titleCarrusel={''} />
            </div>
        </>
    );
}

export default PageHome;