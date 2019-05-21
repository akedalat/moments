import React from "react";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Form, Icon} from 'semantic-ui-react'
import './AddImage.css'

const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_UPLOAD_URL = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;

    class AddImage extends React.Component{

        state = {
            caption: "",
            uploadedFileCloudinaryUrl: "",
            uploadedFile: ""
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
            this.setState({ uploadedFile: files[0] })
            this.handleImageUpload(files[0])
        }
    
        handleImageUpload = file => {
            let upload = request.post(CLOUDINARY_UPLOAD_URL)
                                .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                                .field('file', file)
            upload.end((err, response) => {
                if(err){
                    alert(err)
                }
                if(response.body.secure_url !== ''){
                    this.setState({
                        uploadedFileCloudinaryUrl: response.body.secure_url
                    })
                }
            })
        }
        
        render() {
            return(
                <Form onSubmit={this.handleSubmit} id="Form" className="FileUpload">
                <div className="Dropzone">
                <Dropzone 
                    onDrop={this.onImageDrop.bind(this)}
                    accept="image/*"
                    multiple={false}>
                        {({getRootProps, getInputProps}) => {
                        return (
                            <div {...getRootProps()} >
                            <input {...getInputProps()} />
                            <Icon name="add square" color="green"/>
                            {
                            <p>Drop file or click to upload</p>
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
                        <img alt="Uploaded File" src={this.state.uploadedFileCloudinaryUrl} />
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