import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import HomePage from './containers/HomePage'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends Component {

  state = {
    currentUser: null
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    }, () => {
      localStorage.setItem("user_id", this.state.currentUser.id)
      this.props.history.push(this.props.location.pathname)})
  }

  logOut = () => {
    localStorage.removeItem("user_id")
    this.setState({
      currentUser: null
    }, () => this.props.history.push("/login"))
  }

  componentDidMount = () => {
    const userId = localStorage.getItem("user_id")

    if (userId){
      fetch("http://localhost:3000/auto_login", {
        headers: {"Authorization": userId}
      })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.errors){
          alert(resp.errors)
        } else {this.setCurrentUser(resp)}
        }
      )
    }
  }

  render(){
  return <React.Fragment>
    <Header currentUser={this.state.currentUser}
    logOut={this.logOut}/>
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
