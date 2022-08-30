import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import svg_discount from "../../assets/vector_discount.svg";
import { AppContext } from "../../context/App-context";
import { UpdatedUserLogged } from "../../interfaces/app-context-props";
import { Product } from "../../models/Product";
import { User } from "../../models/User";
import { addToCart } from "../../services/db-service";
export interface CardProps {
  product: Product;
}

export default function ProductCard({ product }: CardProps) {
  const { userLogged, updatedUserLogged } = useContext(AppContext);
  const user = userLogged.userLogged;
  const navigate = useNavigate();
  const [difTime, setDifTime] = useState<number>();
  let startTime: Date, endTime: Date;
  function handlerPresClick() {
    startTime = new Date();
  }
  function handlerDropClick() {
    endTime = new Date();
    setDifTime((endTime.getTime() - startTime.getTime()) / 1000);
  }

  function getWidthScreen(): number {
    let widthScreen = window.screen.width;
    return widthScreen;
  }

  function addCart() {
    //mayor que 0.5 seg
    if (getWidthScreen() < 720) {
      if (difTime && difTime > 0.5) {
        verifyUserToAddCart(user, updatedUserLogged);
      }
    } else {
      verifyUserToAddCart(user, updatedUserLogged);
    }
  }

  function verifyUserToAddCart(user?: User, updatedUserLogged?: UpdatedUserLogged) {
    if (user && updatedUserLogged) {
      addToCart(product.id, user, updatedUserLogged);
    } else {
      navigate("/login");
    }
  }
  //console.log("Tiempo transcurrido:\n" + timeDiff + " ms");
  useEffect(() => {}, [difTime, userLogged]);
  return (
    <div className="card">
      <Link to={`/producto/${product.id}`}>
        <div>
          <img src={product.image} className="card-img-top" alt="image" />
        </div>
        {product.price.discount ? (
          <div className="card-body">
            <img src={svg_discount} className="promo" alt="" />
            <h3 className="discount">{product.price.discount}%</h3>
          </div>
        ) : null}
      </Link>
      <div className="container_desc">
        {product.category && product.category.toy ? (
          <Link to={`/juguetes/${product.category.toy.toLocaleLowerCase()}/1`}>
            <h6 className="category">{product.category.toy}</h6>
          </Link>
        ) : (
          <Link to={`/juguetes/${product.category.school?.toLocaleLowerCase()}/1`}>
            <h6 className="category">{product.category.school}</h6>
          </Link>
        )}
        <Link to={`/producto/${product.id}`}>
          <p className="card-title">{product.title}</p>
        </Link>
        <p className="quota">{product.quotas} Cuotas s/interés de</p>
        <h5 className="priceQuota">${product.getPriceForQuota(product.price.price, product.quotas)}</h5>
        <div className="containerPrice">
          Final:
          {product.price.discount === 0 ? (
            <h6 className="price">{product.price.price}</h6>
          ) : (
            <div className="d-flex">
              <h6 className="priceDiscount">{product.price.price}</h6>
              <h6 className="price">{product.priceDiscount}</h6>
            </div>
          )}
        </div>
      </div>

      <div
        className="containerCart"
        id="btnAddCart"
        onMouseDown={handlerPresClick}
        onMouseUp={handlerDropClick}
        onClick={() => {
          addCart();
        }}
      >
        <button className="btnCart">
          <i className="bi bi-cart3"></i>
        </button>
      </div>
    </div>
  );
}
