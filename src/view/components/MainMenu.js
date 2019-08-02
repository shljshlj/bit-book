import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const MainMenu = (props) => {
    const getClassName = path => {
        return props.location.pathname === path ? 'active item' : 'item'; 
    }

    return (
        <div className="right menu">
            <Link to="/" className={getClassName('/')}>Feed</Link>
            <Link to="/people" className={getClassName('/people')}>People</Link>
            <Link to="/profile" className={getClassName('/profile')}>Profile</Link>
        </div>
    );
};

export default withRouter(MainMenu);