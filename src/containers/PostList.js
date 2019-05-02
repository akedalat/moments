import React from "react";
import Post from '../components/Post'

class PostList extends React.Component{

    render(){
  
    return <React.Fragment>{this.props.posts.map(post=> {
            return <Post post={post}/>})}
        </React.Fragment>

    }

}

export default PostList;