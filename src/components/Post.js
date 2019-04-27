import React from "react";
import './Post.css'

    class Post extends React.Component{
        render() {
            return <article className="Post" ref="Post">
                        <header>
                            <div className="Post-user">
                                <div className="Post-user-avatar">
                                <img src="https://avatarfiles.alphacoders.com/767/76751.png" alt="Chris" />
                                </div>
                                <div className="Post-user-nickname">
                                <span>Tommy Angelo</span>
                                </div>
                            </div>
                        </header>
                            <div className="Post-image">
                                <div className="Post-image-bg">
                                <img alt="Image not showing for some reasons!" src="https://assets.rockpapershotgun.com/images//2017/10/mafia.jpg/RPSS/resize/760x-1/format/jpg/quality/70" />
                                </div>
                            </div>
                            <div className="Post-caption">
                                <strong>Tommy</strong> Moving the community!
                            </div>
                    </article>;
            }
        }
    export default Post;