import React, { useState } from "react";

const CreatePlaylist = () => {
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);
  const [linkError, setLinkError] = useState("");
  const [name, setName] = useState("");

  const addLink = () => {
    let url = link;
    //URL Validation
    if (url.includes("www.youtube.com")) {
      if (url != undefined || url != "") {
        //Regex for validation
        var regExp =
          /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
          const play = links.map((link) => link);
          if (!play.includes(url)) {
            play.push(url);
            setLinks(play);
            setLink("");
            setLinkError(false);
          } else {
            setLinkError("Duplicate link");
          }
        } else {
          setLinkError("Invalid link");
        }
      }
    } else {
      setLinkError("Invalid link");
    }
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
    setLinkError("");
  };

  const handleSubmit = () => {
    if (name == "" || links.length == 0) {
      alert("Please fill all fields");
    } else {
      alert("Success");
      //TODO: API CALL
    }
  };

  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        marginTop: "100px",
        border: "1px solid black",
        padding: "30px",
      }}
    >
      <h2 className="text-center">Create New Playlist</h2>
      <div class="mb-3">
        <label for="name" class="form-label">
          Playlist name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          class="form-control"
          id="name"
          placeholder="e.g. Party Songs"
          required
        />
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">
          Add youtube links:{" "}
        </label>
        {linkError && (
          <p
            className="p-2 bg-danger text-light"
            style={{ borderRadius: "20px", width: "fit-content" }}
          >
            {linkError}{" "}
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>{" "}
          </p>
        )}

        <div className="d-flex">
          <input
            value={link}
            onChange={(e) => handleLinkChange(e)}
            type="text"
            class="form-control"
            id="name"
            placeholder=""
            style={{
              width: "100%",
              outline: "none",
            }}
          />
          <span style={{ marginLeft: "-30px", marginTop: "5px" }}>
            <i
              onClick={() => addLink()}
              className="fa fa-plus"
              aria-hidden="true"
            ></i>
          </span>
        </div>
        <div className="row">
          {links.map((link) => {
            return (
              <div className="col">
                <p
                  className="p-2 bg-info text-white m-2"
                  style={{ width: "fit-content", borderRadius: "10px" }}
                >
                  {link}
                </p>
              </div>
            );
          })}
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-5"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
        <a href="/" className="btn btn-secondary mt-5 mx-3 px-4">
          Back
        </a>
      </div>
    </div>
  );
};

export default CreatePlaylist;
