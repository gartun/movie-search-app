import { Link } from "react-router-dom";

import noImg from "../../assets/noimg.svg";
import "./movie.css";

const Movie = (props) => {
  return (
    <article key={props.imdbID} tabIndex="-1">
      <img
        src={props.Poster !== "N/A" ? props.Poster : noImg}
        alt="film afişi"
      />
      <h3>{props.Title}</h3>
      <p>Çıkış Yılı: {props.Year}</p>
      <Link to={`/movie/${props.imdbID}`}>Film Ayrıntıları</Link>
    </article>
  );
};

export default Movie;
