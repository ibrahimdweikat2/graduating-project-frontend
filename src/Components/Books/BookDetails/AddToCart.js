import React,{useState} from 'react'

const AddToCart = () => {
    let [inputValue,setInputValue]=useState(1);
  return (
    <div className='d-flex justify-content-end mt-5'>
    <div className='d-flex me-3'>
        <div role='button' onClick={()=>setInputValue(inputValue > 1 && inputValue - 1)} className='me-2 position-relative text-muted border border-muted rounded-circle' style={{width:'35px',height:'35px'}}>
            <p className='position-absolute start-50 top-50 translate-middle'>-</p>
        </div>
            <input type='text' style={{width:'60px'}}  className='text-center rounded-5 input' value={inputValue}/> 
        <div role='button' onClick={()=>setInputValue(inputValue + 1)} className='ms-2 position-relative text-muted border border-muted rounded-circle' style={{width:'35px',height:'35px'}}>
            <p className='position-absolute start-50 top-50 translate-middle'>+</p>
        </div>
    </div>
    <div>
        <button className='text-white bg-blue px-4 py-2 border-0 rounded-4 shadow-sm p-3 mb-5rounded'>Add To Cart</button>
    </div>
    </div>
  )
}

export default React.memo( AddToCart)