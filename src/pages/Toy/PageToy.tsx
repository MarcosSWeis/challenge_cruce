import React from "react";
import { Outlet } from "react-router-dom";
import ToySelector from "../../components/toy/ToyNavBar";

interface PageToyProps {

}

const PageToy: React.FunctionComponent<PageToyProps> = () => {
    return (<>
        <ToySelector />
        <Outlet />
    </>
    );
}

export default PageToy;