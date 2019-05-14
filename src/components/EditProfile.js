import React from "react";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { toast } from 'react-toastify';
import './EditProfile.css'
import { Header, Image, Button, Grid, Icon, Form} from 'semantic-ui-react'

const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_UPLOAD_URL = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;

class EditProfile extends React.Component{

    state = {
        uploadedFileCloudinaryUrl: "",
        email: this.props.currentUser.email,
        name: this.props.currentUser.name
    }

    handleSubmit = () => {
        let user = {}
        this.uploadedFileCloudinaryUrl === "" ? 
        user = {
            name: this.state.name,
            email: this.state.email 
        } 
        :
        user = {
            avatar: this.state.uploadedFileCloudinaryUrl,
            name: this.state.name,
            email: this.state.email  
        } 
        this.props.editCurrentUser(user)
        this.setState({
        uploadedFileCloudinaryUrl: ""})
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleDeleteClick = (post) => {
        this.props.deletePost(post.id)
        console.log(post)
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
                toast.error(err, {containerId: 'messages'})
            }
            if(response.body.secure_url !== ''){
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                })
            }
        })
    }

    render(){
    return <React.Fragment>
    <article className="Profile-container" ref="Post">   
        <header className="Header">
            <div>
            <Header className="Profile-name" as='h2'>
            <Image id="profile-picture" circular src={this.props.currentUser.avatar} />
            {this.props.currentUser.name}
            </Header>
            </div>
            <div className="Edit">
            <Button color='grey'>Edit Profile</Button>
            </div>
        </header>

        <div className="Profile-info">
            <span>{this.props.currentUser.posts.length} Posts</span>
            <span>{this.props.currentUser.followers.length} Followers</span>
            <span>{this.props.currentUser.following.length} Following</span>
        </div>
        <Grid>
        <Grid.Row className="Grid-row" columns={3}>
            {this.props.currentUser.posts.map((post, index) => {
            return <Grid.Column key={index}><Image src={post.image}/>
            <Icon onClick={()=>this.handleDeleteClick(post)} name="delete" color="red"/>
            </Grid.Column>})}  
        </Grid.Row>
        </Grid>

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
                            Change your profile picture
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
                    <img id="preview" src={this.state.uploadedFileCloudinaryUrl} />
                </div>}
            </div>
                <Form.Field>
                    <label>Name</label>
                    <input onChange={this.handleChange} placeholder='Name' name='name' value={this.state.name} />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input onChange={this.handleChange} placeholder='Email' name='email' value={this.state.email} />
                </Form.Field>
                <Button type='submit'>Save</Button>
            </Form>
        </article>;
    </React.Fragment> 

    }

}

export default EditProfile;