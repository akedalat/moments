import React from "react";
import PostList from './PostList'
import ProfileContainer from './ProfileContainer'


const postsUrl = "http://localhost:3000/following_posts"
const usersUrl = "http://localhost:3000/users"

class HomePage extends React.Component {

    state = {
        users: [],
        user: [],
        posts: [],
        profileClicked: false
    }

    fetchPosts = () => {
        fetch(postsUrl,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"id": 1}),
        }).then(resp => resp.json())
        .then(posts => {
            this.setState({posts: posts})
        })
    }
    
    fetchUsers = () => {
        fetch(usersUrl)
            .then(resp => resp.json())
            .then(users => this.setState({
                users: users
            }))
    }

    //GET POSTS & USERS
    componentDidMount = () => {
        this.fetchPosts()
        this.fetchUsers()
    }

    //ADD COMMENT 
    addComment = (comment, post_id) => {
        fetch(`${postsUrl}/${post_id}/comments`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(comment),
        }).then(resp => resp.json())
            .then(this.fetchPosts)
    }

    handleProfileClicked = (id) => {
        this.setState({
            profileClicked: true,
            user: this.state.users.find(user => id === user.id)
        })
    }

    render() {
       console.log(this.state.posts)
       console.log(this.state.users)
        return <React.Fragment>
            {this.state.profileClicked ?
                <ProfileContainer
                    users={this.state.users}
                    user={this.state.user} /> :
                <PostList
                    users={this.state.users}
                    posts={this.state.posts}
                    addComment={this.addComment}
                    handleProfileClicked={this.handleProfileClicked} />}
        </React.Fragment>
    }

}

export default HomePage;