import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getPlaylistsByCategory } from "../../utils/HelperFunctions";
import { useParams } from "react-router-dom";

const Playlists = () => {
  const [redirect, setRedirect] = useState("");

  const [others, setOthers] = useState([]);
  const [popular, setPopular] = useState([]);

  const params = useParams();
  useEffect(async () => {
    const data = await getPlaylistsByCategory(params.categoryName);
    console.log("PLAYLISTS: ", data);

    if (data.length <= 4) {
      setPopular(data);
    } else {
      setPopular(data.slice(0, 4));
      setOthers(data.slice(4));
    }
  }, []);

  const handleSelect = (playlist) => {
    const path = "playlist/" + playlist.playlist_id;
    setRedirect(path);
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <>
      <div className="mx-auto">
        <a className="btn btn-info m-4" href="/">
          Back to Home{" "}
        </a>
      </div>
      <div
        style={{
          maxWidth: "90%",
          marginTop: "2%",
          marginLeft: "5%",
          marginRight: "3%",
        }}
        className=""
      >
        <h4 className="mb-3">
          Trending{" "}
          <i
            className="fa fa-fire text-danger"
            style={{ marginTop: "12px" }}
            aria-hidden="true"
          />
        </h4>
        {popular.map((playlist) => {
          return (
            <>

            <div
              onClick={() => handleSelect(playlist)}
              className="bg-dark p-3   ml-3 mb-2 text-light d-flex justify-content-between btn"
              style={{ borderRadius: "10px" }}
            >
              <div>
              <p style={{
                textAlign:"left"
              }}>{playlist.playlist_name}</p>
              <div style={{
                marginTop:"0px",
                fontSize:"0.8em",
                textAlign:"left",
                color:"lightgrey"
              }}>{playlist.playlist_description.substring(0,150)}<span className={playlist.playlist_description.length<150 && "d-none"}>...</span></div>
              </div>
              
              <p className="mr-3">
                {playlist.playlist_view_count}
                <i className="fa fa-street-view mx-1" aria-hidden="true"></i>
              </p>
            </div>
            
            </>
          );
        })}
        <h6 className={others.length > 0 ? "" : "d-none"}>All</h6>
        {others.map((playlist) => {
          return (
            <div
            onClick={() => handleSelect(playlist)}
            className="bg-dark p-3   ml-3 mb-2 text-light d-flex justify-content-between btn"
            style={{ borderRadius: "10px" }}
          >
            <div>
            <p>{playlist.playlist_name}</p>
            <div style={{
              marginTop:"-15px",
              fontSize:"0.8em",
              // marginLeft:"-20px",
              color:"lightgrey"
            }}>{playlist.playlist_description}</div>
            </div>
            
            <p className="mr-3">
              {playlist.playlist_view_count}
              <i className="fa fa-street-view mx-1" aria-hidden="true"></i>
            </p>
          </div>
          
          );
        })}
      </div>
    </>
  );
};

export default Playlists;
