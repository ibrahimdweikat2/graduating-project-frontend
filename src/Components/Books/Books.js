import React,{useEffect} from 'react'
import img1 from '../../images/100915.jpg';
import StarRatings from 'react-star-ratings';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBooks} from '../../action/index';
export default function Book() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {books}=useSelector(state=>state.book);
  useEffect(()=>{
    dispatch(fetchBooks());
  },[dispatch])
  return (
   <>
   <div className='container'>
    <div className='mt-5 text-gray'>
      Home/<span className='text-blue'>Books</span>
    </div>
    <div className='d-flex mt-3'>
    <div class="sidebar mt-4">
    <h4 className='mb-3'>Shop by Category</h4>
    <a class="active" href="#">All Genre</a>
    <a href="#">Arts&Photography</a>
    <a href="#">History</a>
    <a href="#">Romance</a>
    <a href="#">Arts&Photography</a>
    <a href="#">Arts&Photography</a>
    <a href="#">Arts&Photography</a>
    <a href="#">Arts&Photography</a>
    <a href="#">Arts&Photography</a>
    <a href="#">Arts&Photography</a>
    <a href="#">Arts&Photography</a>
    <br/>
    <br/>
    <br/>
    <h4>Book Format</h4>
    <a class="active" href="#">All Format</a>
    <a href="#">Hardcover</a>
    <a href="#">Paperback</a>
    <a href="#">Electronic Book</a>
    <a href="#">Large Print</a>
  
</div>


<div className='books mt-5'>

    {books.map(book=>(
      <div key={book?._id} className="book-card" onClick={()=>navigate(`/BookDetails/${book?._id}`)}>
      <img src={img1} alt="" style={{width:'calc(100%)',height:'calc(100% / 1.5)'}}/>
      <div className="mt-2">
        <h4>{book?.title}</h4>
        <p>{book?.description}</p>
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

   </div>
   </>
  )
}


