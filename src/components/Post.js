import React from "react";
import './Post.css'
import { Header, Image, Button, Icon, Form} from 'semantic-ui-react'

    class Post extends React.Component{

        state = {
            content: ""
        }

        handleclick = () => {
            this.props.handleProfileClicked(this.props.post.user.id)
        }

        renderComments = () => {
            return this.props.post.comments.map(comment => {  
               return <li><strong>{comment.user.name}</strong> {comment.content}</li>
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
            return <article className="Post" ref="Post">

                    <header>
                        <div className="Post-user">
                        <Header onClick={this.handleclick} className="Post-user-name" as='h2'>
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
                        <Button id="like-btn" color='grey'>
                            <Icon name='heart' />
                            Like
                        </Button>
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

                    </article>;
            }
        }

    export default Post;