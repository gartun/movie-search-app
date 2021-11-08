import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

import noImg from "../assets/noimg.svg";

import { getMovie } from "../api";

import { ErrorUI } from "../components";

import { filterUnnecessaryInfo } from "../helpers";

const MoviePage = () => {
  const { id } = useParams();

  const res = useQuery(["movie", id], getMovie);

  const { isLoading, data, error } = res;

  if (isLoading)
    return (
      <div style={{ textAlign: "center", padding: "2.5em 0" }}>
        <Loader type="Puff" color="coral" height={120} width={120} />
      </div>
    );

  if (error) return <ErrorUI msg={error} />;

  if (data?.Response === "False") return <ErrorUI msg={data?.Error} />;
  const { Poster, Title } = data;

  const infos = filterUnnecessaryInfo(data);

  return (
    <>
      <div className="movie-page">
        <div>
          <h1>Film Bilgileri</h1>
        </div>
        <h2>{Title}</h2>
        <img src={Poster !== "N/A" ? Poster : noImg} alt="film afişi" />
        <ul>
          {infos.map((info) => (
            <li key={info.id}>
              <strong>{info.name}:</strong> {info.value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MoviePage;
