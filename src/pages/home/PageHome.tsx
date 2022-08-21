import React, { useEffect, useMemo, useState } from "react";
import BtnSee from "../../components/BtnSee";
import CardProduct2 from "../../components/CardProduct2";
import CardCarrusel from "../../components/carrusel/CardCarrusel";
import Home from "../../components/home/Home";
import ProductCard from "../../components/home/ProductCard";
import { Product } from "../../models/Product";
import { Toy } from '../../interfaces/products'
import Timer from "../../components/timer/Timer";
import { getAllProducts, getProductsByCategory } from "../../services/db-service";

interface PageHomeProps {

}

const PageHome: React.FunctionComponent<PageHomeProps> = () => {
    const [seeCollection, setSeeCollection] = useState<boolean>(false)
    const products = useMemo(() => getAllProducts(), [seeCollection])
    const [funkos, setFunkos] = useState<Array<Product>>([])
    const [dinos, setDinos] = useState<Array<Product>>([])



    function getFunkos() {
        let funkos: Array<Product> | undefined = getProductsByCategory({ toy: Toy.FUNKO })
        if (funkos) {
            setFunkos(funkos)
        }
    }
    function getDinos() {
        let dinos: Array<Product> | undefined = getProductsByCategory({ toy: Toy.DINOSAURIO })
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