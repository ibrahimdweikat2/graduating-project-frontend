import React from 'react'

const RelatedBook = ({books}) => {
  return (
    <div className='col-lg-3 col-md-2 col-sm-12'>
        <p>Related Book</p>
        {books.map(book=>(
            <div key={book.id} className='d-flex mt-4'>
                <img src={book.image_url} alt={book.title} width='90px' height='150px'/>
                <div className='ms-2'>
                    <div className='text-muted mb-2' style={{fontSize:'12px'}}>{book.title}</div>
                    <div className='text-muted mb-3' style={{fontSize:'12px'}}>{book.authors}</div>
                    <div className='text-blue'>$13.99</div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default React.memo( RelatedBook)