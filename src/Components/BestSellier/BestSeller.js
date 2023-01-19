import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {getCurrentSel} from '../../action/index'
export default function BestSeller() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {currentSel} = useSelector((state) => state.book);
  useEffect(()=>{
    dispatch(getCurrentSel())
  },[dispatch])
  return (
    <>
      <div className='container'>
          <div className='d-flex align-items-center justify-content-between mb-4'>
            <h3 style={{opacity:'0.8'}}>Current Bestsellers</h3>
          </div>
          <div className='row'>
            {
              currentSel.slice(0,6).map(item=>(
                <div key={item?._id} onClick={()=>navigate(`/BookDetails/${item?._id}`)} className='col-12 col-sm-6 col-md-4 col-xl-2 border-0 mb-xl-0 mb-3'>
                  <LazyLoadImage src={item?.image} alt="" placeholderSrc={item?.image} height={300} width={200}/>
                    <div className='mt-2'>
                      <h5>{item?.title}</h5>
                      <p className='ms-2 text-gray fs-6'>{item?.author}</p>
                      <a className='btn btn-outline-primary  w-50' href="#">{`$${item?.price}`}</a>
                    </div>
                </div> 
              ))
            }
          </div>
      </div>
    </>

    
  )
}
