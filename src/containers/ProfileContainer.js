import React from "react";
import Profile from '../components/Profile'


class ProfileContainer extends React.Component{

    render(){
    return <React.Fragment>
        <Profile user={this.props.user}/>
    </React.Fragment> 

    }

}

export default ProfileContainer;