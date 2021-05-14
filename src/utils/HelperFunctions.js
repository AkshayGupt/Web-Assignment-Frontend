import axios from "axios";
import { API } from "../backend";

/**
 * Fetch all categories from the database.
 * @returns Array of data
 */
export const getAllCategories = async () => {
  const result = await axios.get(`${API}/api/getAllCategories`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  console.log("data:", result.data.data);
  if (result.data.status === "200") {
    return result.data.data;
  } else {
    return [];
  }
};

/**
 * Fetch top 5 popular categories from the database based on category view count.
 * @returns Array of data
 */
export const getPopularCategories = async () => {
  const result = await axios.get(`${API}/api/getAllCategories`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (result.data.status === "200") {
    return result.data.data;
  } else {
    return [];
  }
};

/**
 * Fetch all Playlist belonging to category [category_name]
 * @param {string} category_name - category_name
 * @returns Array of data
 */
export const getPlaylistsByCategory = async (category_name) => {
  const result = await axios.get(`${API}/api/getPlaylistsByCategory`, {
    params: {
      category_name: category_name,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (result.data.status === "200") {
    return result.data.data;
  } else {
    return [];
  }
};

/**
 * Fetch all Links in a playlist with id [playlist_id]
 * @param {int} playlist_id - playlist id
 * @returns Array of data
 */
export const getPlaylistById = async (playlist_id) => {
  const result = await axios.get(`${API}/api/getPlaylistById`, {
    params: {
      playlist_id: playlist_id,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (result.data.status === "200") {
    return result.data.data;
  } else {
    return [];
  }
};

/**
 * Create a new Playlist.
 * @param {string} category_name - Category name
 * @param {string} playlist_name - playlist Name
 * @param {string} playlist_description OPTIONAL, default = ""
 * @param {array} links Array of strings (video links)
 * @returns Data Object
 */
export const createPlaylist = async (
  category_name,
  playlist_name,
  playlist_description = "",
  links
) => {
  const data = {
    category_name: category_name,
    playlist_name: playlist_name,
    playlist_description: playlist_description,
    links: links,
  };
  const result = await axios.post(
    `${API}/api/createPlaylist`,
    JSON.stringify(data),
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  return result.data;
};

/**
 * Increase the category count by 1.
 * @param {int} category_id - category id
 * @returns Data Object
 */
export const increaseCategoryViewCount = async (category_id) => {
  const data = {
    category_id: category_id,
  };
  const result = await axios.put(
    `${API}/api/increaseCategoryViewCount`,
    JSON.stringify(data),
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return result.data;
};

/**
 * Increase the view count of playlist by 1.
 * @param {int} playlist_id - playlist id
 * @returns Data object
 */
export const increasePlaylistViewCount = async (playlist_id) => {
  const data = {
    playlist_id: playlist_id,
  };
  const result = await axios.put(
    `${API}/api/increasePlaylistViewCount`,
    JSON.stringify(data),
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return result.data;
};
