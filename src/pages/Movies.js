import { useEffect, useRef } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

import { additionalKey } from "helpers";
import { getMovies } from "../api";
import { Movie, Pagination, ErrorUI } from "../components/";
import { useSearchParamAndPageNum } from "../custom-hooks";

const Movies = () => {
  const isRendered = useRef(false);
  const history = useHistory();
  const queryClient = useQueryClient();

  const [searchText, pageNum] = useSearchParamAndPageNum();

  // if we don't use keepPreviousData option, the UI would jump in and out
  // of the success and loading states as different queries are created and
  // destroyed for each page or cursor
  const res = useQuery(["movies", searchText, pageNum], getMovies, {
    keepPreviousData: true,
  });

  const { isLoading, isFetching, data, error, isPreviousData } = res;

  useEffect(() => {
    if (isRendered.current) document.getElementsByTagName("article")[0].focus();
    isRendered.current = false;
  }, [pageNum]);

  useEffect(() => {
    if (!isPreviousData && data?.hasMore) {
      queryClient.prefetchQuery(["movies", searchText, pageNum + 1], getMovies);
    }
  }, [data, pageNum, queryClient, searchText, isPreviousData]);

  const handlePageChange = (e) => {
    history.push(`?s=${searchText}&page=${e.selected + 1}`);
    isRendered.current = true;
  };

  return (
    <>
      {isLoading ? (
        <div style={{ textAlign: "center", padding: "2.5em 0" }}>
          <Loader type="Puff" color="coral" height={120} width={120} />
        </div>
      ) : error ? (
        <ErrorUI />
      ) : data?.Response === "False" ? (
        <ErrorUI
          msg="Aradığınız kelimeye uygun bir film bulunamadı... Yazdığınız kelimeyi
          tekrar kontrol edin! ÖR: Birden fazla kelime varsa kelimeleri bitişik
          yazmayın."
          style={{ margin: "1.2em" }}
        />
      ) : (
        <>
          <h1 style={{ margin: "1em 0" }}>
            {searchText && searchText.toUpperCase()} kelimesi ile ilgili filmler
          </h1>
          <section>
            {data &&
              data.Search.map((movie) => (
                <Movie key={`${movie.imdbID + additionalKey()}`} {...movie} />
              ))}
          </section>
        </>
      )}
      {data && !isFetching && data?.Response === "True" && (
        <Pagination
          handlePageChange={handlePageChange}
          data={data}
          pageNum={pageNum}
        />
      )}
    </>
  );
};

export default Movies;
