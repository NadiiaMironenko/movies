import React from "react";
// import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

function MovieInfo({ film }) {
  const {
    title,
    poster_path,
    overview,
    vote_average,
    genres,
    vote_count,
    production_countries,
    production_companies,
  } = film;
  return (
    <>
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt="poster"
          />
        </div>
        <div>
          <h1>{title}</h1>
          <h2>
            <span>Overview:</span> {overview}
          </h2>

          <p>
            <span>Votes:</span> {vote_count}
          </p>
          <p>
            <span>Vote average:</span> {vote_average}
          </p>
          <ul>
            Genres:
            {genres !== undefined &&
              genres.map((item) => {
                const { id, name } = item;
                return <li key={id}>{name}</li>;
              })}
          </ul>
          <ul>
            {" "}
            <span>Production countries:</span>
            {production_countries !== undefined &&
              production_countries.map((item) => {
                const { name } = item;
                return <li key={uuidv4()}>{name}</li>;
              })}
          </ul>
          <ul>
            {" "}
            <span>Production companies:</span>
            {production_companies !== undefined &&
              production_companies.map((item) => {
                const { name } = item;
                return <li key={uuidv4()}>{name}</li>;
              })}
          </ul>
        </div>
      </div>
      <div>
        <p>Additional information:</p>
      </div>
    </>
  );
}

MovieInfo.propTypes = {};

export default MovieInfo;
