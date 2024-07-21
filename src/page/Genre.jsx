import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import Loader from "../components/Loader";
const Genre = () => {
  const { id } = useParams();
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getAnimeByGenre = () => {
    setIsLoading(true);
    axios
      .get(`https://api.jikan.moe/v4/anime?genres=${id}`)
      .then((response) => {
        setAnimeList(response.data.data);
        console.log(response.data.data, "anime by genre");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getAnimeByGenre();
  }, [id]);
  //   if (isLoading) return <Loader />;
  return (
    <div className="container mx-auto px-4">
      {isLoading && <Loader />}
      <section className="grid grid-cols-3 mt-4 gap-10">
        {animeList.map((anime) => {
          return <AnimeCard anime={anime} key={anime.mal_id} />;
        })}
      </section>
    </div>
  );
};

export default Genre;
