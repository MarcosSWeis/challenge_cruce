import { count } from "console";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/App-context";
import { CategoryProduct, QuotaProduct } from "../../interfaces/products";
import { Category } from "../../models/Category";
import { Product } from "../../models/Product";
import { SubCategory } from "../../models/Sub-category";
import Alert from "../../services/alert-service";
import { saveDB } from "../../services/created-db";
import { cartItemSeparator, getTotalPriceCart } from "../../services/user-service";
import CardShoppingCart from "./Card-shopping-cart";

interface ShoppingCartProps {}
export interface countShoppingCart {
  count: number;
  idProduct: number;
  totalPriceWithDiscount: number;
  totalPrice: number;
  title: string;
  description: string;
  discount: number;
  images: Array<string>;
  category: Category;
  subCategory: SubCategory;
  quotas: QuotaProduct;
  priceXUd: number;
}
export interface TotalsPay {
  total: number;
  discount: number;
}
export interface OldPositions {
  product: Product;
  index: number;
}

const ShoppingCart: React.FunctionComponent<ShoppingCartProps> = () => {
  const { userLogged, updatedUserLogged } = useContext(AppContext);
  const user = userLogged.userLogged;
  let shoppingCart: Array<countShoppingCart> = [];
  const [IdToDelete, setIdToDelete] = useState<Number>(-1);
  if (user) {
    cartItemSeparator(user.shoppingCart, shoppingCart);
  }

  let { total, discount }: TotalsPay = getTotalPriceCart(shoppingCart);

  function getPositionsToDelete(id: number) {
    if (user) {
      let newCart = user.shoppingCart.filter((product: Product) => product.id !== id);
      user.setShoppingCart(newCart);
      updatedUserLogged(user); //actualiza el usuario con su nuevo array de productos
      saveDB(); //guarda esos cambios en localSorage
    }
  }

  function addMoreInCart(id: number, countProd: number) {
    if (user) {
      //productos anterios , para no perderlos, el prudcto que quiere lo dejo para agregar la cantida que queria depues
      let oldProducts: Array<Product> = user.shoppingCart.filter((product: Product) => product.id !== id);
      console.log(oldProducts, "oldProducts");
      //si queiso añadir porductos desde su carrito, indica que en su carrito esta lo que quiere aumentar
      //recorro el for tantas veces como productos añadio y le aniado ese producto
      for (let i = 0; i < countProd; i++) {
        let product = user.shoppingCart.find((product: Product) => product.id == id);
        console.log(product, "product");
        if (product) {
          oldProducts.push(product);
        }
      }
      user.setShoppingCart(oldProducts);
      updatedUserLogged(user); //actualiza el usuario con su nuevo array de productos
      saveDB(); //guarda esos cambios en localSorage
    }
  }
  useEffect(() => {}, [userLogged, updatedUserLogged]);

  return (
    <section className="shopping-cart dark">
      <div className="container">
        <div className="block-heading">
          <h2>Carrito de Compras</h2>
          {user && user.shoppingCart.length === 0 && <p>No posee artículos en su carrito </p>}
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-12 ">
              <div className="items">
                {shoppingCart.map((product, index) => (
                  <CardShoppingCart
                    product={product}
                    getPositionsToDelete={getPositionsToDelete}
                    addMoreInCart={addMoreInCart}
                    key={"CardShoppingCart" + index}
                  />
                ))}
                <div className="col-md-12 col-lg-5 m-auto">
                  {shoppingCart.length > 0 && (
                    <div className="summary">
                      <h3>Resumen</h3>
                      <div className="summary-item">
                        <span className="text">Descontado</span>
                        <span className="price">${Number(discount.toFixed(2))}</span>
                      </div>
                      <div className="summary-item">
                        <span className="text">Total a abonar</span>
                        <span className="price">${Number(total).toFixed(2)}</span>
                      </div>
                      <button className="btn btn-primary btn-lg btn-block">Abonar</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
