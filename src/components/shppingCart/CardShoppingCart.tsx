import { count } from "console";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Product } from "../../models/Product";
import Alert from "../../services/alert-service";
import { countShoppingCart } from "./ShoppingCart";

interface CardShoppingCartProps {
    product: countShoppingCart,
    getPositionsToDelete(id: number): void
    addMoreInCart(id: number, countProd: number): void
}

const CardShoppingCart: React.FunctionComponent<CardShoppingCartProps> = ({ product, getPositionsToDelete, addMoreInCart }) => {
    const [countProd, setCountProd] = useState<number>(product.count)
    function handlerRemoveProduct(title: string, id: number) {
        Alert.confirm({ title: "Eliminar", message: `Esta seguro que desea eliminar el/los product ${title} del carrito` }, () => { getPositionsToDelete(id) })
    }

    function handlerChangeCount(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
        setCountProd(Number(event.target.value))
    }

    return (<div className="product">
        <div className="row">
            <div className="col-md-3">
                <img className="img-fluid mx-auto d-block image" src={product.image} />
            </div>
            <div className="col-md-8">
                <div className="info">
                    <div className="row">
                        <div className="col-md-5 product-name">
                            <div className="product-name">
                                <Link to={`/juguetes/${product.category.toy ?
                                    product.category.toy.toLocaleLowerCase() :
                                    product.category.school && product.category.school.toLocaleLowerCase()}/1`}
                                    className="category-link">
                                    {product.category.toy ? product.category.toy : product.category.school}
                                </Link>
                                <div className="product-info">
                                    <div>Precio: <span className="value">{product.priceXUd}</span></div>
                                    <div>Descuento: <span className="value text-danger">%{product.discount}</span></div>
                                    <div>Cuotas: <span className="value">{product.quotas}</span></div>
                                    <div>Titulo: <span className="value">{product.title}</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 quantity">
                            <label htmlFor="quantity">Cantidad:</label>
                            <input id="quantity" type="number" value={countProd} min={0} className="form-control quantity-input" name="countProduct"

                                onChange={handlerChangeCount}
                            />
                            <button className="btn btn-primary p-1 btn-block mt-2" onClick={() => { addMoreInCart(product.idProduct, countProd) }}>Añadir</button>
                        </div>
                        <div className="col-md-3 price">
                            <span>${product.totalPriceWithDiscount}</span>
                            <div className="col-md-3 trash-btn">
                                <button onClick={() => handlerRemoveProduct(product.title, product.idProduct)}>
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default CardShoppingCart;