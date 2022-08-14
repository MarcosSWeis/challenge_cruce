import React from "react";
import { Product } from "../../models/Product";
import Card from "./CardHome";

interface IContainerCardHomeProps {
    products: Array<Product>
}

const ContainerCardHome: React.FunctionComponent<IContainerCardHomeProps> = ({ products }) => {
    return (<div className="wrapper">
        {products.map((product: Product) => <Card product={product} key={product.id} />)}
    </div>);
}

export default ContainerCardHome;