import React, { useContext, useReducer, useState, Dispatch } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import HelpTouchPoster from '../components/HelpTouchPoster';
import Home from '../components/home/Home';
import NavBar from '../components/navBar/NavBar';
import Search from '../components/Search';
import { AppContext } from '../context/AppContext';

import { Product } from '../models/Product';
interface IAppRouterProps {

}

const AppRouter: React.FunctionComponent<IAppRouterProps> = () => {
    const [r, setResultSearch] = useState<Array<Product>>([])
    // console.log(resultSearch) */
    const { search } = useContext(AppContext)

    const { textToSearch } = search
    console.log(textToSearch, 1211)
    return (
        <Router>
            <NavBar />
            <HelpTouchPoster />
            <Search setResultSearch={setResultSearch} />
            <Home />
        </Router>

    );
}

export default AppRouter;