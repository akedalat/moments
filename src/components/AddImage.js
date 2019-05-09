import React from "react";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { toast } from 'react-toastify';
import { Button, Form, Icon, Grid, Image, Segment, Loader, Dimmer } from 'semantic-ui-react'
import cloudinary from 'cloudinary-core';

const CLOUDINARY_UPLOAD_PRESET = 'ygp7mkyu'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dm7moiolo/image/upload'

    class AddImage extends React.Component{

        state = {
            caption: "",
            loading: false,
            uploadedFileCloudinaryUrl: ''
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

        onImageDrop = files => {
            this.setState({ uploadedFile: files[0], loading: true })
            this.handleImageUpload(files[0])
        }
    
        handleImageUpload = file => {
            let upload = request.post(CLOUDINARY_UPLOAD_URL)
                                .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                                .field('file', file)
            upload.end((err, response) => {
                if(err){
                    toast.error(err, {containerId: 'messages'})
                }
                if(response.body.secure_url !== ''){
                    this.props.setImage(response.body.secure_url)
                    this.setState({
                        uploadedFileCloudinaryUrl: response.body.secure_url,
                        loading:false
                    })
                }
            })
        }
        
        render() { 
            return(
                <div>
                <Dropzone
                    onDrop={this.onImageDrop.bind(this)}
                    accept="image/*"
                    multiple={false}>
                    {({ getRootProps, getInputProps }) => {
                        return (
                            <Grid style={{marginBottom: '1em'}}>
                                <Grid.Row>
                                    <Grid.Column width={10}>
                                        <div {...getRootProps()}  >
                                            <Button fluid >
                                                <input {...getInputProps()} />
                                                <Icon name='upload' />
                                                Upload Image
                                            </Button>
                                        </div>
                                        <Segment textAlign='left' style={{overflow:'hidden'}}>
                                            {this.state.uploadedFileCloudinaryUrl === '' ? 'No file selected.' : this.state.uploadedFile.name}
                                        </Segment>
                                    </Grid.Column>

                                    <Grid.Column width={6}>
                                        { this.state.loading && <Dimmer active ><Loader active size='large'>Loading</Loader></Dimmer>}
                                        <Image floated='right' src={this.state.uploadedFileCloudinaryUrl === '' ? this.props.image : this.state.uploadedFileCloudinaryUrl}  size='small' style={{backgroundColor:'white', borderRadius: '4px'}}/>   
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        )
                    }}
                </Dropzone>
                <article>
                    <Image cloudName="dacf1ygqh" publicId="sample" width="300" crop="scale" />
                    Add Image
                    <Form onSubmit={this.handleSubmit} id="Form">
                    <Form.Group>
                    <Form.Input placeholder='Add caption...' name='name' 
                    value={this.state.content} onChange={this.handleChange}/>
                    <Form.Button content='Post' />
                    </Form.Group>
                    </Form>
                </article>
                </div>
            )
          } 
    }

    export default AddImage;