import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimeCard from "../components/AnimeCard";
import Loader from "../components/Loader";
const Home = () => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const getAnimeData = () => {
    setIsLoading(true);
    axios
      .get(`https://api.jikan.moe/v4/top/anime?page=${currentPage}`)
      .then((response) => {
        setAnimeList(response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getAnimeData();
  }, [currentPage]);
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  console.log(currentPage);
  console.log(animeList);
  return (
    <div className="container mx-auto px-4">
      {isLoading && <Loader />}
      <section className="grid grid-cols-3 mt-4 gap-10">
        {animeList.map((anime) => {
          return <AnimeCard anime={anime} key={anime.mal_id} />;
        })}
      </section>
      <div className="flex justify-center gap-4 mt-5">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === totalPage}
          className="btn btn-active btn-secondary"
        >
          &#60;
        </button>
        <button
          onClick={handleNextPage}
          className="btn btn-active btn-secondary"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Home;
