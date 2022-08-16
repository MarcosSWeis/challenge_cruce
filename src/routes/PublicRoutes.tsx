import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/notfound/NotFound";
import PageHome from "../pages/home/PageHome";
import PageLogin from "../pages/login/PageLogin";
import PageSearch from "../pages/search/PageSearch";
import ToyRoutes from "./ToyRoutes";

interface PublicRoutesProps {

}

const PublicRoutes: React.FunctionComponent<PublicRoutesProps> = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<PageHome />} />
                <Route path='search' element={<PageSearch />} />
                <Route path='juguetes/*' element={<ToyRoutes />} />
                <Route path='login' element={<PageLogin />} />

                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default PublicRoutes;