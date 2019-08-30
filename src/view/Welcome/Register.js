import React, { Component } from 'react';
import { authService } from '../../services/authService';


class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    validateForm = () => {
        return true;
        // return this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit = async event => {
        event.preventDefault();

        // const {...data} = this.state;
        // const token = await authService.registerUser(data);

        console.log(this.props)
        // this.props.history.push('/');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input onChange={this.handleChange} value={this.state.name} type="text" name="name" placeholder="Full name" />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input onChange={this.handleChange} value={this.state.email} type="email" name="email" placeholder="Email" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input onChange={this.handleChange} value={this.state.password} type="password" name="password" placeholder="Password" />
                </div>
                <button disabled={!this.validateForm()} className="ui button" type="submit">Sign Up</button>
            </form>
        );
    }
}

export default Register;