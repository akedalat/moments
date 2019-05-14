import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import HomePage from './containers/HomePage'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import { Route, Switch } from "react-router-dom";



class App extends Component {

  state = {
    currentUser: null,
    addImageClicked: false,
    currentUserClicked: false,
    usersClicked: false
  }

  currentUserClicked = () => {
    this.setState({currentUserClicked: true})
  }
  
  cancelCurrentUserClicked = () => {
    this.setState({currentUserClicked: false})
  }

  usersClicked = () => {
    this.setState({usersClicked: true})
  }
  
  cancelUsersClicked = () => {
    this.setState({usersClicked: false})
  }

  addImageClicked = () => {
  this.setState({addImageClicked: true})
}

  cancelImageClicked = () => {
  this.setState({addImageClicked: false})
}

  login = (resp) => {
    this.setState({
      currentUser: resp.user
    }, () => {
      localStorage.setItem("Token", resp.token)
      this.props.history.push("/")})
  }

  setCurrentUser = (resp) => {
    this.setState({
      currentUser: resp.user
    }, () => {
      this.props.history.push(this.props.location.pathname)}) // this.props.location.pathname for specific path
  }

  logOut = () => {
    localStorage.removeItem("Token")
    this.setState({
      currentUser: null
    }, () => this.props.history.push("/login"))
  }

  //Auto Login
  componentDidMount = () => {
    this.updateCurrentUser()
  }

  updateCurrentUser = () => {
    const token = localStorage.getItem("Token")
    if (token){
      return fetch("http://localhost:3000/auto_login", {
        headers: {"Authorization": token}
      })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.errors){
          alert(resp.errors)
        } else {
          this.setCurrentUser(resp)
        }
        }
      )
    }
  }

  render(){
  return <React.Fragment>
    <Header 
      currentUser={this.state.currentUser}
      logOut={this.logOut}
      addImageClicked={this.addImageClicked} 
      currentUserClicked={this.currentUserClicked}
      usersClicked={this.usersClicked}
      cancelUsersClicked={this.cancelUsersClicked}
      cancelCurrentUserClicked={this.cancelCurrentUserClicked}
      cancelImageClicked={this.cancelImageClicked}/>

    {this.state.currentUser ?
      <Switch>
        
      <Route path="/" exact render={() => <HomePage
      updateCurrentUser={this.updateCurrentUser}
      currentUserClicked={this.state.currentUserClicked}
      usersClicked={this.state.usersClicked} 
      addImageClicked={this.state.addImageClicked} 
      cancelImageClicked={this.cancelImageClicked}
      currentUser={this.state.currentUser}/>}/>
      <Route component={NotFound} />
      </Switch>
    :
    <Switch>
    <Route path="/login" render={()=> <LoginForm
    login={this.login}/>}/>
    <Route path="/signup" render={()=> <SignUpForm
    login={this.login}/>}/>
    <Route component={NotFound} />
    </Switch>
    }
    </React.Fragment>
  }
}

export default App;
