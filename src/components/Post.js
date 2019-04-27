import React from "react";
import './Post.css'

    class Post extends React.Component{
        render() {
            return <article className="Post" ref="Post">
                        <header>
                            <div className="Post-user">
                                <div className="Post-user-avatar">
                                <img src={this.props.avatar} alt="Chris" />
                                </div>
                                <div className="Post-user-nickname">
                                <span>{this.props.name}</span>
                                </div>
                            </div>
                        </header>
                            <div className="Post-image">
                                <div className="Post-image-bg">
                                <img alt="Image not showing for some reasons!" src={this.props.image} />
                                </div>
                            </div>
                            <div className="Post-caption">
                                <strong>{this.props.name}</strong> {this.props.caption}
                            </div>
                    </article>;
            }
        }
    export default Post;