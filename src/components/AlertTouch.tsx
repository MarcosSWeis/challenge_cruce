import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect } from "react";
interface HelpTouchPosterProps {

}

const AlertTouch: React.FunctionComponent<HelpTouchPosterProps> = () => {
    let closeHelpTouch: Element | null
    function handlerCloseHelpTouch() {
        closeHelpTouch?.classList.add('d-none')
    }
    useEffect(() => {
        closeHelpTouch = document.querySelector('.helpTouch')
    }, [])
    return (
        <div className="helpTouch">
            <div className="marquee">
                <p>Mantené pulsado cualquier artículo para agregarlo al carrito</p>
            </div>
            <button className="closeHelpTouch" onClick={handlerCloseHelpTouch}>X</button>
        </div>
    );
}

export default AlertTouch;