import React from "react";
import { Link } from "react-router-dom";
import { TbSocNet } from "../../interfaces/table";


interface TableSocialNetworkProps extends TbSocNet {

}

const TableSocialNetwork: React.FunctionComponent<TableSocialNetworkProps> = ({ nameSocNet, classNameIcon, link }) => {
    return (

        <tbody>
            <Link to={link}>
                <td className="table_td">{nameSocNet.toUpperCase()}</td>
                <td><i className={`${classNameIcon} table_i`}></i></td>
            </Link>
        </tbody>

    );
}

export default TableSocialNetwork;