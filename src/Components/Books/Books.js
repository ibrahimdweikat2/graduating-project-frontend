import React,{useState,useEffect} from 'react'
import StarRatings from 'react-star-ratings';
import {useNavigate,useLocation} from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import {fetchBooks} from '../../action/index'
const LazyPagination=React.lazy(()=>import('../Pagination/Pagination'));
const useQuery=()=>{
  return new URLSearchParams(useLocation().search);
}
export default function Book() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {books}=useSelector(state=>state.book);
  const [cat,setCat]=useState('all');
  const [format,setFormat]=useState('all');
  const [filterBook,setFilterBook]=useState(books);
  const page=useQuery().get('page') ||1;
  useEffect(()=>{
    dispatch(fetchBooks(page));
  },[dispatch,page])
  useEffect(()=>{
    if(format === 'all'){
      setFilterBook(books);
    }else {
      setFilterBook(books.filter(book=>book.format===format));
    }
  },[format,books]);
  useEffect(()=>{
    if(cat==='all'){
      setFilterBook(books);
    }else{
      setFilterBook(books.filter(book=>book?.categories.includes(cat)));
    }
  },[cat,books])
  return (
   <>
   <div className='container'>
    <div className='mt-5 text-gray'>
      Home/<span className='text-blue'>Books</span>
    </div>
    <div className='d-flex mt-3'>
    <div class="sidebar mt-4">
    <h4 className='mb-3'>Shop by Category</h4>
    <a onClick={()=>setCat('all')} className="active">All Genre</a>
    <a onClick={()=>setCat('Classics')}>Classics</a>
    <a onClick={()=>setCat('History')}>History</a>
    <a onClick={()=>setCat('Romance')}>Romance</a>
    <a onClick={()=>setCat('Childrens')}>Childrens</a>
    <a onClick={()=>setCat('Academic')}>Academic</a>
    <a onClick={()=>setCat('Literature')}>Literature</a>
    <a onClick={()=>setCat('Fiction')}>Fiction</a>
    <a onClick={()=>setCat('Historical')}>Historical</a>
    <a onClick={()=>setCat('Animals')}>Animals</a>
    <br/>
    <br/>
    <br/>
    <h4>Book Format</h4>
    <a className="active"  onClick={()=>setFormat('all')}>All Format</a>
    <a  onClick={()=>setFormat('Hardcover')}>Hardcover</a>
    <a  onClick={()=>setFormat('Paperback')}>Paperback</a>
  
</div>


<div className='books mt-5'>

    {filterBook.map(book=>(
      <div key={book?._id} className="book-card mt-3" onClick={()=>navigate(`/BookDetails/${book?._id}`)}>
      <img src={book?.image} alt="" style={{width:'calc(100%)',height:'calc(100% / 1.5)'}}/>
      <div className="mt-2">
        <h4>{book?.title}</h4>
        <p>{book?.author}</p>
        <h5>{`${book?.price}$`}</h5>

        <div className="rate d-flex">
        <StarRatings rating={book?.rating} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>

          <div className="review  mt-1 ms-2">
            <p>{`${book?.review_count} reviews`}</p>
          </div>
        </div>
      </div>
    </div>
    ))}
   </div>
    </div>
    <div className='pagination d-flex justify-content-center'>
      <LazyPagination />
    </div>
   </div>
   </>
  )
}


