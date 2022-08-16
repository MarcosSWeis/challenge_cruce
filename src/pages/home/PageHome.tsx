import React from "react";
import BtnSee from "../../components/BtnSee";
import HelpTouchPoster from "../../components/HelpTouchPoster";
import Home from "../../components/home/Home";
import Range from "../../components/Range";
import Search from "../../components/Search";

interface PageHomeProps {

}

const PageHome: React.FunctionComponent<PageHomeProps> = () => {
    return (
        <>
            <h1>Page Home</h1>
            <Home />
            <BtnSee textRender="Ver colección" />
            <Range />
        </>
    );
}

export default PageHome;