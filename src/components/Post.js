import React from "react";
import './Post.css'
import { Header, Image, Button, Icon, Form} from 'semantic-ui-react'


    class Post extends React.Component{

        state = {
            content: "",
            buttonColor : "",
          
        }
         //if user.likes includes post.like
        //then button is red else button is grey
        
//     renderButtonColor = () => {
//         let tf = []
//         for(let postLike of this.props.post.likes){
//             for(let userLike of this.props.currentUser.likes){
//                 if(postLike.id === userLike.id){
//                     tf.push("true")
//                 }
//                 else if (postLike.id !== userLike.id) {   
//                     tf.push("false")
//                 }
//             }   
//         }
//         console.log(tf)
//         return tf
//   }

    // renderBtn = () => {
    //     return <Button color="red"
    //             onClick={this.handleLikeClick}>
    //             <Icon name='heart' />
    //             Like
    //             </Button>
    // }

    renderButton = () => {
        if(this.props.post.likes.some(like => like.user_id === this.props.currentUser.id)){
            return  <Button color="red"
            onClick={this.handleLikeClick}>
            <Icon name='heart' />
            Like
            </Button>
        } else {
            return <Button color="grey"
            onClick={this.handleLikeClick}>
            <Icon name='heart' />
            Like
            </Button>
        } 
    }

        handleProfileClick = () => {
            this.props.handleProfileClicked(this.props.post.user.id)
        }

        handleLikeClick = (e) => {
           //if user.likes includes post.like, delete like and change red to grey 
           //else create like change grey to red
        }

        renderComments = () => {
            return this.props.post.comments.map((comment,index) => { 
               return <li key={index}><strong>{comment.user.name}</strong> {comment.content}</li>
            })
        }

        handleSubmit = () => {
            let comment = {user_id:1, post_id:this.props.post.id, content:this.state.content }
            this.props.addComment(comment, this.props.post.id)
            this.setState({content: ""})
        }

        handleChange = (e) => {
            this.setState({content: e.target.value})
        }
        
        render() {
            this.renderButton()
          
            return(
                <article className="Post" ref="Post">

                <header>
                    <div className="Post-user">
                    <Header onClick={this.handleProfileClick} className="Post-user-name" as='h2'>
                    <Image circular src={this.props.post.user.avatar} />
                    {this.props.post.user.name}
                    </Header>
                    </div>
                </header>

                    <div className="Post-image">
                        <div className="Post-image-bg">
                        <img alt="Image not showing for some reasons!" src={this.props.post.image} />
                        </div>
                    </div>

                    <div id="like-btn-div">
                   {this.renderButton()}
                    </div>

                    <div className="Post-caption">
                        <strong>{this.props.post.user.name}</strong> {this.props.post.caption}
                    </div>

                    <div className="Comments">
                        <ul>Comments: {this.renderComments()}</ul> 
                    </div>

                    <Form onSubmit={this.handleSubmit} id="Form">
                    <Form.Group>
                    <Form.Input className="Comment" placeholder='Add a comment...' name='name' 
                    value={this.state.content} onChange={this.handleChange}/>
                    <Form.Button content='Post' />
                    </Form.Group>
                    </Form>

                </article>
            )
          } 
    }

    export default Post;