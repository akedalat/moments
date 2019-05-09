import React from "react";
import './Header.css'
import {withRouter} from 'react-router-dom'
import {Button, Menu, Icon} from 'semantic-ui-react'

    class Header extends React.Component{

      handleImageClick = () => {
        this.props.addImageClicked()
        this.props.cancelCurrentUserClicked()
        this.props.cancelUsersClicked()
      }

      handleUsersClick = () => {
        this.props.usersClicked()
        this.props.cancelCurrentUserClicked()
        this.props.cancelImageClicked()
      }

      handleCurrentUserClick = () => {
        this.props.currentUserClicked()
        this.props.cancelImageClicked()
        this.props.cancelUsersClicked()
      }


        render(){
          return (
            <Menu className="Menu" size='massive'>
          
            <Menu.Item className="Nav-brand-name" name='MOMENTS' />
         
            {/* <Menu.Item> <Search className="Search"/> </Menu.Item> */}
            {this.props.currentUser ?
            <Menu.Menu position='right'>
            <Menu.Item onClick={this.handleImageClick}>
              <Icon name="add"/>Add Image
            </Menu.Item>
            <Menu.Item onClick={this.handleUsersClick}>
              <Icon name="users"/>
            </Menu.Item>
            <Menu.Item onClick={this.handleCurrentUserClick}>
              <Icon name="user"/>
            </Menu.Item>
              <Menu.Item>
                <Button onClick={this.props.logOut} id="log-btn" color='teal'>Logout</Button>
              </Menu.Item>
            </Menu.Menu>
            : 
            <Menu.Menu position='right'>

              <Menu.Item>
              <Button onClick={()=> this.props.history.push("/login")} id="log-btn" color='teal'>Login</Button>
              </Menu.Item>
              <Menu.Item>
              <Button onClick={()=> this.props.history.push("/signup")} id="log-btn" color='pink'>Sign Up</Button>
              </Menu.Item>
            </Menu.Menu>
          }
          </Menu>
           );
        }   
    }

    export default withRouter(Header)
