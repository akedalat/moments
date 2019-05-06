import React from "react";
import './Profile.css'
import { Header, Image, Button, Grid} from 'semantic-ui-react'

class Profile extends React.Component{

    render(){
    return <React.Fragment>
    <article className="Profile-container" ref="Post">   

        <header className="Header">
            <div>
            <Header className="Profile-name" as='h2'>
            <Image circular src={this.props.user.avatar} />
            {this.props.user.name}
            </Header>
            </div>
            <div className="Edit">
            <Button color='grey'>Edit Profile</Button>
            </div>
        </header>

        <div className="Profile-info">
            <span>{this.props.user.posts.length} Posts</span>
            <span>{this.props.user.followers.length} Followers</span>
            <span>{this.props.user.following.length} Following</span>
        </div>
        <Grid>
        <Grid.Row className="Grid-row" columns={3}>
            {this.props.user.posts.map(post => {
            return <Grid.Column><Image src={post.image}/></Grid.Column>})}  
        </Grid.Row>
        </Grid>
        
    </article>;
    </React.Fragment> 

    }

}

export default Profile;