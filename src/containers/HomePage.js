import React from "react";
import PostList from './PostList'
import ProfileContainer from './ProfileContainer'
import AddImage from '../components/AddImage'


const followingPostsUrl = "http://localhost:3000/following_posts"
const postsUrl = "http://localhost:3000/posts"
const usersUrl = "http://localhost:3000/users"

class HomePage extends React.Component {

    state = {
        users: [],
        user: [],
        posts: [],
        profileClicked: false,
    }

    //Sort posts chronologically and add them to state
    fetchPosts = () => {
        fetch(followingPostsUrl,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"id": 1}),
        }).then(resp => resp.json())
        .then(posts => {
            this.setState({posts:  posts.sort((a,b)=> {
                if (a.created_at < b.created_at) {return 1}
                if (a.created_at > b.created_at) {return -1}
                return 0
                })})
        })
    }
   
    fetchUsers = () => {
        fetch(usersUrl)
            .then(resp => resp.json())
            .then(users => this.setState({
                users: users
            }))
    }

    //GET POSTS & USERS when application runs
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

     //CREATE LIKE 
     createLike = (user_id, post_id) => {
     
        fetch(`${postsUrl}/${post_id}/likes`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id }),
        }).then(resp => resp.json())
            .then(this.fetchPosts)
    }

    //DELETE LIKE
    deleteLike = (like_id, post_id) => {
        fetch(`${postsUrl}/${post_id}/likes/${like_id}`, {
            method: "DELETE",
        }).then(resp => resp.json())
            .then(this.fetchPosts)
    }

    //To render user profile page
    handleProfileClicked = (id) => {
        this.setState({
            profileClicked: true,
            user: this.state.users.find(user => id === user.id)
        })
    }

    renderHomePage = () => {
        if (this.state.profileClicked){
            return <ProfileContainer
            currentUser={this.props.currentUser}
            users={this.state.users}
            user={this.state.user} /> 
        } else if (this.props.addImageClicked){
           return  <AddImage
            currentUser={this.props.currentUser}/> 
        }
        else {
            return <PostList
            currentUser={this.props.currentUser}
            users={this.state.users}
            posts={this.state.posts}
            addComment={this.addComment}
            createLike={this.createLike}
            deleteLike={this.deleteLike}
            handleProfileClicked={this.handleProfileClicked} />
        }
    }

    render() {
        console.log(this.props)
        return <React.Fragment>
            {this.renderHomePage()}
        </React.Fragment>
    }

}

export default HomePage;