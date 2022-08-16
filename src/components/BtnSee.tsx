import React from "react";

interface BtnSeeProps {
    textRender: string
}

const BtnSee: React.FunctionComponent<BtnSeeProps> = ({ textRender }) => {
    return (
        <div className="btnSee ">
            <button className="">
                {textRender}
            </button>
        </div>
    );
}

export default BtnSee;