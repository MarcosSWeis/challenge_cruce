import React from "react";
import { Route, Routes } from "react-router-dom";
import PageHome from "../pages/home/PageHome";
import PageSearch from "../pages/search/PageSearch";

interface PublicRoutesProps {

}

const PublicRoutes: React.FunctionComponent<PublicRoutesProps> = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<PageHome />} />
                <Route path='search' element={<PageSearch />} />
                <Route path='novedades/:id' element={<h1></h1>} />
                <Route path='testimonios' element={<h1></h1>} />
                <Route path='contacto' element={<h1></h1>} />

            </Routes>

        </>
    );
}

export default PublicRoutes;