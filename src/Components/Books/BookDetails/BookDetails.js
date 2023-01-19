import React,{useEffect,useState} from 'react';
import StarRatings from 'react-star-ratings';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getBookById,addToCart} from '../../../action/index';
const LazyTableDetails = React.lazy(() => import('./TableDetails'));
const LazyRelatedBook = React.lazy(() => import('./RelatedBook'));
const BookDetails = () => {
    let [inputValue,setInputValue]=useState(1);
    const {id}=useParams();
    const dispatch=useDispatch();  
    useEffect(()=>{
        dispatch(getBookById(id));
    },[dispatch,id]);
    const {book}=useSelector((state)=>state.book);
  return (
    <div className='container'>
        <div>
            <p className='text-muted fs-6'>{`Home/Books/`}<span className='text-blue'>{book.title}</span></p>
        </div>
        <div className='row algin-items-center mt-5'>
            <div className='col-lg-9 col-md-10 col-sm-12'>
                <div className='row'>
                    <div className='col-12 d-flex algin-items-center'>
                        <div className='row'>
                            <div className='col-6 col-sm-6 col-md-5'>
                                <img src={book?.image} alt={book?.title}/>
                            </div>
                            <div className='ms-5 ms-lg-5 col-6 col-sm-6'>
                                <h1 className='text-dark fs-5 fw-1'>{book?.title}</h1>
                                <p className='text-muted'>{`Author:${book?.author}`}</p>
                                <div className='d-flex algin-items-center'>
                                    <StarRatings rating={book?.rating} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>
                                    <div className='mt-1 ms-3'>{`${book?.rating} Rating`}</div>
                                </div>
                                <div className='w-25 my-3 text-blue position-relative p-3 rounded-2' style={{border:'2px solid #1C8CCE'}}>
                                    <p className='position-absolute start-50 top-50 translate-middle'>{`$${book?.price}`}</p>
                                </div>
                                <p className='text-muted'>{book?.description}</p>
                                <div className='d-flex justify-content-end mt-5'>
                                    <div className='d-flex me-3'>
                                        <div role='button' onClick={()=>inputValue> 1 && setInputValue(inputValue - 1)} className='me-2 position-relative text-muted border border-muted rounded-circle' style={{width:'35px',height:'35px'}}>
                                            <p className='position-absolute start-50 top-50 translate-middle'>-</p>
                                        </div>
                                            <input type='text' style={{width:'60px'}}  className='text-center rounded-5 input' value={inputValue}/> 
                                        <div role='button' onClick={()=>setInputValue(inputValue + 1)} className='ms-2 position-relative text-muted border border-muted rounded-circle' style={{width:'35px',height:'35px'}}>
                                            <p className='position-absolute start-50 top-50 translate-middle'>+</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={()=>dispatch(addToCart(book,inputValue))} className='text-white bg-blue px-4 py-2 border-0 rounded-4 shadow-sm p-3 mb-5rounded'>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-12'>
                        <React.Suspense>
                            <LazyTableDetails book={book}/>
                        </React.Suspense>
                    </div>
                </div>
            </div>
            <React.Suspense>
                <LazyRelatedBook />
            </React.Suspense>
        </div>
    </div>
  )
}

export default BookDetails