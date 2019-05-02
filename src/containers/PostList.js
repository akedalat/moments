import React from "react";
import Post from '../components/Post'

class PostList extends React.Component{

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
        console.log(this.state.posts)
    return <div><Post/></div>

    }

}

export default PostList;