import React from "react";
import './Profile.css'
import { Header, Image, Button, Grid} from 'semantic-ui-react'

class Profile extends React.Component{

    renderButton = () => {
        if(this.props.currentUser.following.some(user => user.id === this.props.user.id)){
            return <Button color='grey'>Unfollow</Button>
        }
        else if (this.props.currentUser.id === this.props.user.id){
            return null
        }
        else {
            return <Button color='grey'>Follow</Button>
        }
    }

    render(){
    return <React.Fragment>
    <article className="Profile-container" ref="Post">   

        <header className="Header">
            <div>
            <Header className="Profile-name" as='h2'>
            <Image id="profile-picture" circular src={this.props.user.avatar} />
            {this.props.user.name}
            </Header>
            </div>
            <div className="Edit">
            {this.renderButton()}
            </div>
        </header>

        <div className="Profile-info">
            <span>{this.props.user.posts.length} Posts</span>
            <span>{this.props.user.followers.length} Followers</span>
            <span>{this.props.user.following.length} Following</span>
        </div>
        <Grid>
        <Grid.Row className="Grid-row" columns={3}>
            {this.props.user.posts.map((post, index) => {
            return <Grid.Column key={index}><Image src={post.image}/></Grid.Column>})}  
        </Grid.Row>
        </Grid>
        
    </article>;
    </React.Fragment> 

    }

}

export default Profile;