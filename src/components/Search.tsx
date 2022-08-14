import React, { useContext, useState, Dispatch } from 'react';
import lens from '../assets/searchButton.svg'
import { AppContext } from "../context/AppContext";
import { DB } from "../db/DbProducts";
import { Product } from "../models/Product";


interface SearchProps {
    setResultSearch: React.Dispatch<React.SetStateAction<Product[]>>
}



const Search: React.FunctionComponent<SearchProps> = ({ setResultSearch }) => {

    const { setSearch } = useContext(AppContext)
    const [toSearch, setToSearch] = useState("")

    //  const [search, setSearch] = useState("")
    function handlerSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSearch(toSearch)
    }
    return (
        <form action="" id="formSearch" className="input-group mt-3" onSubmit={handlerSearch}>
            <button className="btnSearch" >
                <span className="input-group-text" id="addon-wrapping"><img src={lens} alt="" /></span>
            </button>
            <input type="text" placeholder="¿Que estas buscando?" className="form-control" name="search" onChange={(event) => setToSearch(event.target.value)} />
        </form>
    );
}

export default Search;