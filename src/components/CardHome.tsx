import { privateDecrypt } from "crypto";
import React from "react";
import svg_discount from '../assets/vector_discount.svg'
import { IProduct } from "../interfaces/products";
import { Product } from "../models/Product";

interface CardProps {
    product: Product
}

export default function Card({ product }: CardProps) {
    return (
        < div className='card' >
            <div>
                <img src={product.image} className="card-img-top" alt="image" />
            </div>
            {product.price.discount ?
                (<div className="card-body">
                    <img src={svg_discount} className='promo' alt="" />
                    <h3 className="discount">{product.price.discount}%</h3>
                </div>) : (null)
            }
            <div className="container_desc">
                <h6 className="category">{product.category}</h6>
                <p className="card-title">{product.title}</p>
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

            <div className="containerCart">
                <button className="btnCart">
                    <i className="bi bi-cart3"></i>
                </button>
            </div>

        </div>);
}

