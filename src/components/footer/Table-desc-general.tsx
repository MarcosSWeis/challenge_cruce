import React from "react";
import { Link } from "react-router-dom";
import { TbGeneral } from "../../interfaces/table";


interface TableDescGeneralProps extends TbGeneral {

}

const TableDescGeneral: React.FunctionComponent<TableDescGeneralProps> = ({ title, link }) => {
    return (

        <tbody>
            <Link to={link} className="text-decoration-none">
                <td className="text-decoration-none table_td">{title.toUpperCase()}</td>
            </Link>
        </tbody>

    );
}

export default TableDescGeneral;