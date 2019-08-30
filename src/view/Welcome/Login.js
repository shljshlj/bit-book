import React, { Component } from 'react';


class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    onInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="ui form">
                <div className="field">
                    <label>Email</label>
                    <input onChange={this.onInputChange} value={this.state.email} type="email" name="email" placeholder="Email" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input onChange={this.onInputChange} value={this.state.password} type="password" name="password" placeholder="Password" />
                </div>
                <button disabled={!this.validateForm()} className="ui button" type="submit">Login</button>
            </form>
        );
    }
}

export default Login;