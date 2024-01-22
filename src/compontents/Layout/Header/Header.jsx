import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to={`/`} className="header__title">The Meal</Link>
        </div>
    );
};

export default Header;