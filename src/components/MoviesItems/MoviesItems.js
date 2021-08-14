import { Link } from "react-router-dom";
import s from "./MoviesItems.module.css"

export default function MoviesListItems({ films, location }) {
  console.log(location);
  return (
    <ul className={s.items}>
      {films.map((popular) => {
        const { id, popularity, poster_path, title } = popular;
        return (
          <li key={id}>
            <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
              <img
                className={s.item}
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt=""
              ></img>
              <h2>{title}</h2>
              <p>Rating: {popularity}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}