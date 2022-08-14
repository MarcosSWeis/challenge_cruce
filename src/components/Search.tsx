import React, { useContext, useState } from 'react';
import lens from '../assets/searchButton.svg'
import { AppContext } from "../context/AppContext";
import { useNavigate } from 'react-router-dom';


interface SearchProps {
}

const Search: React.FunctionComponent<SearchProps> = () => {
    const { setSearching } = useContext(AppContext)


    const [toSearch, setToSearch] = useState("")
    const navigate = useNavigate()


    //  const [search, setSearch] = useState("")
    function handlerSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSearching(toSearch)
        navigate(`/search?${toSearch}`)
    }
    return (<>
        <form action="" id="formSearch" className="input-group mt-3" onSubmit={handlerSearch}>
            <button className="btnSearch" >
                <span className="input-group-text" id="addon-wrapping"><img src={lens} alt="" /></span>
            </button>
            <input type="text" placeholder="¿Que estas buscando?" className="form-control" name="search" onChange={(event) => setToSearch(event.target.value)} />
        </form>

    </>
    );
}

export default Search;