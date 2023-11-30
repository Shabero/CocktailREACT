import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'header '}>
            <div className={"container d-flex justify-content-between p-4 text-decoration-none"}>
                <Link to={"/"} className={'btn btn-outline-dark'}>Home</Link>
                <Link to={"/search"} className={'btn btn-outline-dark'}>Search</Link>
            </div>
        </header>
    )
}

export default Header