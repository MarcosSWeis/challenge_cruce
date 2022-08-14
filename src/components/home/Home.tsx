import React, { useEffect, useState } from "react";
import { DB } from "../../db/DbProducts";
import { getRandom } from "../../helpers/helper";
import { CategoriesProduct, IProduct, QuotaProduct } from "../../interfaces/products";
import { Funko } from "../../models/Funko";
import { Product } from "../../models/Product";
import { User } from "../../models/User";
import { ENUM_IMAGES_FUNKOS, IMAGES_FUNKOS } from "../../services/importImages";

import Card from "../CardHome";

interface HomeProps {

}
interface HomeStates {
    products: Array<Product>
}

const Home: React.FunctionComponent<HomeProps> = () => {

    const [products, setProducts] = useState<HomeStates['products']>([])

    function getProducts(): void {
        setProducts(DB.getAllProducts())
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            {products.length > 0 ?
                (
                    <div className="wrapper">
                        {products.map((product: Product) => <Card product={product} key={product.id} />)}
                    </div>
                ) :
                (
                    <h1>NO hay productos</h1>
                )
            }
        </>
    );
}

export default Home;