import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import HomePage from './containers/HomePage'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

import { BrowserRouter, Router, Route, Switch } from "react-router-dom";


class App extends Component {

  
  render(){
  return <React.Fragment>
    <Header/>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" render={() => <HomePage/>}/>
    <Route path="/login" component={LoginForm}/>
    <Route path="/signup" component={SignUpForm}/>
    <Route path="*" component={NotFound}/>
    </Switch>
    </BrowserRouter>
    </React.Fragment>
  }
}

export default App;
