import React from "react";
import './HeaderBar.css'
import { Image, Button, Header, Segment, Menu} from 'semantic-ui-react'

    class HeaderBar extends React.Component{
        render(){
          return (

            <nav className="Nav">
              <div className="Nav-menus">

                <div className="Nav-brand">
                  <a className="Nav-brand-name" href="/">
                    MOMENTS
                  </a>
                </div>

                <div className="Nav-right">
                <Header as='h2'>
                 <Image circular src={this.props.currentUser.avatar} />
                 </Header>

                <Button id="logout" color='teal'>logout</Button>
                </div>

              </div>
            </nav>

           );
        }   
    }
    export default HeaderBar;

