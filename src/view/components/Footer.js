import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="ui container">
                &copy; {new Date().getFullYear()} Visnja
            </div>
        </footer>
    );
};

export default Footer;