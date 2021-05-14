import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const ShowAll = () => {
  const [redirect, setRedirect] = useState("");

  const popular = [
    {
      id: 0,
      name: "Lukas",
      viewCount: 25,
    },
    {
      id: 1,
      name: "Djay Snake",
      viewCount: 21,
    },
    {
      id: 2,
      name: "Rivals Bar",
      viewCount: 15,
    },
  ];

  const others = [
    {
      id: 0,
      name: "Moody",
      viewCount: 25,
    },
    {
      id: 1,
      name: "Mashup",
      viewCount: 21,
    },
    {
      id: 2,
      name: "Hindi Mix",
      viewCount: 15,
    },
    {
      id: 3,
      name: "English Hits",
      viewCount: 25,
    },
    {
      id: 4,
      name: "Rainy",
      viewCount: 21,
    },
    {
      id: 5,
      name: "Party Hard",
      viewCount: 15,
    },
  ];

  const handleSelect = (playlist) => {
    const path = "playlist/" + playlist.id;
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
            <div
              onClick={() => handleSelect(playlist)}
              className="bg-dark p-2 ml-3 mb-2 text-light d-flex justify-content-between btn"
              style={{ borderRadius: "10px" }}
            >
              <p>{playlist.name}</p>
              <p className="mr-3">
                {playlist.viewCount}
                <i className="fa fa-street-view mx-1" aria-hidden="true"></i>
              </p>
            </div>
          );
        })}
        <h6>All</h6>
        {others.map((playlist) => {
          return (
            <div
              onClick={() => handleSelect(playlist)}
              className="bg-dark p-2 ml-3 mb-2 text-light d-flex justify-content-between btn"
              style={{ borderRadius: "10px" }}
            >
              <p>{playlist.name}</p>
              <p className="mr-3">
                {playlist.viewCount}
                <i className="fa fa-street-view mx-1" aria-hidden="true"></i>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowAll;
