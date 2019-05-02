import React from "react";
import './Post.css'
import { Header, Image, Button, Icon, Label} from 'semantic-ui-react'

    class Post extends React.Component{
        render() {
            return <article className="Post" ref="Post">

                        <header>
                      
                            <div className="Post-user">
                            <Header className="Post-user-name" as='h2'>
                            <Image circular src={this.props.post.user.avatar} />
                            {this.props.post.user.name}
                            </Header>
                            </div>

                        </header>

                            <div className="Post-image">
                                <div className="Post-image-bg">
                                <img alt="Image not showing for some reasons!" src={this.props.post.image} />
                                </div>
                            </div>

                            <div id="like-btn-div">
                            <Button id="like-btn" color='grey'>
                                <Icon name='heart' />
                                Like
                            </Button>
                            </div>

                            <div className="Post-caption">
                                <strong>{this.props.post.user.name}</strong> {this.props.post.caption}
                            </div>

                            <div className="Comments">
                               <ul>
                                <li>View All 0 Comments</li>
                                </ul> 
                            </div>

                    </article>;
            }
        }

    export default Post;