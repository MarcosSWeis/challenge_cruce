import React from "react";
import { Outlet, Route, Routes } from "react-router-dom"
import PageDinosaur from "../pages/dino/PageDinosaur";
import PageFunko from "../pages/funko/PageFunko";
import PageFilter from "../pages/PageFilter";
import PageToy from "../pages/Toy/PageToy";

interface ToyRoutesProps {

}

const ToyRoutes: React.FunctionComponent<ToyRoutesProps> = () => {
    return (

        <Routes>
            <Route path='/' element={<PageToy />}>
                <Route path='funko/:page' element={<PageFunko />} />
                <Route path='dinosaurio/:page' element={<PageDinosaur />} />
            </Route>
        </Routes>
    );
}

export default ToyRoutes;