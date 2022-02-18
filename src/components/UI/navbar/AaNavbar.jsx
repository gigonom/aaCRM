import React from 'react';
import {Link} from "react-router-dom";

const AaNavbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="/arkapp/crm"/>
            </div>
            <div className="navbar_links">
                <Link to="/clients">Клиенты</Link>
                <Link to="/about">Информация</Link>
            </div>
        </div>
    );
};

export default AaNavbar;