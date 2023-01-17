import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TotalCheckOut = ({total}) => {
    const navigate=useNavigate();
    const checkoutHandler=()=>{
        total ===0&& toast.error(`Your Total Is ${total}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
  return (
    <div className='container-sm mt-lg-5'>
            <div className='d-flex justify-content-end'>
                <div className='d-flex justify-content-around align-items-center w-50 text-uppercase text-gray'>
                    <h1 className='fs-6 '>Total</h1>
                    <p className='mt-2 fw-semibold'>{`USD ${total}`}</p>
                </div>
            </div>
            <div className='d-flex justify-content-end'>
                <hr className='w-50 fw-semibold'/>
            </div>
            <div className='d-flex justify-content-end'>
                <div className='d-flex justify-content-around align-items-center bttn'>
                    <button onClick={()=>navigate('/Books')} className='text-blue border-blue rounded-5 px-5 py-2 text-uppercase me-3' style={{backgroundColor:'transparent'}}>Continue To Shop</button>
                    <button onClick={checkoutHandler} className='btn btn-primary  border-blue rounded-5 px-5 py-2 text-uppercase'>process checkout</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
  )
}

export default React.memo(TotalCheckOut);