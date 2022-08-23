import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Filter from "../../components/filters/Filter";
import ContainerCardHome from "../../components/home/ContainerCardHome";
import Paginator from "../../components/Paginator";
import Range from "../../components/Range";
import { FilterState } from "../../interfaces/filter";
import { Toy } from "../../interfaces/products";
import { Paginate } from "../../models/Paginate";
import { Product } from "../../models/Product";
import { getAllProductsPaginates, getProductsByCategory } from "../../services/db-service";
import { filterByPrice, getFilterByQuota, getFilterDiscount } from "../../services/product-service";

interface DinosaurProps {

}
const INITIAL_STATE_FILTER = { value: 0, name: "" }
const PageDinosaur: React.FunctionComponent<DinosaurProps> = () => {

    const { page } = useParams()
    const limit = 3
    let currentPage: number = Number(page)
    const [response, setResponse] = useState<Paginate>()
    const [dinos, setDinos] = useState<Array<Product> | undefined>(undefined)
    const [quotasSearch, setQuotasSearch] = useState<boolean>(false)
    const [discountSearch, setDiscountSearch] = useState<boolean>(false)
    const [max, setMax] = useState<number>(10000)
    const [min, setMin] = useState<number>(1)
    const [quotas, setCuotas] = useState<FilterState>(INITIAL_STATE_FILTER)
    const [discount, setDiscount] = useState<FilterState>(INITIAL_STATE_FILTER)
    const [filterSelected, setFilterSelected] = useState<number>(-1)


    // const getDinos = () => {
    //     let dinos: Array<Product> | undefined = getProductsByCategory({ toy: Toy.DINOSAURIO })
    //     let filteredProducts: Array<Product> = filterByPrice(min, max, dinos)
    //     setDinos(dinos)
    //     setResponse(getAllProductsPaginates(limit, currentPage, filteredProducts))
    // }

    const getDinos = () => {
        if (filterSelected === -1) {
            let dinos: Array<Product> | undefined = getProductsByCategory({ toy: Toy.DINOSAURIO })
            let filteredProducts: Array<Product> = filterByPrice(min, max, dinos)
            setDinos(dinos)
            setResponse(getAllProductsPaginates(limit, currentPage, filteredProducts))
        }
        if (filterSelected !== -1 && quotasSearch) {
            //SELECCIONO FILTRAR POR CUOTAS
            let dinos: Array<Product> | undefined = getProductsByCategory({ toy: Toy.DINOSAURIO })
            let filteredProducts: Array<Product> | undefined;
            if (dinos) {
                filteredProducts = getFilterByQuota(quotas.value, dinos)
            }
            setDinos(dinos)
            if (filteredProducts) {
                setResponse(getAllProductsPaginates(limit, currentPage, filteredProducts))
            }
        }

        if (filterSelected !== -1 && discountSearch) {
            //SELECCIONO FILTRAR POR DESCUENTOS
            console.log('  //SELECCIONO FILTRAR POR DESCUENTOS')
            let dinos: Array<Product> | undefined = getProductsByCategory({ toy: Toy.DINOSAURIO })
            let filteredProducts: Array<Product> | undefined;
            if (dinos) {
                filteredProducts = getFilterDiscount(discount.value, dinos)
            }
            setDinos(dinos)
            if (filteredProducts) {
                setResponse(getAllProductsPaginates(limit, currentPage, filteredProducts))
            }
        }
    }

    useEffect(() => {
        getDinos()
    }, [page, max, min, quotasSearch, discountSearch, quotas, discount, filterSelected,])
    return (<>
        <div>
            <Range setMax={setMax} setMin={setMin} max={max} min={min} />
            <Filter quotas={quotas} setCuotas={setCuotas} discount={discount} setDiscount={setDiscount}
                filterSelected={filterSelected} setFilterSelected={setFilterSelected}
                setDiscountSearch={setDiscountSearch} setQuotasSearch={setQuotasSearch}
            />
        </div>
        {
            response && < div>
                <ContainerCardHome products={response.products} key={'pageDinos'} />
                <Paginator currentPage={currentPage} pageCount={response?.total_pages} justify={""} />
            </div>
        }
    </>);
}

export default PageDinosaur;