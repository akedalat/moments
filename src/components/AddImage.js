import React from "react";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { toast } from 'react-toastify';
import { Button, Form, Icon, Grid, Image, Segment, Loader, Dimmer } from 'semantic-ui-react'
import './AddImage.css'

const CLOUDINARY_UPLOAD_PRESET = 'ygp7mkyu'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dacf1ygqh/image/upload'

    class AddImage extends React.Component{

        state = {
            caption: "",
            loading: false,
            uploadedFileCloudinaryUrl: ""
        }
        
        //Create Comment
        handleSubmit = () => {
            let post = {
                user_id: this.props.currentUser.id, 
                caption:this.state.caption, 
                image: this.state.uploadedFileCloudinaryUrl,  
            }
            this.props.createPost(post)
            this.setState({
                caption: "",
            uploadedFileCloudinaryUrl: ""})
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
                    this.setState({
                        uploadedFileCloudinaryUrl: response.body.secure_url,
                        loading:false
                    })
                }
            })
        }
        
        render() { 
            return(
                <Form onSubmit={this.handleSubmit} id="Form" className="FileUpload">
                <div>
                <Dropzone
                    onDrop={this.onImageDrop.bind(this)}
                    accept="image/*"
                    multiple={false}>
                        {({getRootProps, getInputProps}) => {
                        return (
                            <div {...getRootProps()} >
                            <input {...getInputProps()} />
                            {
                            <p>Try dropping some files here, or click to select files to upload.</p>
                            }
                            </div>
                        )
                    }}
                </Dropzone>
                </div>

                <div>
                    {this.state.uploadedFileCloudinaryUrl === '' ? 'No file selected.' :
                    <div>
                        <p>{this.state.uploadedFile.name}</p>
                        <img src={this.state.uploadedFileCloudinaryUrl} />
                    </div>}
                </div>
                    
                    <Form.Input placeholder='Add caption...' name='name' 
                    value={this.state.content} onChange={this.handleChange}/>
                    <Form.Button content='Post' />
                 
                </Form>
            )
          } 
    }

    export default AddImage;