import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import AuthService from '../../API/auth.service';

import FieldCustom from '../FieldCustom/FieldCustom';

import './Login.css'

class Login extends Component {

    state = {
        username: '',
        password: '',
        goToApp: false,
        message: '',
    }

    handleChangeUsername = event => {
        const username = event.target.value;
        this.setState({ username })
    }
    handleChangePassword = event => {
        const password = event.target.value;
        this.setState({ password })
    }

    handleLogin = event => {
        event.preventDefault();

        AuthService.login(this.state.username, this.state.password).then(response => {
            
            if (response.token) {
                this.setState({ goToApp: true })
            }
            else {
                this.setState({message: response.message})
            }
        })


    }

    render() {
        if (this.state.goToApp) {
            return <Redirect push to={`/pseudo/${this.state.username}`} />
        }

        return (
            <form
                onSubmit={this.handleLogin}
            >

                <div className="container-login">
                    <div className="title">
                        <h2>
                            Login
                        </h2>
                    </div>
                    <div className="message-error">
                        {this.state.message}
                    </div>
                    <div className="container-inputs">

                        <FieldCustom
                            type="text"
                            placehoder="username"
                            required={true}
                            onChange={this.handleChangeUsername}
                        />
                        <FieldCustom
                            type="password"
                            placehoder="password"
                            required={true}
                            onChange={this.handleChangePassword}
                        />
                    </div>
                    <div className="container-button">
                        <button type='submit'>Connexion</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Login;