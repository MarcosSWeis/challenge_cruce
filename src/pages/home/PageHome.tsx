import React from "react";
import HelpTouchPoster from "../../components/HelpTouchPoster";
import Home from "../../components/home/Home";
import Search from "../../components/Search";

interface PageHomeProps {

}

const PageHome: React.FunctionComponent<PageHomeProps> = () => {
    return (
        <>
            <h1>Page Home</h1>
            <Home />
        </>
    );
}

export default PageHome;