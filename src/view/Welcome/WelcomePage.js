import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';


class WelcomePage extends Component {
    state = {
        login: true
    }

    handleClick = event => {
        const name = event.target.dataset.name;

        if (name === 'login' && !this.state.login) this.setState({ login: true });
        else if (name === 'register' && this.state.login) this.setState({ login: false });
    }

    render() {
        const { login } = this.state;
        const loginClassName = login ? 'active item' : 'item';
        const registerClassName = login ? 'item' : 'active item';

        return (
            <div className="ui container">
                <div className="ui top attached tabular menu">
                    <div onClick={this.handleClick} className={registerClassName} data-name="register">
                        Register
                    </div>
                    <div onClick={this.handleClick} className={loginClassName} data-name="login">
                        Login
                    </div>
                </div>
                <div className="ui bottom attached segment">
                    {login ? <Login /> : <Register />}
                </div>
            </div>

        );
    }
}

export default WelcomePage;
