import React from "react";
import './HeaderBar.css'
import {Button, Menu, Icon} from 'semantic-ui-react'

    class HeaderBar extends React.Component{
        render(){
          return (
            <Menu className="Menu" size='massive'>
            
            <Menu.Item className="Nav-brand-name" name='MOMENTS' />
         
            {/* <Menu.Item> <Search className="Search"/> </Menu.Item> */}
            <Menu.Menu position='right'>
            <Menu.Item>
              <Icon name="add"/>Add Image
            </Menu.Item>
            <Menu.Item>
              <Icon name="user"/>
            </Menu.Item>
              <Menu.Item>
                <Button id="logout" color='teal'>logout</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
           );
        }   
    }
    export default HeaderBar;


  //   <nav className="Nav">
  //   <div className="Nav-menus">

  //     <div className="Nav-brand">
  //       <a className="Nav-brand-name" href="/">
  //         MOMENTS
  //       </a>
  //     </div>

  //     <div className="Nav-right">
  //     <Header as='h2'>
  //      <Image circular src={this.props.currentUser.avatar} />
  //      </Header>

  //     <Button id="logout" color='teal'>logout</Button>
  //     </div>

  //   </div>
  // </nav>