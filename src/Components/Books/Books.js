import React from 'react'
import img1 from '../../images/100915.jpg';
import StarRatings from 'react-star-ratings';
export default function Book() {
  return (
   <>
   <div className='container d-flex'>

  <div class="sidebar">
    <h4>Shop by Category</h4>
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


<div className='books'>

<div className="book-card">
            <img src={img1} alt="" />
            <div className="mt-2">
              <h4>The crown</h4>
              <p>Kiera cass</p>
              <h5>29.2$</h5>

              <div className="rate d-flex">
              <StarRatings rating={4} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>

                <div className="review  mt-1 ms-2">
                  <p>368 reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="book-card">
            <img src={img1} alt="" />
            <div className="mt-2">
              <h4>The crown</h4>
              <p>Kiera cass</p>
              <h5>29.2$</h5>

              <div className="rate d-flex">
              <StarRatings rating={4} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>


                <div className="review  mt-1 ms-2">
                  <p>368 reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="book-card">
            <img src={img1} alt="" />
            <div className="mt-2">
              <h4>The crown</h4>
              <p>Kiera cass</p>
              <h5>29.2$</h5>

              <div className="rate d-flex">
              <StarRatings rating={4} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>


                <div className="review  mt-1 ms-2">
                  <p>368 reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="book-card">
            <img src={img1} alt="" />
            <div className="mt-2">
              <h4>The crown</h4>
              <p>Kiera cass</p>
              <h5>29.2$</h5>

              <div className="rate d-flex">
              <StarRatings rating={4} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>


                <div className="review  mt-1 ms-2">
                  <p>368 reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="book-card">
            <img src={img1} alt="" />
            <div className="mt-2">
              <h4>The crown</h4>
              <p>Kiera cass</p>
              <h5>29.2$</h5>

              <div className="rate d-flex">
              <StarRatings rating={4} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>


                <div className="review  mt-1 ms-2">
                  <p>368 reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="book-card">
            <img src={img1} alt="" />
            <div className="mt-2">
              <h4>The crown</h4>
              <p>Kiera cass</p>
              <h5>29.2$</h5>

              <div className="rate d-flex">
              <StarRatings rating={4} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>


                <div className="review  mt-1 ms-2">
                  <p>368 reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="book-card">
            <img src={img1} alt="" />
            <div className="mt-2">
              <h4>The crown</h4>
              <p>Kiera cass</p>
              <h5>29.2$</h5>

              <div className="rate d-flex">
              <StarRatings rating={4} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>


                <div className="review  mt-1 ms-2">
                  <p>368 reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="book-card">
            <img src={img1} alt="" />
            <div className="mt-2">
              <h4>The crown</h4>
              <p>Kiera cass</p>
              <h5>29.2$</h5>

              <div className="rate d-flex">
              <StarRatings rating={4} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>


                <div className="review  mt-1 ms-2">
                  <p>368 reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="book-card">
            <img src={img1} alt="" />
            <div className="mt-2">
              <h4>The crown</h4>
              <p>Kiera cass</p>
              <h5>29.2$</h5>

              <div className="rate d-flex">
              <StarRatings rating={4} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>


                <div className="review  mt-1 ms-2">
                  <p>368 reviews</p>
                </div>
              </div>
            </div>
          </div>
   </div>



   

   </div>
   </>
  )
}


