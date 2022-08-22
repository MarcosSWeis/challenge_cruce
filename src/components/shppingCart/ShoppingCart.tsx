import { count } from "console";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { CategoryProduct, QuotaProduct } from "../../interfaces/products";
import { Product } from "../../models/Product";
import Alert from "../../services/alert-service";
import { saveDB } from "../../services/createdDB";
import { cartItemSeparator, getTotalPriceCart } from "../../services/user-service";
import CardShoppingCart from "./CardShoppingCart";

interface ShoppingCartProps {

}
export interface countShoppingCart {
    count: number,
    idProduct: number,
    totalPriceWithDiscount: number,
    totalPrice: number,
    title: string,
    description: string,
    discount: number,
    image: any,
    category: CategoryProduct,
    quotas: QuotaProduct,
    priceXUd: number
}
export interface TotalsPay {
    total: number
    discount: number
}

const ShoppingCart: React.FunctionComponent<ShoppingCartProps> = () => {
    const { userLogged, updatedUserLogged } = useContext(AppContext)
    const user = userLogged.userLogged
    let shoppingCart: Array<countShoppingCart> = []
    const [IdToDelete, setIdToDelete] = useState<Number>(-1)
    if (user) {
        cartItemSeparator(user.shoppingCart, shoppingCart)
    }

    let { total, discount }: TotalsPay = getTotalPriceCart(shoppingCart)

    function getPositionsToDelete(id: number) {
        if (user) {
            let newCart = user.shoppingCart.filter((product) => product.id !== id)
            user.setShoppingCart(newCart)
            updatedUserLogged(user)
            saveDB()
        }
    }


    return (
        <section className="shopping-cart dark">
            <div className="container">
                <div className="block-heading">
                    <h2>Carrito de Compras</h2>
                    {user && user.shoppingCart.length === 0 &&
                        <p>No posee artículos en su carrito </p>
                    }
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="items">
                                {

                                    shoppingCart.map((product) => < CardShoppingCart product={product} getPositionsToDelete={getPositionsToDelete} />)
                                }
                                <div className="col-md-12 col-lg-5 m-auto">
                                    {
                                        shoppingCart.length > 0 &&
                                        <div className="summary">
                                            <h3>Resumen</h3>
                                            <div className="summary-item"><span className="text">Descontado</span><span className="price">${Number(discount.toFixed(2))}</span></div>
                                            <div className="summary-item"><span className="text">Total a abonar</span><span className="price">${Number(total).toFixed(2)}</span></div>
                                            <button className="btn btn-primary btn-lg btn-block" >Abonar</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>);
}

export default ShoppingCart;