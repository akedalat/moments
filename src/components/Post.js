import React from "react";
import './Post.css'
import { Header, Image, Button, Icon, Label} from 'semantic-ui-react'

    class Post extends React.Component{
        render() {
            return <article className="Post" ref="Post">

                        <header>
                      
                            <div className="Post-user">
                            <Header className="Post-user-name" as='h2'>
                            <Image circular src={this.props.currentUser.avatar} />
                            {this.props.currentUser.name}
                            </Header>
                            </div>

                        </header>

                            <div className="Post-image">
                                <div className="Post-image-bg">
                                <img alt="Image not showing for some reasons!" src={this.props.image} />
                                </div>
                            </div>

                            <div>
                            <Button as='div' labelPosition='right'>
                            <Button color='red'>
                                <Icon name='heart' />
                                Like
                            </Button>
                            <Label as='a' basic color='red' pointing='left'>
                                2,048
                            </Label>
                            </Button>
                            </div>
                            <div className="Post-caption">
                                <strong>{this.props.currentUser.name}</strong> {this.props.currentUser.caption}
                            </div>

                    </article>;
            }
        }
        
    export default Post;