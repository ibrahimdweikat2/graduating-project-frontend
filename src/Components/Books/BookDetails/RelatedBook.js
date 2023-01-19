import React from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
const RelatedBook = () => {
  const navigate=useNavigate();
  const {books,book}=useSelector(state=>state.book)
  const recommended =books.filter(item=> item?.format === book?.format && item?._id !== book?._id)
  return (
    <div className='col-lg-3 col-md-2 col-sm-12'>
        <p>Related Book</p>
        {recommended.slice(0,8).map(book=>(
            <div key={book?._id} className='d-flex mt-4' onClick={()=>navigate(`/BookDetails/${book?._id}`)}>
                <img src={book?.image} alt={book?.title} width='90px' height='150px'/>
                <div className='ms-2'>
                    <div className='text-muted mb-2' style={{fontSize:'12px'}}>{book?.title}</div>
                    <div className='text-muted mb-3' style={{fontSize:'12px'}}>{book?.author}</div>
                    <div className='text-blue'>{`$${book?.price}`}</div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default React.memo( RelatedBook)