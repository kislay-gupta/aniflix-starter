import React from "react";
import episode from "../assets/episodes.svg";
import star from "../assets/star.svg";
import { useNavigate } from "react-router-dom";

const AnimeCard = ({ anime }) => {
  //   console.log(anime, "from the card");
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/anime/${anime.mal_id}`)}
        className="relative cursor-pointer overflow-hidden rounded-lg shadow transition hover:shadow-lg"
      >
        <img
          alt={anime.title}
          src={anime.images.jpg.large_image_url}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <div className="flex gap-2 ">
              <p className=" badge badge-outline text-xs text-white/90">
                {" "}
                {anime.year}{" "}
              </p>
              <p className=" badge badge-outline text-xs text-white/90">
                {" "}
                {anime.type}{" "}
              </p>
            </div>
            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">{anime.title}</h3>
            </a>

            <p className="mt-2 line-clamp-3 flex gap-2 text-sm/relaxed text-white/95">
              {anime.genres.slice(0, 3).map((genre) => {
                return (
                  <span
                    key={genre.name}
                    className="text-xs badge badge-outline"
                  >
                    {genre.name}
                  </span>
                );
              })}
            </p>
            <div className="flex mt-4 items-center gap-2">
              <div className="flex gap-2 items-center">
                <img src={episode} alt="eps" />
                <p>{anime.episodes}</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="rating" />
                <p>{anime.score}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeCard;
