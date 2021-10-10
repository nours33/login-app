import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
  
import './index.css';

import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login'

const Root = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/pseudo/:username" component={App} />
          {/* <Route component={Notfound} /> */}
      </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
