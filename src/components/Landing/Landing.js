import React, { useState, useEffect } from "react";
import "./Landing.css";
import randomColor from "randomcolor";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Redirect } from "react-router-dom";
import { getAllCategories } from "../../utils/HelperFunctions";
const Landing = () => {
  const [redirect, setRedirect] = useState("");
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const categories = await getAllCategories();
    setItems(categories);
  }, []);

  const showPopularCategories = () => {
    if (items.length >= 2) {
      let data = [];
      for (let i = 0; i < 2; i++) {
        data.push(items[i]);
        <p>{items[i].category_name}</p>;
      }
      return data.map((category) => {
        return (
          <div className="col" key={category.category_id}>
            <p
              className="btn"
              onClick={() => setRedirect("playlists/" + category.category_name)}
            >
              {category.category_name}
            </p>
          </div>
        );
      });
    }
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log("Inside Search" + results.length);
    if (results.length == 0) {
      setError("No matching categories found !");
    } else {
      setError("");
    }
    if (string.length == 0) {
      setError("");
    }
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log("onHover" + result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
    const path = "/playlists/" + item.category_name;
    console.log(path);
    setRedirect(path);
    return <Redirect to={path} />;
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  return (
    <div
      style={{
        width: "fit-content",
        display: "block",
        padding: "5%",
        width: "95%",
        position: "absolute",
        top: "45%",
        transform: "translate(0, -50%)",
      }}
      className="mx-auto text-center"
    >
      <h1 className=" heading-logo mb-4">Let's Jam</h1>
      <div
        className="d-flex mx-auto mt-4 justify-content-around"
        style={{ width: "25%" }}
      >
        <i
          className="fa fa-fire text-danger"
          style={{ marginTop: "12px" }}
          aria-hidden="true"
        >
          <span id="trending">Trending:</span>
        </i>
        {showPopularCategories()}
      </div>
      <div
        style={{
          width: "500px",
          maxWidth: "90%",
          margin: "auto",
          overflow: "visible",
        }}
        className="mx-auto"
      >
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          placeholder={"Search Category"}
        />
        {error && <p>{error}</p>}
        <div className="d-flex justify-content-center">
          <p
            style={{
              fontSize: "12px",
              marginTop: "10px",
              marginRight: "5px",
            }}
          >
            <a href="/createPlaylist" className="btn btn-light btn-sm">
              {" "}
              Create a new playlist
            </a>
          </p>
          <p
            style={{
              fontSize: "12px",
              marginTop: "10px",
            }}
          >
            <a href="/showAll" className="btn btn-light btn-sm">
              {" "}
              Show All
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
