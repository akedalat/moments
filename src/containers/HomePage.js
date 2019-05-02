import React from "react";
import PostList from './PostList'
import ProfileContainer from './ProfileContainer'

class HomePage extends React.Component{

    state = {
        users: [],
        posts: []
    }

    //GET USERS
    componentDidMount = () => {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(users => {
            this.setState({
                users: users
            })
        })
    }

    //GET POSTS
    componentDidMount = () => {
        fetch("http://localhost:3000/posts")
        .then(resp => resp.json())
        .then(posts => {
            this.setState({
                posts: posts
            })
        })
    }

    render(){
    return <React.Fragment>
            <PostList users={this.state.users} posts={this.state.posts}/>
        </React.Fragment>
    }

}

export default HomePage ;