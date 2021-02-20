import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import Signup from './components/Signup'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={App} />
            </Switch>        
        </BrowserRouter>
    )
}

export default Routes
