import React from 'react'
import Home from '../../../images/home.avif';
import Home1 from '../../../images/sticker.webp';
import imagePlaceHolder from '../../../images/images.avif'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link} from 'react-router-dom'
const HomeSection = () => {
  return (
    <div className='position-relative'>
    <div className='position-relative section'>
      <LazyLoadImage src={Home} alt='Book Section' type='image/avif' className='w-100' style={{height:'500px'}}/>
    </div>
    <div className='position-absolute lazyimage d-flex'>
      <LazyLoadImage src={Home1} alt='book' placeholderSrc={imagePlaceHolder}  type='image/avif' width={450}/>
      <div className='m-auto ms-5'>
            <p className='text-uppercase fs-5' style={{color:'#1C8CCE'}}>back to school</p>
            <h1 className='text-uppercase'>go to <span style={{color:'#1C8CCE',fontWeight:'bold'}}>buy book</span></h1>
            <Link to={'/Books'}  className='btn btn-outline rounded-4 px-5 mt-3 text-white py-2' style={{backgroundColor:'#1C8CCE'}}>Get The Buy</Link>
        </div>
    </div>
    </div>
  )
}

export default HomeSection;