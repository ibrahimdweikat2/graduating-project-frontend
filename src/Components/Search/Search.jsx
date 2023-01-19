import React from 'react'
import {useSelector} from 'react-redux'
import {LazyLoadImage} from "react-lazy-load-image-component";
import StarRatings from 'react-star-ratings';
import { useNavigate } from 'react-router-dom';
const Search = () => {
    const {search} =useSelector(state => state.book);
    const navigate = useNavigate();
  return (
    <div className='container mt-5'>
        <div className="row">
                {
                  search.map(item=>(
                    <div onClick={()=>navigate(`/BookDetails/${item?._id}`)} key={item?._id} className="recommended-card col-12 col-md-4 col-xl-3">
                  <LazyLoadImage src={item?.image} alt="*" height={500} width={300}/>
                  <div className="mt-2">
                    <h4>{item?.title}</h4>
                    <p>
                        {item?.author}
                    </p>
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
  )
}

export default Search