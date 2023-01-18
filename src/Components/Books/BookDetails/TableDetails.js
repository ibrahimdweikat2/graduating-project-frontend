import React from 'react'

const TableDetails = ({book}) => {
  return (
    <table className='mb-5 table-details'>
                        <tr>
                            <td className='text-start py-3 ps-3 table-details' style={{width:'calc(855px/4)',backgroundColor:'#EDEDED'}}>Book Title</td>
                            <td className='text-start py-3 ps-3 table-details' style={{width:'calc((855px/3)*3)'}}>{book.title}</td>
                        </tr>
                        <tr>
                            <td className='text-start py-3 ps-3 table-details' style={{width:'calc(855px/4)',backgroundColor:'#EDEDED'}}>Author</td>
                            <td className='text-start py-3 ps-3 table-details' style={{width:'calc((855px/3)*3)'}}>{book.author}</td>
                        </tr>
                        <tr>
                            <td className='text-start py-3 ps-3 table-details' style={{width:'calc(855px/4)',backgroundColor:'#EDEDED'}}>Book Formate</td>
                            <td className='text-start py-3 ps-3 table-details' style={{width:'calc((855px/3)*3)'}}>{`${book.format}, ${book.num_pages} pages`}</td>
                        </tr>
    </table>
  )
}

export default React.memo( TableDetails)