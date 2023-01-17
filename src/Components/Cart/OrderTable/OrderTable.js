import React,{useState} from 'react'

const OrderTable = ({CartItem,changeQuantity}) => {
    const [quantity,setQuantity]=useState(1);
  return (
<div className='mt-5 container shopping-table'>
            <table className='w-100'>
                <thead className='border-bottom text-uppercase text-gray'>
                    <tr>
                        <th className='text-center px-lg-5 py-lg-3'>
                            items
                        </th>
                        <th className='text-center'>Quantity</th>
                        <th className='text-center'>Price</th>
                        <th className='text-center'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {CartItem.map((cart,index)=>(
                        <tr key={index} className='border-bottom'>
                            <td className='pe-lg-5 py-lg-3'>{
                                (
                                    <div className='d-flex'>
                                        <img src={cart.image_url} alt={cart.authors} className='me-2' width='70' height='100'/>
                                        <div className='mt-lg-4 ms-lg-4'>
                                            <h1 className='fs-6'>{cart.title}</h1>
                                            <p>{`Author:${cart.authors}`}</p>
                                        </div>
                                    </div>
                                )
                                }
                            </td>
                            <td className='px-lg-5 text-center py-lg-3'>
                                {
                                    (
                                        <div className='d-flex ms-lg-5'>
                                            <div role='button' onClick={()=>setQuantity(changeQuantity(--cart.quantity,cart?.id))} className='me-2 position-relative text-muted border border-muted rounded-circle' style={{width:'35px',height:'35px'}}>
                                                <p className='position-absolute start-50 top-50 translate-middle'>-</p>
                                            </div>
                                                <input type='text' style={{width:'60px'}}  className='text-center rounded-5 input' placeholder='1' value={quantity} min={1}/> 
                                            <div role='button' onClick={()=>setQuantity(changeQuantity(++cart.quantity,cart?.id))} className='ms-2 position-relative text-muted border border-muted rounded-circle' style={{width:'35px',height:'35px'}}>
                                                <p className='position-absolute start-50 top-50 translate-middle'>+</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </td>
                            <td className='fw-semibold px-lg-5 text-center py-lg-3'>
                                {`USD $${cart.price}`}
                            </td>
                            <td className='fw-semibold px-lg-5 text-center py-lg-3'>
                                {`USD $${cart.total}`}
                            </td>
                            <td className='px-lg-5 text-center py-lg-3'>
                                <svg role='button' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="text-muted bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}


export default React.memo(OrderTable);