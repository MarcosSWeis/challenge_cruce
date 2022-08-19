import React, { useEffect, useState } from "react";
import { CardProps } from "../home/ProductCard";

interface CardCarruselProps<T> {
    carouselId: string
    cardsData: Array<any>
    cardsPerSlide: number
    titleCarrusel?: string
    CardComponent: React.FunctionComponent<PropsComp['propsProdCard']>
}
interface PropsComp {
    propsProdCard: CardProps
}

interface EstateCardProduct {
    indicatorPage: {
        currentSlider: number
        totalSlider: number
    }
}
function CardCarrusel<T extends PropsComp>({ carouselId, cardsData, cardsPerSlide, CardComponent, titleCarrusel }: CardCarruselProps<T>): JSX.Element {

    const [indicatorPage, setIndicatorPage] = useState<number>(1)

    let slideCount = Math.trunc(cardsData.length / cardsPerSlide)
    cardsData.length % cardsPerSlide > 0 && (slideCount += 1)
    let arr: Array<string> = []
    console.log(slideCount, 'slideCount')
    const carouselIndicators = () => {
        let buttonArray: JSX.Element[] = []
        for (let i = 0; i < slideCount; i++) {
            arr.push(`${i}`)

            buttonArray.push(
                <button
                    type="button"
                    key={i + 1}
                    style={{ display: 'none' }}
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide-to={i}
                    className={
                        i === 0 ? "carousel-button active" : "carousel-button"
                    }
                    aria-label={`Slide ${i + 1}`}
                ></button>
            )
        }
        return buttonArray
    }
    const carouselCards = (i: number) => {
        let carouselCards = []
        for (let j = 0; j < cardsPerSlide; j++) {
            carouselCards.push(<CardComponent key={`card${(i * cardsPerSlide) + j}`} product={cardsData[j]} ></CardComponent>)
        }
        return carouselCards
    }

    const carouselItems = () => {
        let carouselItems = []
        for (let i = 0; i < slideCount; i++) {
            let item = <div key={`item${i}`} className={i === 0 ? "carousel-item active  "
                : "carousel-item  "}>
                <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
                    {carouselCards(i)}
                </div>
            </div>
            carouselItems.push(item)
        }
        return carouselItems
    }

    return (
        <div
            id={`${carouselId}`}
            className="carousel slide card-carousel "
            data-bs-ride="carousel"

        > <div>
                <h2>{titleCarrusel}</h2>
            </div>
            <div className="carousel-indicators">
                {carouselIndicators()}
            </div>
            <div style={{ height: 'fit-content' }} className="carousel-inner py-5 pt-1">
                {carouselItems()}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide="prev"
                onClick={() => {
                    indicatorPage <= slideCount && indicatorPage > 1 ? setIndicatorPage(indicatorPage - 1) : setIndicatorPage(10)
                }}
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide="next"

                onClick={() => {
                    indicatorPage < slideCount ? setIndicatorPage(indicatorPage + 1) : setIndicatorPage(1)
                }}
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
            <div className="countSlideCarrusel">
                <h5>{indicatorPage} de {slideCount}</h5>
            </div>
        </div>
    );
};



export default CardCarrusel;