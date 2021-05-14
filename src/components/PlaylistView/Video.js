import React, { Component } from "react";
import ReactPlayer from "react-player";

// Controls the view of playing video
const Video =(props)=> {
    return (
      <div>
        <ReactPlayer
          onEnded={() => props.endVideo()}
          url={props.link}
          height={450}
          width={"100%"}
          display="false"
          controls="true"
          playing
        />
      </div>
    );
}

export default Video;
