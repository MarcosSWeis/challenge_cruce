import React from 'react';
import { Link } from 'react-router-dom'

interface MenuProps {
    text: string,
    link: string
}

const Menu: React.FunctionComponent<MenuProps> = ({ text, link }) => {
    return (
        <li className="nav-item">
            <Link to={link}
                className="nav-link text-dark mx-3 text-center"
                style={{ transform: "scale(1.2)" }}
            >
                {text}
            </Link>
        </li>
    );
}

export default Menu;