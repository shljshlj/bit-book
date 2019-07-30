import React from 'react';

const Header = () => {
    return (
        <header className="ui huge stackable borderless menu">
            <div className="ui container">
                <div className="header item">BitBook</div>
                <div className="right menu">
                    <a href="#" className="item">Feed</a>
                    <a href="#" className="item">People</a>
                    <a href="#" className="item">Profile</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
