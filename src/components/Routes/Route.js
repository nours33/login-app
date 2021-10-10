import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from '../App/App';
import Login from './../Login/Login'

class Routes extends Component {

    state = {
        user: JSON.parse(localStorage.getItem('user'))
    }

    render() {
        console.log(this.state.user)
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    {this.state.user &&

                        <Route path="/pseudo/:username" component={App} />
                    }
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;