import React from 'react'
import img1 from '../../images/100915.jpg';
import img2 from '../../images/378.jpg';
import img3 from '../../images/6487308.jpg';
import img4 from '../../images/662.jpg';
import img5 from '../../images/92303.jpg';
import img6 from '../../images/15881.jpg';
const data=[
  {
    id:1,
    img:{img1},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:2,
    img:{img2},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:3,
    img:{img3},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:4,
    img:{img4},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:5,
    img:{img5},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
  {
    id:6,
    img:{img6},
    title:'The crown',
    desc:'Kiera cass',
    price:29.2,
    review:368 
  },
]
export default function Rated() {
  return (
    <>
      <div className='container'>
          <div className='d-flex align-items-center justify-content-between mb-4 mt-5'>
            <h3 className='text-capitalize' style={{opacity:'0.8'}}>top rate books</h3>
            <div className='text-primary me-3' role='button'>view all</div>
          </div>
          <div className='row'>
            {
              data.map(item=>(
                <div key={item?.id} className='col-12 col-sm-6 col-md-4 col-xl-2 border-0 mb-sm-0 mb-3'>
                  <img src={img1} alt=""  style={{width:'calc(100% /1)'}}/>
                    <div className='mt-2'>
                      <h5>{item?.title}</h5>
                      <p>{item?.desc}</p>
                      <a className='btn btn-outline-primary  w-50' href="#">{`$${item?.price}`}</a>
                    </div>
                </div> 
              ))
            }
          </div>
            
            {/* <div className='card me-4 border-0'>
            <img src={img1} alt="" />
            <div className='mt-2'>
            <h5>The crown</h5>
            <p>Kiera cass</p>
            <a className='btn btn-outline-primary  w-50' href="#">$12.5</a>
            </div>
            </div> */}
      </div>
    </>
    
  )
}
