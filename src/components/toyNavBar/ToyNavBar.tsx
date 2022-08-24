import React from "react";
import { Link } from "react-router-dom";

interface ToySelectorProps {

}

const ToySelector: React.FunctionComponent<ToySelectorProps> = () => {
    return (
        <ul className="nav justify-content-center" id="NavBarToy">
            <li className="nav-item">
                <Link to={'/juguetes/funko/1'} className="nav-link"  >Funkos</Link>
            </li>
            <li className="nav-item">
                <Link to={'/juguetes/dinosaurio/1'} className="nav-link" >Dinosaurios</Link>
            </li>
        </ul>

    );
}

export default ToySelector;