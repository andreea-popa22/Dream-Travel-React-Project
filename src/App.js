import React, {Component, useEffect, useState} from 'react';
import {
    Route, BrowserRouter as Router, Switch, Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Favorites from "./pages/Favorites";
import Destinations from './pages/Destinations';
import {auth} from './services/firebaseConfig';
import "./styles.css";
import {render} from "react-dom";

function PrivateRoute({component: Component, authenticated, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authenticated === true
                ? <Component {...props} />
                : <Redirect to='/login'/>}
        />
    )
}

function PublicRoute({component: Component, authenticated, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authenticated === false
                ? <Component {...props} />
                : <Redirect to='/profile'/>}
        />
    )
}

function App() {

    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true);
    useEffect(() =>
    {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setAuthenticated(true)
                setLoading(false)
            } else {
                setAuthenticated(false)
                setLoading(false)
            }
        })

    })
        return loading.valueOf() === true ? <h2>Loading...</h2> : (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/destinations" authenticated={authenticated} component={Destinations}/>
                    <PrivateRoute path="/profile" authenticated={authenticated} component={Profile}/>
                    <PrivateRoute path="/favorites" authenticated={authenticated} component={Favorites}/>
                    <PublicRoute path="/signup" authenticated={authenticated} component={Signup}/>
                    <PublicRoute path="/login" authenticated={authenticated} component={LoginForm}/>
                </Switch>
            </Router>
        );
}
export default App;
