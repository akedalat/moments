import React from "react";
import './Profile.css'
import { Header, Image, Button} from 'semantic-ui-react'

class Profile extends React.Component{

    render(){
    return <React.Fragment>Profile
    <div className="Profile-container" ref="Post">   

        <header className="Header">
            <div>
            <Header className="Profile-name" as='h2'>
            <Image circular src={this.props.user.avatar} />
            {this.props.user.name}
            </Header>
            </div>
            <div className="Edit">
            <Button color='gray'>Edit Profile</Button>
            </div>
        </header>

        <div className="Profile-info">
            <div>{this.props.user.posts.length} Posts</div>
            <div>{this.props.user.followers.length} Followers</div>
            <div>{this.props.user.following.length} Following</div>
        </div>
        
    </div>;
    </React.Fragment> 

    }

}

export default Profile;