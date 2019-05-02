import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import HomePage from './containers/HomePage'



class App extends Component {

  
  render(){
  return <React.Fragment>
    <Header/>
  <HomePage/>
  </React.Fragment>
  }
}

export default App;
