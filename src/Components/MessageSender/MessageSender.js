import React, {useState} from "react";
import "./MessageSender.scss"
// import {Avatar} from "@material-ui/core";
import {InsertEmoticon, PhotoLibrary, PlaylistPlayRounded, Videocam} from "@material-ui/icons";
import tuii from "./img/tuii.jpg"
import quỳnh from "./img/quỳnh.jpeg"
import pyy from "./img/pyy.jpeg"

import VideoCallIcon from '@material-ui/icons/VideoCall';


const MessageSender = () => {
    const [input, setInput] = useState("")
    return(
        <div className="messageSender">
            <div className="messageSender__content">
                <div className="messageSender__content__top">
                    <img className="messageSender__content__top-img" src={tuii}/>
                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="messageSender__input"
                            placeholder={`What's on your mind?`}/>
                    </form>
                </div>
                <div className="messageSender__content__bottom">
                    <div className="messageSender__option">
                        <Videocam style={{color: "red"}}/>
                        <h3>Live Video</h3>
                    </div>

                    <div className="messageSender__option">
                        <PhotoLibrary style={{color: "green"}}/>
                        <h3>Photo/Video</h3>
                    </div>

                    <div className="messageSender__option">
                        <InsertEmoticon style={{color: "orange"}}/>
                        <h3>Feeling/Activity</h3>
                    </div>
                </div>
            </div>

            <div className="messageSender__meeting">
               
                <button className="messageSender__meeting-btn" >
                    <div className="messageSender__meeting-btn-icon">
                        <VideoCallIcon style={{ color:"violet" , fontSize:"30px"}}/>
                    </div>
                    <div>
                        <b> Create a meeting room </b>
                    </div>
                </button>

                <div className="messageSender__meeting-img">

                    <img className="messageSender__meeting-img-1" src={tuii}/>
                    <img className="messageSender__meeting-img-1" src={quỳnh}/>
                    <img className="messageSender__meeting-img-1" src={pyy}/>
                    <img className="messageSender__meeting-img-1" src={tuii}/>
                    <img className="messageSender__meeting-img-1" src={quỳnh}/>
                    <img className="messageSender__meeting-img-1" src={pyy}/>

                </div>
               
            </div>
    </div>
)}

export default MessageSender;
