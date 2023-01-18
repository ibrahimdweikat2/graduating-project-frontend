import React,{useEffect} from "react";
import StarRatings from 'react-star-ratings';
import ShoppingCart from "../Cart/ShoppingCart/ShoppingCart";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useSelector,useDispatch} from 'react-redux';
import {useLocation} from "react-router-dom";
import {fetchBooks} from '../../action/index';
export default function Recommended() {
  // const dispatch=useDispatch();
  // const pathName=useLocation().pathname.split('/')[1];
  const {books:data} = useSelector(state=>state.book);
  // useEffect(()=>{
  //   data && dispatch(fetchBooks());
  // },[pathName,dispatch]);
  return (
    <>
      <ShoppingCart title={'Recommended Book'}/>
      <div className="container mt-5">
        <div className="text-dark my-5">
          <strong className="me-2" style={{opacity:'0.8'}}>Sort By </strong>
          <select style={{border:'none',color:'gray',opacity:'0.8'}}>
            <option value='newest'>Newest Item</option>
            <option value='asc'>Price(asc)</option>
            <option value='desc'>price(desc)</option>
          </select>
        </div>
        <div className="recommended row">
          {
            data.map(item=>(
              <div key={item?._id} className="recommended-card col-12 col-md-4 col-xl-3">
            <LazyLoadImage src={item?.image} alt="*" style={{width:'calc(100%/1.2)'}}/>
            <div className="mt-2">
              <h4>{item?.title}</h4>
              <p>{item?.description}</p>
              <h5>{`${item?.price}$`}</h5>

              <div className="rate d-flex">
              <StarRatings rating={item?.rating} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>

                <div className="review  mt-1 ms-2">
                  <p>{`${item?.review_count} reviews`}</p>
                </div>
              </div>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
