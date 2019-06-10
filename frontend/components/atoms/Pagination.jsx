import Link from 'next/link';
import ReactPaginate from 'react-paginate';

const Pagination = ({ totalPage }) => {
  return (
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={totalPage}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      // onPageChange={this.handlePageClick}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
  )

}

export default Pagination;
