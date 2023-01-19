import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {deleteCart} from '../../../action/index';
import {useDispatch} from'react-redux';
const TotalCheckOut = ({total}) => {
    const users=JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();
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
    const goToUser=()=>{
            toast.error(`You Need To Login/Register To Do That`);
            navigate('/Auth');
    }
    const onToken=async (stripToken)=>{
        const res=await axios.post('https://finalbackend-lrga.onrender.com/api/stripe/payment',{
            tokenId:stripToken?.id,
            amount:total *100
        });
        if(res?.data){
            const user=JSON.parse(localStorage.getItem('user'));
            if(user){
                dispatch(deleteCart(user?._id));
                toast.success('Success Payment!');
            }else{
                toast.success('Success Payment!');
            }
        }else{
            toast.error('Error Payment!');
        }
        
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
                    {
                        users? (
                            <StripeCheckout
                                name='E-Commerce'
                                description={`Your Order Is ${total}`}
                                billingAddress
                                shippingAddress
                                token={onToken}
                                stripeKey='pk_test_51MOLREFLtO945TkbLgLZbEfoqlYMBXePGcXt1N8rx6GpG8kSLapNR5Gmw6c3igZqC2E9ydPZSt7iX83DfuL9OTgH00Y9ytBRHs'
                                
                                >
                        <button onClick={checkoutHandler} className='btn btn-primary  border-blue rounded-5 px-5 py-2 text-uppercase'>process checkout</button>
                    </StripeCheckout>
                        ):(
                            <button onClick={goToUser} className='btn btn-primary  border-blue rounded-5 px-5 py-2 text-uppercase'>process checkout</button>
                        )
                    }
                    <ToastContainer />
                </div>
            </div>
        </div>
  )
}

export default React.memo(TotalCheckOut);