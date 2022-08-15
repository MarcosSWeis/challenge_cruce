import React from "react";
import { Outlet, Route, Routes } from "react-router-dom"
import PageFunko from "../pages/funko/PageFunko";
import PageToy from "../pages/Toy/PageToy";

interface ToyRoutesProps {

}

const ToyRoutes: React.FunctionComponent<ToyRoutesProps> = () => {
    return (

        <Routes>
            <Route path='/' element={<PageToy />}>
                <Route path='funkos/:page' element={<PageFunko />} />
                <Route path='dinosaurios/:page' element={<h1>dinosaurios</h1>} />
                <Route path='jansports/:page' element={<h1>jansport</h1>} />
            </Route>
        </Routes>
    );
}

export default ToyRoutes;