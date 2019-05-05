import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import HomePage from './containers/HomePage'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

import { BrowserRouter, Router, Route, Switch } from "react-router-dom";


class App extends Component {

  state = {
    currentUser: null
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    }, () => {
      localStorage.setItem("user_id", this.state.currentUser.id)
      this.props.history.push("/home")})
  }

  render(){
  return <React.Fragment>
    <Header/>
    {/* <BrowserRouter> */}
    <Switch>
  
    <Route path="/login" render={(routerProps)=> <LoginForm
    {...routerProps} setCurrentUser={this.setCurrentUser}/>}/>
    
    <Route path="/signup" render={(routerProps)=> <SignUpForm
    {...routerProps} setCurrentUser={this.setCurrentUser}/>}/>
    
    <Route path="/home" render={() => <HomePage/>}/>
    <Route path="*" render={() => <NotFound/>}/>
    </Switch>
    {/* </BrowserRouter> */}
    </React.Fragment>
  }
}

export default App;
