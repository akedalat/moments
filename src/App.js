import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Post from './components/Post'


class App extends Component {

  state = {
    currentUser: {
    name: "Kian Edalat",
    avatar: "https://avatarfiles.alphacoders.com/767/76751.png",
    caption: "Tommy Moving the community!"
    }
  }
  render(){
  return (
    <React.Fragment>
    <Header currentUser={this.state.currentUser}/>
    <Post
    currentUser={this.state.currentUser}
    image="https://assets.rockpapershotgun.com/images//2017/10/mafia.jpg/RPSS/resize/760x-1/format/jpg/quality/70"/>
    </React.Fragment>
    );
  }
}

export default App;
