import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    return (
        <div className="right menu">
            <Link to="/" className="item">Feed</Link>
            <Link to="/people" className="item">People</Link>
            <Link to="/profile" className="item">Profile</Link>
        </div>
    );
};

export default MainMenu;