import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContainerCardHome from "../../components/home/ContainerCardHome";
import Paginator from "../../components/Paginator";
import { Toy } from "../../interfaces/products";
import { Paginate } from "../../models/Paginate";
import { Product } from "../../models/Product";
import { DB } from "../../services/createdDB";

interface DinosaurProps {

}

const PageDinosaur: React.FunctionComponent<DinosaurProps> = () => {

    const { page } = useParams()
    const limit = 3
    let currentPage: number = Number(page)
    const [response, setResponse] = useState<Paginate>()
    const getDinos = (limit: number, page: number,) => {
        let dinos: Array<Product> | undefined = DB.getProductsByCategory({ toy: Toy.DINOSAURIO })
        if (dinos) {
            setResponse(DB.getAllProductsPaginates(limit, page, dinos))
        }
    }
    useEffect(() => {
        getDinos(limit, currentPage)
    }, [page])
    return (<>
        <h1>/juguetes/dinos/1</h1>

        {
            response && < div>
                <ContainerCardHome products={response.products} key={'pageDinos'} />
                <Paginator currentPage={currentPage} pageCount={response?.total_pages} justify={""} />
            </div>
        }
    </>);
}

export default PageDinosaur;