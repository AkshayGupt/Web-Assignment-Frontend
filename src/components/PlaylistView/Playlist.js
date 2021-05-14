import React, { useEffect, useState } from "react";
import Video from "./Video";
import ReactPlayer from "react-player";
import "./Playlist.css";
import { useParams } from "react-router-dom";
import { getPlaylistById } from "../../utils/HelperFunctions";
const Playlist = () => {
  const [current, setCurrent] = useState("");
  const [link, setLink] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const params = useParams();

  const getLinks = () =>{
    getPlaylistById(params.playlistId)
    .then(data=>{
      let playlist_temp = [];
      data.map((video) => {
        video.isOn = false;
        playlist_temp.push(video);
      });
      setPlaylist(playlist_temp);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  useEffect( () => {
    getLinks();
   
  }, []);

  //When Video is selected to play
  const onVideoEnd = (id) => {

   
    const current_temp = playlist[id.key].link;
    // let play = playlist;
    // play.splice(id.key,1);
    

    const play = playlist.map((link, key) => link);
    // const current = play[id.key]; //New line added

    setCurrent(current_temp);
    play.splice(id.key, 1);
    setPlaylist(play);
  };

  //When the video ends
  const onEndVideo = () => {
    const play = playlist.map((link, key) => link);

    if (play.length !== 0) {
      const current = play[0];
      play.shift();
      setCurrent(current.link);
      setPlaylist(play);
    } else {
      setCurrent("");
    }
  };

  return (
    <div className="row">
      <div className="col-xl-8 col-12 ">
        <div className="mx-auto">
          <a className="btn btn-info m-4" href="/">
            Back to Home{" "}
          </a>
        </div>
        <div
        
          id="container"
          style={{
            maxWidth: "90%",
            margin: "auto",
            minHeight: "0px",
            height: "auto",
          }}
        >
          <div id="monitor">
            <div id="monitorscreen">
              <Video link={current} endVideo={onEndVideo} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-12 bg-dark mt-3"
        style={{
          minHeight: "100vh",
          padding: "10px",
        }}
      >
        <h3 className="text-center text-light">Playlist</h3>
        <ul style={{ listStyle: "none", padding: "10px" }}>
          {playlist.map((link, key) => {
            return (
              <div className="m-2 btn" onClick={()=> onVideoEnd({ key })}>
                <div className="row">
                    <div className="col-xl-7 col-12">
                    <img style={{width:"100%",height:"150px",maxWidth:"400px"}} src={link.thumbnail_url}></img>
                    </div>
                    <div className="col-xl-5 col-12 mt-2" id="title-width" style={{
                      float:"left"
                    }}>
                      <p style={{
                        fontSize:"0.9em",
                        textAlign:"left"
                      }}
                      className="text-light mt-2"
                      >{link.title.substring(0,Math.min(60,link.title.length))}<span className={link.title<60 && "d-none"}>...</span></p>
                      <div style={{
                        marginTop:"-13px",
                        textAlign:"left"
                      }}>
                      <a style={{
                        color:"grey",
                        fontSize:"0.8em",
                        padding:"0px",
                       
                      }}
                      target="blank"
                      href={link.author_url}>{link.author_name}</a>
                      </div>
                     
                    </div>
                </div>
                < ></>
                {/* <ReactPlayer
                  onStart={() => onVideoEnd({ key })}
                  onEnded={() => onVideoEnd({ key })}
                  className="myvideo"
                  url={link.link}
                  height={150}
                  width={280}
                  controls="true"
                  playing={false}
                  style={{
                    margin: "auto",
                  }}
                /> */}
                
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Playlist;
