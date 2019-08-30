import React, { Component } from 'react';
import WelcomePage from './Welcome/WelcomePage';
import Header from './components/Header';
import Main from './Main';
import Footer from './components/Footer';

// const accessToken = sessionStorage.getItem('accessToken');
const accessToken = 'aaaa';

const App = () => {
    const showHeaderMenu = !!accessToken;
    
    return (
        <>
            <Header showMenu={showHeaderMenu} />
            <Main accessToken={accessToken} />
            <Footer />
        </>
    );
}

export default App;
