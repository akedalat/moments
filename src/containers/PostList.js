import React from "react";
import Post from '../components/Post'

class PostList extends React.Component{

    render(){
    return <React.Fragment>{this.props.posts.map((post, index)=> {
            return <Post 
            key={index}
            users={this.props.users} 
            handleProfileClicked={this.props.handleProfileClicked} 
            post={post}
            addComment={this.props.addComment}
            createLike={this.props.createLike}
            deleteLike={this.props.deleteLike}
            currentUser={this.props.currentUser}
            />})}
        </React.Fragment>

    }

}

export default PostList;