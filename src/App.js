import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import HomePage from './containers/HomePage'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";



class App extends Component {

  state = {
    currentUser: null,
    addImageClicked: false
  }

addImageClicked = () => {
  this.setState({addImageClicked: true})
}

  login = (resp) => {
    this.setState({
      currentUser: resp.user
    }, () => {
      localStorage.setItem("Token", resp.token)
      this.props.history.push("/home")})
  }

  setCurrentUser = (resp) => {
    this.setState({
      currentUser: resp.user
    }, () => {
      this.props.history.push("/home")}) // this.props.location.pathname for specific path
  }

  logOut = () => {
    localStorage.removeItem("Token")
    this.setState({
      currentUser: null
    }, () => this.props.history.push("/login"))
  }

  //Auto Login
  componentDidMount = () => {
    const token = localStorage.getItem("Token")

    if (token){
      fetch("http://localhost:3000/auto_login", {
        headers: {"Authorization": token}
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
    <Header addImageClicked={this.addImageClicked} currentUser={this.state.currentUser}
    logOut={this.logOut}/>
    {this.state.currentUser ?
      <Switch>
      <Route path="/home" render={() => <HomePage addImageClicked={this.state.addImageClicked} currentUser={this.state.currentUser}/>}/>
      {/* <Route path="*" render={() => <NotFound/>}/> */}
      </Switch>
    :
    <Switch>
    <Route path="/login" render={(routerProps)=> <LoginForm
    {...routerProps} login={this.login}/>}/>
    <Route path="/signup" render={(routerProps)=> <SignUpForm
    {...routerProps} login={this.login}/>}/>
    <Route path="*" render={() => (<Redirect to="/login" />)} /> 
    </Switch>
    }
    </React.Fragment>
  }
}

export default App;
