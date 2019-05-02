import React from "react";
import { Header, Image, Button, Icon} from 'semantic-ui-react'

class Profile extends React.Component{

    render(){
    return <React.Fragment>Profile
        <article className="Post" ref="Post">

<header>

    <div className="Post-user">
    <Header className="Post-user-name" as='h2'>
    <Image circular src={this.props.user.avatar} />
    {this.props.user.name}
    </Header>
    </div>

</header>

    <div className="Post-image">
        <div className="Post-image-bg">
        <img alt="Image not showing for some reasons!" src="" />
        </div>
    </div>

    <div id="like-btn-div">
    <Button id="like-btn" color='grey'>
        <Icon name='heart' />
        Like
    </Button>
    </div>

    <div className="Post-caption">
        <strong>{this.props.user.name}</strong> caption
    </div>

    <div className="Comments">
       <ul>
        <li>View All 0 Comments</li>
        </ul> 
    </div>

</article>;
    </React.Fragment> 

    }

}

export default Profile;