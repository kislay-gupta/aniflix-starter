import React, { useEffect, useState } from "react";

import episodes from "../assets/episodes.svg";
import star from "../assets/star.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import ReactPlayer from "react-player";

const AnimeDetails = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getAnimeById = () => {
    setIsLoading(true);
    axios
      .get(`https://api.jikan.moe/v4/anime/${id}`)
      .then((response) => {
        setAnime(response.data.data);
        console.log(response.data.data, "anime by id");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getAnimeById();
  }, []);
  return anime ? (
    <>
      <div className="max-w-4xl mx-auto  p-6 flex">
        {/* Movie Poster */}
        <div className="w-1/3">
          <img
            src={anime.images?.jpg.large_image_url}
            alt="poster"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Movie Details */}
        <div className="w-2/3 pl-6">
          <h1 className="text-4xl font-bold">{anime.title}</h1>
          <p className="text-xl my-2">
            {anime.year} - {anime.season}.
          </p>
          <div className="flex items-center my-auto">
            <img src={star} alt="star" className="w-5 h-5 my-auto" />
            <span className="ml-2  text-yellow-400 my-auto font-semibold">
              {anime.score}
            </span>
            <span className="ml-2">/ 10</span>
          </div>
          <div className="flex items-center my-2 gap-2">
            <img src={episodes} alt="episodes" className="w-5 h-5" />

            <p className="text-gray-400">
              {anime.episodes} episodes - {anime.duration}
            </p>
          </div>
          <div className="flex space-x-3 my-2">
            {anime.genres?.map((genre) => {
              return (
                <p className="bg-gray-700 text-gray-300 px-3 py-1 rounded">
                  {genre.name}
                </p>
              );
            })}
          </div>
          <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded w-max">
            {anime.rating}
          </div>
          <div className="mt-4">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn bg-gray-700 text-gray-300 px-3 py-1 rounded w-max"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Trailer
            </button>
            <dialog id="my_modal_2" className="modal ">
              <div className="modal-box  flex justify-center w-11/12 max-w-3xl">
                <ReactPlayer url={anime.trailer?.url} />
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
      <div className="mt-4 mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p>{anime.synopsis}</p>
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default AnimeDetails;
