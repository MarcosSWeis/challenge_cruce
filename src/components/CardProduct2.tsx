import { Link } from "react-router-dom";
import { Product } from "../models/Product";
interface CardProduct2Props {
    product: Product
}

export default function ProductCard2({ product }: CardProduct2Props) {
    return (

        < div className='card2'>
            <div>
                <Link to={`/product/${product.id}`}>
                    <div className="card-body2" >
                        <img src={product.image} className="card-img-top" alt="image" />
                    </div>
                </Link>
            </div>
            <div >
                <div className="container_desc2">
                    <Link to={`/product/${product.id}`}>
                        <p className="card-title">{product.title}</p>
                    </Link>
                </div>
                <div className="containerPrice2">
                    {product.price.discount === 0 ?
                        (<h6 className="price">{product.price.price}</h6>)
                        : (<div className="d-flex">
                            <h6 className="priceDiscount">{product.price.price}</h6>
                            <h6 className="price">{product.priceDiscount}</h6>
                        </div>)}
                </div>
            </div>
        </div >
    );
}

