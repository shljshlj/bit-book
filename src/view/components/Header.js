import React from 'react';
import MainMenu from './MainMenu';

import './Header.css';

const Header = () => {
    return (
        <header className="ui huge stackable borderless blue inverted menu site-header">
            <div className="ui container site-header__content">
                <div className="header item">BitBook</div>
                <MainMenu />
            </div>
        </header>
    );
};

export default Header;
