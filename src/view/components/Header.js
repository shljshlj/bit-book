import React from 'react';
import MainMenu from './MainMenu';

const Header = () => {
    return (
        <header className="ui huge stackable borderless menu">
            <div className="ui container">
                <div className="header item">BitBook</div>
                <MainMenu />
            </div>
        </header>
    );
};

export default Header;
