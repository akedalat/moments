import React from "react";
import PostList from './PostList'
import ProfileContainer from './ProfileContainer'

class HomePage extends React.Component{

    state = {
        users: [],
        user: [],
        posts: [],
        profileClicked: false
    }

    //GET POSTS & USERS
    componentDidMount = () => {
        fetch("http://localhost:3000/posts")
        .then(resp => resp.json())
        .then(posts => {
            this.setState({
                posts: posts
            })
        })

        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(users => {
            this.setState({
                users: users
            })
        })
    }

    handleProfileClicked = (id) => {
        this.setState({
            profileClicked: true, 
            user: this.state.users.find(user => id === user.id)
        })
    }

    render(){
    return <React.Fragment>
            {this.state.profileClicked ? 
            <ProfileContainer 
            users={this.state.users}
            user={this.state.user}/> :
            <PostList 
            users={this.state.users} 
            posts={this.state.posts}
            handleProfileClicked={this.handleProfileClicked}/>}
        </React.Fragment>
    }

}

export default HomePage ;