import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getAllCategories } from "../../utils/HelperFunctions";

const ShowAll = () => {
  const [redirect, setRedirect] = useState("");

  const [others, setOthers] = useState([]);
  const [popular, setPopular] = useState([]);


  useEffect(async () => {
    const data = await getAllCategories();

    if (data.length <= 4) {
      setPopular(data);
    } else {
      setPopular(data.slice(0, 4));
      setOthers(data.slice(4));
    }
  }, []);

  const handleSelect = (category) => {
    const path = "playlists/" + category.category_name;
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
        {popular.map((category) => {
          return (
            <div
              onClick={() => handleSelect(category)}
              className="bg-dark p-2 ml-3 mb-2 text-light d-flex justify-content-between btn"
              style={{ borderRadius: "10px" }}
            >
              <p>{category.category_name}</p>
              <p className="mr-3">
                {category.category_view_count}
                <i className="fa fa-street-view mx-1" aria-hidden="true"></i>
              </p>
            </div>
          );
        })}
        <h6 className={others.length>0?"":"d-none"}>All</h6>
        {others.map((category) => {
          return (
            <div
              onClick={() => handleSelect(category)}
              className="bg-dark p-2 ml-3 mb-2 text-light d-flex justify-content-between btn"
              style={{ borderRadius: "10px" }}
            >
             <p>{category.category_name}</p>
              <p className="mr-3">
                {category.category_view_count}
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
