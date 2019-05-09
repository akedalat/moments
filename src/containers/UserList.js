import React from "react";
import User from '../components/User'

class UserList extends React.Component{

    render(){
    return <React.Fragment>{this.props.users.map((user, index)=> {
            return <User 
            key={index}
            users={this.props.users} 
            handleProfileClicked={this.props.handleProfileClicked} 
            user={user}
            currentUser={this.props.currentUser}
            createFollow={this.props.createFollow}
            deleteFollow={this.props.deleteFollow}
            />})}
        </React.Fragment>

    }

}

export default UserList;