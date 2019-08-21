import React, { Component } from 'react';
import Router from 'next/router';
import ReactPaginate from 'react-paginate';

class Pagination extends Component {
  constructor(props) {
    super(props);
    const { totalPage, path } = this.props;
    this.state = {
      totalPage: totalPage,
      path,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(e) {
    const { path } = this.state;
    const { selected } = e;
    Router.push(`/${path}?page=${selected+1}`);
  }
  
  render() {
    const { totalPage } = this.state;
    return (
      <nav className="pagination is-right">
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={totalPage}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination-list'}
          activeLinkClassName={'pagination-link is-current'}
          pageLinkClassName={'pagination-link'}
          previousLinkClassName={'pagination-link'}
          nextLinkClassName={'pagination-link'}
        />
      </nav>
    )
  }
}

export default Pagination;
