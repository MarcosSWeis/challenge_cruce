import React from "react";

interface NotFoundProps {

}

const NotFound: React.FunctionComponent<NotFoundProps> = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
        </div>);
}

export default NotFound;