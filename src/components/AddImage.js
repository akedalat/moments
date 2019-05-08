import React from "react";
import { Header, Image, Button, Icon, Form} from 'semantic-ui-react'

    class AddImage extends React.Component{

        state = {
            caption: "",
        }
        
        //Create Comment
        handleSubmit = () => {
            // let comment = {user_id: this.props.currentUser.id, content:this.state.content }
            // this.props.addComment(comment, this.props.post.id)
            // this.setState({content: ""})
        }

        handleChange = (e) => {
            this.setState({caption: e.target.value})
        }
        
        render() {    
            return(
                <article>
                    Add Image
                    {/* <Form onSubmit={this.handleSubmit} id="Form">
                    <Form.Group>
                    <Form.Input placeholder='Add caption...' name='name' 
                    value={this.state.content} onChange={this.handleChange}/>
                    <Form.Button content='Post' />
                    </Form.Group>
                    </Form> */}
                </article>
            )
          } 
    }

    export default AddImage;