import React from 'react';
import books from '../../../images/books.avif';
const ShoppingCart = ({title}) => {
  return (
    <div className='position-relative' style={{height:'30vh'}}>
        <div className='shopping'>
            <img src={books} alt='#' height='150' className='w-100'/>
            {
              title ? (
                <h1 className='text-white position-absolute start-50 top-50 translate-middle'>{title}</h1>
              ):(
                <div>
                  <svg role="button" xmlns="http://www.w3.org/2000/svg" width="100" height="80" fill="currentColor" className="position-absolute top-50 start-50 translate-middle text-white bi bi-cart2" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                  </svg>
                  <h1 className='text-white position-absolute start-50 top-50 translate-middle'>Shopping Cart</h1>
                </div>
              )
            }
            
        </div>
    </div>
  )
}

export default React.memo( ShoppingCart)