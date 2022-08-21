import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContainerCardHome from "../../components/home/ContainerCardHome";
import Paginator from "../../components/Paginator";
import { CategoryProduct, Toy } from "../../interfaces/products";
import { Paginate } from "../../models/Paginate";
import { Product } from "../../models/Product";
import { getAllProductsPaginates, getProductsByCategory } from "../../services/db-service";

interface PageFunkoProps {

}

const PageFunko: React.FunctionComponent<PageFunkoProps> = () => {
    const { page } = useParams()
    const limit = 3
    let currentPage: number = Number(page)
    const [response, setResponse] = useState<Paginate>()
    const getFunkos = (limit: number, page: number,) => {
        let funkos: Array<Product> | undefined = getProductsByCategory({ toy: Toy.FUNKO })
        if (funkos) {
            setResponse(getAllProductsPaginates(limit, page, funkos))
        }
    }
    useEffect(() => {
        getFunkos(limit, currentPage)
    }, [page])
    console.log(response)
    return (<>
        <h1>/juguetes/funkos/1</h1>

        {
            response && < div>
                <ContainerCardHome products={response.products} key={'pageFunko'} />
                <Paginator currentPage={currentPage} pageCount={response?.total_pages} justify={""} />
            </div>
        }
    </>);
}

export default PageFunko;