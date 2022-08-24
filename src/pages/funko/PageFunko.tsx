import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Filter from "../../components/filters/Filter";
import ContainerCardHome from "../../components/home/ContainerCardHome";
import Paginator from "../../components/Paginator";
import Range from "../../components/Range";
import { FilterState } from "../../interfaces/filter";
import { CategoryProduct, QuotaProduct, Toy } from "../../interfaces/products";
import { Paginate } from "../../models/Paginate";
import { Product } from "../../models/Product";
import { getAllProductsPaginates, getProductsByCategory } from "../../services/db-service";
import { filterByPrice, getFilterByQuota, getFilterDiscount } from "../../services/product-service";

interface PageFunkoProps {

}

const INITIAL_STATE_FILTER = { value: 0, name: "" }

const PageFunko: React.FunctionComponent<PageFunkoProps> = () => {
    const { page } = useParams()
    let currentPage: number = Number(page)
    const [max, setMax] = useState<number>(10000)
    const [min, setMin] = useState<number>(1)
    const [funkos, setFunkos] = useState<Array<Product> | undefined>(undefined)
    const [response, setResponse] = useState<Paginate>()
    const [quotasSearch, setQuotasSearch] = useState<boolean>(false)
    const [discountSearch, setDiscountSearch] = useState<boolean>(false)
    const [quotas, setCuotas] = useState<FilterState>(INITIAL_STATE_FILTER)
    const [discount, setDiscount] = useState<FilterState>(INITIAL_STATE_FILTER)
    const [filterSelected, setFilterSelected] = useState<number>(-1)
    const limit = 3

    const getFunkos = () => {
        if (filterSelected === -1) {
            let funkos: Array<Product> | undefined = getProductsByCategory({ toy: Toy.FUNKO })
            let filteredProducts: Array<Product> = filterByPrice(min, max, funkos)
            setFunkos(funkos)
            setResponse(getAllProductsPaginates(limit, currentPage, filteredProducts))
        }
        if (filterSelected !== -1 && quotasSearch) {
            //SELECCIONO FILTRAR POR CUOTAS
            let funkos: Array<Product> | undefined = getProductsByCategory({ toy: Toy.FUNKO })
            let filteredProducts: Array<Product> | undefined;
            if (funkos) {
                filteredProducts = getFilterByQuota(quotas.value, funkos)
            }
            setFunkos(funkos)
            if (filteredProducts) {
                setResponse(getAllProductsPaginates(limit, currentPage, filteredProducts))
            }
        }

        if (filterSelected !== -1 && discountSearch) {
            //SELECCIONO FILTRAR POR DESCUENTOS
            console.log('  //SELECCIONO FILTRAR POR DESCUENTOS')
            let funkos: Array<Product> | undefined = getProductsByCategory({ toy: Toy.FUNKO })
            let filteredProducts: Array<Product> | undefined;
            if (funkos) {
                filteredProducts = getFilterDiscount(discount.value, funkos)
            }
            setFunkos(funkos)
            if (filteredProducts) {
                setResponse(getAllProductsPaginates(limit, currentPage, filteredProducts))
            }
        }
    }
    console.log(response)
    useEffect(() => {
        getFunkos()
    }, [page, max, min, quotas, discount, filterSelected, quotasSearch, discountSearch])

    return (<>
        <Range setMax={setMax} setMin={setMin} max={max} min={min} />
        <Filter quotas={quotas} setCuotas={setCuotas} discount={discount} setDiscount={setDiscount}
            filterSelected={filterSelected} setFilterSelected={setFilterSelected}
            setDiscountSearch={setDiscountSearch} setQuotasSearch={setQuotasSearch}
        />
        {
            response && response.products.length > 0 ? < div>
                <ContainerCardHome products={response.products} key={'pageFunko'} />
                <Paginator currentPage={currentPage} pageCount={response?.total_pages} justify={""} />
            </div> : <h2>No hay productos para esos filtros</h2>
        }
    </>);
}

export default PageFunko;