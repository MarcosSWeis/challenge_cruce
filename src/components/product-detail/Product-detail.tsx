import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../models/Product";
import { addToCart, getProductById } from "../../services/db-service";
import Carrusel, { imgSlides } from "../carrusel/Carrusel";
import img from "../../assets/funko_pop_tyrion.svg";
import { User } from "../../models/User";
import { UpdatedUserLogged } from "../../interfaces/app-context-props";
import { AppContext } from "../../context/App-context";

interface ProdeuctDetailProps {}

const ProdeuctDetail: React.FunctionComponent<ProdeuctDetailProps> = ({}) => {
  const param = useParams();
  const { userLogged, updatedUserLogged } = useContext(AppContext);
  const user = userLogged.userLogged;
  const navigate = useNavigate();
  const id = Number(param.id);
  const [product, setProduct] = useState<Product | undefined>();
  const [difTime, setDifTime] = useState<number>();
  let startTime: Date, endTime: Date;
  function handlerPresClick() {
    startTime = new Date();
  }
  function getProduct() {
    setProduct(getProductById(id));
  }
  useEffect(() => {
    getProduct();
  }, []);
  let images: Array<imgSlides> = [];
  function getWidthScreen(): number {
    let widthScreen = window.screen.width;
    return widthScreen;
  }
  function handlerDropClick() {
    endTime = new Date();
    setDifTime((endTime.getTime() - startTime.getTime()) / 1000);
  }
  function verifyUserToAddCart(user?: User, updatedUserLogged?: UpdatedUserLogged) {
    if (user && updatedUserLogged) {
      if (product) {
        addToCart(product.id, user, updatedUserLogged);
      }
    } else {
      navigate("/login");
    }
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
  product?.images.forEach((image, index) => {
    images.push({ image: image, text: `product-detail-image-${index}` });
  });
  return (
    <>
      {product && product.images && <Carrusel idCarrusel="product-detail" imgSlides={images} imgHeight={30} buttonsNone={false} />}
      <div className="container">
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7" id="sub-cont-datail-prod">
            <h2 className="featurette-heading">
              {product?.title} <span className="text-muted">{product?.subCategory.subCategory}</span>
            </h2>
            <p className="lead">{product?.description}</p>
            {product?.price.discount !== 0 ? (
              <h4>
                $<span> {product?.priceDiscount}</span>
              </h4>
            ) : (
              <h4>
                $<span>{product?.price.price}</span>
              </h4>
            )}
            {product?.price.discount !== 0 ? (
              <h4>
                <span>{product?.price.discount}</span> %Off
              </h4>
            ) : null}
            <h4>
              <span>{product?.quotas}</span> cuotas sin interes
            </h4>
            <div id="cnt-cart-detail-product">
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
          </div>
          <div className="col-md-5">
            <img src={product?.images[0]} alt="" width={"400px"} height={"400px"} />
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>
    </>
  );
};

export default ProdeuctDetail;
