import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getTopRate} from '../../action/index'
import {useNavigate} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Rated() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {topRate} = useSelector((state) => state.book);
  useEffect(()=>{
    dispatch(getTopRate())
  },[dispatch])
  return (
    <>
      <div className='container rate'>
          <div className='d-flex align-items-center justify-content-between mb-4 mt-5'>
            <h3 className='text-capitalize' style={{opacity:'0.8'}}>top rate books</h3>
          </div>
          <div className='row mb-3'>
            {
              topRate.slice(0,6).map((item,index)=>(
                <div onClick={()=>navigate(`/BookDetails/${item?._id}`)} key={item?._id} className='col-12 col-sm-6 col-md-4 col-xl-2 border-0 mb-sm-0 mb-5 card'>
                  <LazyLoadImage src={item?.image} alt={item?.title} width={200} height={300}/>
                    <div className='mt-2'>
                      <h5>{item?.title}</h5>
                      <p>{item?.author}</p>
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
