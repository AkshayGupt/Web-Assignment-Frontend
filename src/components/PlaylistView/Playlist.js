import React, { useEffect, useState } from "react";
import Video from "./Video";
import ReactPlayer from "react-player";
import "./Playlist.css";
const Playlist = () => {
  const [current, setCurrent] = useState("");
  const [link, setLink] = useState("");
  const [playlist, setPlaylist] = useState([
    { id: 1, url: "https://www.youtube.com/watch?v=cSajyt-n5v4", isOn: false },
    { id: 2, url: "https://www.youtube.com/watch?v=LTT4MYQqz4o", isOn: false },
  ]);

  useEffect(() => {
    //TODO: getPlaylistById
  }, []);

  //When Video is selected to play
  const onVideoEnd = (id) => {
    const play = playlist.map((link, key) => link);
    const current = play[id.key]; //New line added

    setCurrent(current);
    // this.setState({ current });
    play.splice(id.key, 1);
    setPlaylist(play);
    // this.setState({ playlist: play });
  };

  //When the video ends
  const onEndVideo = () => {
    const play = playlist.map((link, key) => link);

    if (play.length !== 0) {
      const current = play[0];
      play.shift();
      setCurrent(current);
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
            minHeight: "300px",
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
        className="col-xl-3 col-12 bg-info mt-3"
        style={{
          minHeight: "100vh",
          padding: "10px",
        }}
      >
        <h3 className="text-center">Playlist</h3>
        <ul style={{ listStyle: "none", padding: "10px" }}>
          {playlist.map((link, key = link.id) => {
            return (
              <div className="m-1 text-center">
                <ReactPlayer
                  onStart={() => onVideoEnd({ key })}
                  onEnded={() => onVideoEnd({ key })}
                  className="myvideo"
                  url={link.url}
                  height={150}
                  width={280}
                  controls="true"
                  playing={false}
                  style={{
                    margin: "auto",
                  }}
                />
                ;
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Playlist;
