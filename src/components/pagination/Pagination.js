import ReactPaginate from "react-paginate";

import "./pagination.css";

const Pagination = ({ handlePageChange, data, pageNum }) => {
  const { totalResults } = data;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="sonraki"
      onPageChange={handlePageChange}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      forcePage={+pageNum - 1}
      pageCount={Math.ceil(totalResults / 10)}
      previousLabel="önceki"
      renderOnZeroPageCount={null}
      containerClassName={"pagination"}
      pageClassName={"page-item show-no-on-mobile"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-link prev-next prev"}
      nextClassName={"page-link prev-next next"}
      breakLinkClassName={"page-link show-no-on-mobile"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
