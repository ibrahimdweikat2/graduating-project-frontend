import React from "react";
import img1 from "../../images/100915.jpg";
import img2 from "../../images/378.jpg";
import img3 from "../../images/6487308.jpg";
import img4 from "../../images/662.jpg";
import img5 from "../../images/92303.jpg";
import img6 from "../../images/15881.jpg";
import StarRatings from 'react-star-ratings';
import ShoppingCart from "../Cart/ShoppingCart/ShoppingCart";
import {LazyLoadImage} from "react-lazy-load-image-component";
const data=[
  {
    id:1,
    img:{img1},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:2,
    img:{img1},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:3,
    img:{img1},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:4,
    img:{img1},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:5,
    img:{img1},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:6,
    img:{img1},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:7,
    img:{img1},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:8,
    img:{img1},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:9,
    img:{img1},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:10,
    img:{img1},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:11,
    img:{img1},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:12,
    img:{img1},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
]
export default function Recommended() {
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
              <div key={item.id} className="recommended-card col-12 col-md-4 col-xl-3">
            <LazyLoadImage src={img1} alt="*" style={{width:'calc(100%/1.2)'}}/>
            <div className="mt-2">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <h5>{`${item.price}$`}</h5>

              <div className="rate d-flex">
              <StarRatings rating={4} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>

                <div className="review  mt-1 ms-2">
                  <p>{`${item.review} reviews`}</p>
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
