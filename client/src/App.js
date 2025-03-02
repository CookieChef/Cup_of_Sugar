import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import View from './components/viewpage/View';
import Calendar from './components/calendar/calendar';
import Profile from './components/profile/profile';
import Blog from './components/blog/blog';
import Sos from './components/sos/sos';
import Item from './components/item/item';

import Footer from './components/layout/Footer';

import ChatDisplay from './components/chat/chat';




if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);

    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = "./login";
    }
}

class App extends Component {
   
    render() {
      
        return (
            
            <Provider store={store}>
                
                <Router>
                    <div className="App">
                        
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                       
                        <Switch>
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            <PrivateRoute exact path="/viewpage" component={View} />
                            <PrivateRoute exact path="/calendar" component={Calendar} />
                            <PrivateRoute exact path="/chat" component={ChatDisplay} />
                            <PrivateRoute exact path="/profile" component={Profile} />
                            <PrivateRoute exact path="/blog" component={Blog} />
                            <PrivateRoute exact path="/sos" component={Sos} />
                            <PrivateRoute exact path="/item" component={Item} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
