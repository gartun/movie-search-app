import { useLocation } from "react-router-dom";

const useSearchParamAndPageNum = () => {
  const { search } = useLocation();

  const searchParamStartInd = search.indexOf("?s=");
  const searchParamAmpersandInd = search.indexOf("&", searchParamStartInd);
  const searchText = search.substring(
    searchParamStartInd + 3,
    searchParamAmpersandInd
  );

  const pageStartInd = search.indexOf("&page=");
  const pageNum = search.substring(pageStartInd + 6);

  return [decodeURIComponent(searchText), pageNum];
};

export default useSearchParamAndPageNum;
