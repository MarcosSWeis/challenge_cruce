import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Product } from "../../models/Product";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ContainerCardHome from "./ContainerCardHome";
import { DB } from "../../services/createdDB";
import { IMAGES_DINO } from "../../services/importImagesDinosaurios";


interface HomeProps {

}
interface HomeStates {
    products: Array<Product>
}
const Home: React.FunctionComponent<HomeProps> = () => {

    const [products, setProducts] = useState<HomeStates['products']>([])

    console.log(IMAGES_DINO)
    function getProducts(): void {
        setProducts(DB.getAllProducts())
        console.log(DB.getLastId())
    }
    console.log(products)
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            {products.length > 0 && <ContainerCardHome products={products} />}
        </>
    );
}

export default Home;

