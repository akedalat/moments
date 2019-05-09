import React from "react";
import './Post.css'
import { Header, Image, Button, Icon, Form} from 'semantic-ui-react'

    class Post extends React.Component{

        state = {
            content: "",
            buttonColor : "", 
        }

    //if post likes has current user button is red else button is grey
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
        
        //if post likes includes user delete else create like
        handleLikeClick = () => {
            if(this.props.post.likes.some(like => like.user_id === this.props.currentUser.id)){
                let like = this.props.post.likes.find(like => like.user_id === this.props.currentUser.id)
                this.props.deleteLike(like.id, this.props.post.id)       
            }
            else {
                this.props.createLike(this.props.currentUser.id, this.props.post.id)
            }
        }

        renderComments = () => {
            return this.props.post.comments.map((comment,index) => { 
               return <li key={index}><strong>{comment.user.name}</strong> {comment.content}</li>
            })
        }
        
        //Create Comment
        handlePostComment = () => {
            let comment = {user_id: this.props.currentUser.id, content:this.state.content }
            this.props.addComment(comment, this.props.post.id)
            this.setState({content: ""})
        }

        handleChange = (e) => {
            this.setState({content: e.target.value})
        }
        
        render() {
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

                    <Form onSubmit={this.handlePostComment} id="Form">
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