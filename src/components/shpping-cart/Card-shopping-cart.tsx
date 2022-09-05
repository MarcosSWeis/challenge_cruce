import { click } from "@testing-library/user-event/dist/click";
import { count } from "console";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Product } from "../../models/Product";
import Alert from "../../services/alert-service";
import { countShoppingCart } from "./Shopping-cart";

interface CardShoppingCartProps {
  product: countShoppingCart;
  getPositionsToDelete(id: number): void;
  addMoreInCart(id: number, countProd: number): void;
}

const CardShoppingCart: React.FunctionComponent<CardShoppingCartProps> = ({ product, getPositionsToDelete, addMoreInCart }) => {
  let [countProd, setCountProd] = useState<number>(product.count);
  const inputAdd = React.useRef<HTMLInputElement>(null);
  function handlerRemoveProduct(title: string, id: number) {
    Alert.confirm({ title: "Eliminar", message: `Esta seguro que desea eliminar el/los product ${title} del carrito` }, () => {
      getPositionsToDelete(id);
    });
  }

  function handlerChangeCount(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value, event.target.name);
    setCountProd(Number(event.target.value));
  }

  useEffect(() => {}, [countProd]);
  return (
    <div className="product">
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid mx-auto d-block image" src={product.images[0]} />
        </div>
        <div className="col-md-8">
          <div className="info">
            <div className="row">
              <div className="col-md-5 product-name">
                <div className="product-name">
                  <Link to={`/juguetes/${product.subCategory.subCategoryIng}/1`} className="category-link">
                    {product.subCategory.subCategory}
                  </Link>
                  <div className="product-info">
                    <div>
                      Precio: <span className="value">{product.priceXUd}</span>
                    </div>
                    <div>
                      Descuento: <span className="value text-danger">%{product.discount}</span>
                    </div>
                    <div>
                      Cuotas: <span className="value">{product.quotas}</span>
                    </div>
                    <div>
                      Titulo: <span className="value">{product.title}</span>
                    </div>
                    <div>
                      id: <span className="value">{product.idProduct}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 quantity">
                <input
                  id={"quantity"}
                  type="number"
                  min={1}
                  defaultValue={""}
                  className="form-control quantity-input"
                  name={"countProduct"}
                  onChange={handlerChangeCount}
                  ref={inputAdd}
                />

                <button
                  className="btn btn-primary p-1 btn-block mt-2"
                  onClick={() => {
                    addMoreInCart(product.idProduct, countProd);
                    if (inputAdd.current) {
                      inputAdd.current.value = "";
                    }
                  }}
                >
                  Añadir
                </button>
                <div className="d-flex justify-content-center count-products-shp-ctr">
                  <h5 className="count"> Cantidad :</h5>
                  <h5 className="value">{product.count}</h5>
                </div>
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
    </div>
  );
};

export default CardShoppingCart;
