import React from 'react'
import BookImageSrc from '../../../images/book.avif';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const HomeSection = () => {
    console.log('section render');
  return (
    <div className='position-relative section'>
        <LazyLoadImage src={BookImageSrc} alt='Book Section' type='image/avif' className='w-100' style={{height:'100%'}}/>
        <div className='content'>
            <p className='text-uppercase fs-5' style={{color:'#1C8CCE'}}>back to school</p>
            <h1 className='text-uppercase'>go to <span style={{color:'#1C8CCE',fontWeight:'bold'}}>buy book</span></h1>
            <a href='3' className='btn btn-outline rounded-4 px-5 mt-3 text-white py-2' style={{backgroundColor:'#1C8CCE'}}>Get The Buy</a>
        </div>
    </div>
  )
}

export default HomeSection;