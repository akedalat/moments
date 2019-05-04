import React from "react";
import Post from '../components/Post'

class PostList extends React.Component{

    render(){
    return <React.Fragment>{this.props.posts.map(post=> {
            return <Post 
            users={this.props.users} 
            handleProfileClicked={this.props.handleProfileClicked} 
            post={post}
            addComment={this.props.addComment}
            />})}
        </React.Fragment>

    }

}

export default PostList;