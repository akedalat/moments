import React from "react";
import PostList from './PostList'
import ProfileContainer from './ProfileContainer'


const postsUrl = "http://localhost:3000/posts"
const usersUrl = "http://localhost:3000/users"

class HomePage extends React.Component {

    state = {
        users: [],
        user: [],
        posts: [],
        filteredPosts: [],
        profileClicked: false
    }

    filterPosts = () => {
        // filter state's posts and then pass down as props
        let returnedPosts = []
        // iterate over following array and push into filteredPosts array and return is
        const followingUsers = this.props.currentUser.following
        for(let i = 0, n = followingUsers.lenght; i < n; i++) {
            if(this.state.posts[i].user.id) {
                returnedPosts.push(this.state.posts[i])
            };
        };
        //this.state.posts.filter(post => post.user.id === following.id)
        console.log(returnedPosts)
    }

    fetchPosts = () => {
        fetch(postsUrl)
        .then(resp => resp.json())
        .then(posts => {
            this.setState({posts})
            // if(this.props.currentUser){
            //    this.props.currentUser.following.map(following => {
            //       this.setState({
            //           filteredPosts: this.state.posts.filter(post => post.user.id === following.id)
            //       })
            //    })
            // } 
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
        this.filterPosts()
    }

    //ADD COMMENT 
    addComment = (comment, post_id) => {
        //console.log(`${postsUrl}/${post_id}/comments`)
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
       // console.log(this.state.posts)
        return <React.Fragment>
            {this.state.profileClicked ?
                <ProfileContainer
                    users={this.state.users}
                    user={this.state.user} /> :
                <PostList
                    users={this.state.users}
                    posts={this.state.filteredPosts}
                    addComment={this.addComment}
                    handleProfileClicked={this.handleProfileClicked} />}
        </React.Fragment>
    }

}

export default HomePage;