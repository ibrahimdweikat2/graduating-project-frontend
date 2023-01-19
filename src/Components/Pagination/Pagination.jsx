import React from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
const Pagination = () => {
    const {numberOfPages}=useSelector(state=>state.book);
    const navigate=useNavigate();
    const pageHandler=e=>{
        let page=e.selected +1;
        navigate(`/Books?page=${page}`);
    }
  return (
    <ReactPaginate 
    onPageChange={pageHandler}
    pageCount={numberOfPages}
    previousLabel={`Prev`}
    nextLabel={'Next'}
    containerClassName={'pagination pg pagination'}
    pageClassName={'page-item mx-2'}
    pageLinkClassName={'page-link rounded-circle text-blue'}
    previousClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextClassName={'page-item'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item mx-2'}
    breakLinkClassName={'page-link rounded-circle'}
    activeClassName={'active'}
    />
  )
}

export default Pagination