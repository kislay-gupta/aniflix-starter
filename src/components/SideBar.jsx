import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [genreList, setGenreList] = useState([]);
  const getAnimeGenre = () => {
    axios
      .get("https://api.jikan.moe/v4/genres/anime")
      .then((response) => {
        setGenreList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(genreList);
  useEffect(() => {
    getAnimeGenre();
  }, []);
  return (
    <section className="sticky left-0 top-8 pt-4 flex flex-col h-screen overflow-y-auto shrink  border-r p-6 lg:w-[266px] ">
      {genreList.map((genre) => {
        return (
          <NavLink
            key={genre.name}
            to={`/genre/${genre.mal_id}`}
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 text-gray-800 rounded-lg bg-gray-50 "
                : "block px-4 py-2   rounded-lg text-gray-50"
            }
          >
            {genre.name}
          </NavLink>
        );
      })}
    </section>
  );
};

export default SideBar;
