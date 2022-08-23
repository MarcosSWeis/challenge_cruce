import React from "react";
import { Outlet } from "react-router-dom";
import Range from "../../components/Range";
import ToyNavbar from "../../components/toyNavBar/ToyNavBar";

interface PageToyProps {

}

const PageToy: React.FunctionComponent<PageToyProps> = () => {
    return (<>
        <ToyNavbar />
        <Outlet />
    </>
    );
}

export default PageToy;