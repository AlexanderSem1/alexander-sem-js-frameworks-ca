import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <nav className="[ navbar navbar-dark ]">
            <ul className="[ nav navbar-nav  ]">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    )
};

export default Navigation;

