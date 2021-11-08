import axios from "axios";
const key = process.env.REACT_APP_MOVIE_API_KEY;

const api = axios.create({
  baseURL: "https://www.omdbapi.com?apikey=" + key,
});

// api.interceptors.request.use((config) => config);

export const getMovies = async ({ queryKey }) => {
  try {
    // eslint-disable-next-line
    const [_key, searchText, pageNum] = queryKey;

    const { data } = await api("", {
      params: { s: searchText, page: pageNum },
    });

    return data;
  } catch (err) {
    throw Error(err);
  }
};

export const getMovie = async ({ queryKey }) => {
  try {
    // eslint-disable-next-line
    const [_key, id] = queryKey;
    const { data } = await api("", { params: { i: id } });

    return data;
  } catch (err) {
    throw Error(err.message);
  }
};
