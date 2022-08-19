import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import svg_discount from '../../assets/vector_discount.svg'
import { Product } from "../../models/Product";

export interface CardProps {
    product: Product
}

export default function ProductCard({ product }: CardProps) {

    const [difTime, setDifTime] = useState<number>()
    let l;
    let productSelected: Date, startTime: Date, endTime: Date;
    function handlerPresClick() {
        startTime = new Date()
    }
    function handlerDropClick() {
        endTime = new Date()
        l = endTime.getTime() - startTime.getTime()
        setDifTime((endTime.getTime() - startTime.getTime()) / 1000)
        console.log(l / 1000, 'seg')

        console.log(l / 1000 > 0.5, 'seg')
        console.log(l, 'ms')

    }

    function addToCart() {
        //mayor que 0.5 seg
        if (difTime && difTime > 0.5) {
            console.log(difTime, 'seg usesteate')
            console.log(`se añadio al carrito el produto ${product.id}`)
        }
    }

    //console.log("Tiempo transcurrido:\n" + timeDiff + " ms");
    useEffect(() => {
        addToCart()
    }, [difTime])
    return (
        < div className='card' >
            <Link to={`/product/${product.id}`}>
                <div>
                    <img src={product.image} className="card-img-top" alt="image" />
                </div>
                {product.price.discount ?
                    (<div className="card-body">
                        <img src={svg_discount} className='promo' alt="" />
                        <h3 className="discount">{product.price.discount}%</h3>
                    </div>) : (null)
                }
            </Link>
            <div className="container_desc">
                {
                    product.category && product.category.toy ?
                        <Link to={`/juguetes/${product.category.toy.toLocaleLowerCase()}/1`}>
                            <h6 className="category">{product.category.toy}</h6>
                        </Link> :
                        (<Link to={`/juguetes/${product.category.school?.toLocaleLowerCase()}/1`}>
                            <h6 className="category">{product.category.school}</h6>
                        </Link>)
                }
                <Link to={`/product/${product.id}`}>
                    <p className="card-title">{product.title}</p>
                </Link>
                <p className="quota">{product.quotas} Cuotas s/interés de</p>
                <h5 className="priceQuota">${product.getPriceForQuota(product.price.price, product.quotas)}</h5>
                <div className="containerPrice">
                    Final:
                    {product.price.discount === 0 ?
                        (<h6 className="price">{product.price.price}</h6>)
                        : (<div className="d-flex">
                            <h6 className="priceDiscount">{product.price.price}</h6>
                            <h6 className="price">{product.priceDiscount}</h6>
                        </div>)
                    }
                </div>
            </div>

            <div className="containerCart" id='btnAddCart' onMouseDown={handlerPresClick} onMouseUp={handlerDropClick}>
                <button className="btnCart">
                    <i className="bi bi-cart3"></i>
                </button>
            </div>

        </div>);
}

