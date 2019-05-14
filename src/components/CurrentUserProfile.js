import React from "react";
import './Profile.css'
import { Header, Image, Button, Grid} from 'semantic-ui-react'

class CurrentUserProfile extends React.Component{

    handleEditClick = () => {
        this.props.handleEditClicked()
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
            <Button onClick={this.handleEditClick} color='grey'>Edit Profile</Button>
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
            return <Grid.Column key={index}><Image src={post.image}/></Grid.Column>})}  
        </Grid.Row>
        </Grid>
        
    </article>;
    </React.Fragment> 

    }

}

export default CurrentUserProfile;