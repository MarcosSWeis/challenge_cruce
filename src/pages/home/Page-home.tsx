import React, { useEffect, useMemo, useRef, useState } from "react";
import BtnSee from "../../components/buttons/Btn-see";
import CardProduct2 from "../../components/Card-product-2";
import CardCarrusel from "../../components/carrusel/Card-carrusel";
import Home from "../../components/home/Home";
import ProductCard from "../../components/home/Product-card";
import { Product } from "../../models/Product";
import Timer from "../../components/timer/Timer";
import { getAllProducts, getProductsByCategory, getProductsBySubCategory } from "../../services/db-service";
import Carrusel, { imgSlides } from "../../components/carrusel/Carrusel";
import { getImagesBrands } from "../../services/import-brans";
import CardCarruselImages from "../../components/carrusel/Card-carrusel-images";
import CardImages from "../../components/card-images/Card-images";
import BtnUp from "../../components/buttons/Btn-up";
import { getSubCategoryByText } from "../../services/category-service";
import banner from "../../assets/banner.svg";
import HtmlSendEmail from "../../components/html-email-send/Html-send-email";

interface PageHomeProps {}

const PageHome: React.FunctionComponent<PageHomeProps> = () => {
  const [seeCollection, setSeeCollection] = useState<boolean>(false);
  const products = useMemo(() => getAllProducts(), [seeCollection]);
  const [funkos, setFunkos] = useState<Array<Product>>([]);
  const [dinos, setDinos] = useState<Array<Product>>([]);
  const [brands, setBrands] = useState<Array<imgSlides>>([]);
  const [heightHome, setHeightHome] = useState<number | undefined>(undefined);
  const [scrollY, setScrollY] = useState<number>(0);
  const [start, setStart] = useState<number>(0);
  const upHome = document.getElementById("upHome");

  function getFunkos() {
    const subCatFunko = getSubCategoryByText("funko");
    let funkos: Array<Product> | undefined = [];
    if (subCatFunko) {
      funkos = getProductsBySubCategory(subCatFunko);
    }
    if (funkos) {
      setFunkos(funkos);
    }
  }
  function getDinos() {
    const subCatDino = getSubCategoryByText("dinosaur");

    let dinos: Array<Product> | undefined = [];
    if (subCatDino) {
      dinos = getProductsBySubCategory(subCatDino);
      if (dinos) {
        setDinos(dinos);
      }
    }
  }

  function getBrands() {
    let array_one_brands: Array<imgSlides> = getImagesBrands();
    let array_two_brands: Array<imgSlides> = getImagesBrands();
    let finalArray: Array<imgSlides> = array_one_brands.concat(array_two_brands);
    setBrands(finalArray);
  }
  function getHeightHomePage() {
    let heigh = document.getElementById("cnt-page-home");
    let body = document.querySelector("body");
    if (body && heigh) {
      setHeightHome(heigh.scrollHeight);
      setStart(body.scrollHeight - heigh.scrollHeight);
    }
  }

  function handlerScroll() {
    setScrollY(window.scrollY + start);
  }

  if (scrollY > Number(heightHome)) {
    if (upHome) {
      upHome.style.display = "block";
    }
  } else {
    if (upHome) {
      upHome.style.display = "none";
    }
  }

  window.addEventListener("scroll", handlerScroll);

  const up = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  let widthScreen = window.screen.width;

  useEffect(() => {
    getFunkos();
    getDinos();
    getBrands();
    getHeightHomePage();
    handlerScroll();
  }, [heightHome]);
  return (
    <div id="cnt-page-home">
      <div className="container-banner">
        <Carrusel
          imgSlides={[{ image: banner, text: "image-banner" }]}
          imgHeight={25}
          idCarrusel={""}
          buttonsNone={false}
          hiddenText={true}
          borderRadius={2}
        />
      </div>
      <Home seeCollection={seeCollection} products={products} />
      <BtnSee
        textRender="Ver colecci??n"
        marginTop={30}
        marginBottom={20}
        dispatchAction={setSeeCollection}
        estateAction={seeCollection}
        textClose="Cerrar Colecci??n"
        textColor="white"
        bgColor="F26522"
        padding={3}
      />
      <div className="container-brands">
        <CardCarruselImages
          carouselId={"brands-card-carrusel"}
          cardsData={brands}
          cardsPerSlide={4}
          CardComponent={CardImages}
          titleCarrusel={"Nuestras marcas"}
          viewCountSlides={true}
          marginTop={50}
          marginBottom={50}
        />
      </div>
      <CardCarrusel
        carouselId="funkos-card-carousel"
        cardsData={funkos}
        cardsPerSlide={widthScreen < 720 ? 1 : 4}
        CardComponent={ProductCard}
        titleCarrusel={"Novedades"}
        marginTop={50}
        marginBottom={50}
      />
      <div className="containerTimerSale">
        <Timer title="Termina en :" propStart={false} />
        <CardCarrusel
          carouselId="dinos-card-carousel"
          cardsData={dinos}
          cardsPerSlide={4}
          CardComponent={CardProduct2}
          titleCarrusel={""}
          marginTop={50}
          marginBottom={50}
        />
      </div>

      <div id={"upHome"} className="">
        <BtnUp text="Subir" fn={up} />
      </div>
    </div>
  );
};

export default PageHome;
