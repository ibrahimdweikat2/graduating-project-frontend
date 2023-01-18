import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Register,Login} from '../../action/index'
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
const initFormData={
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  confirmPassword:'',
}
const Auth = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [isSign,setIsSign]=useState(true);
  const [formData,setFormData]=useState(initFormData);
  const ChangeHandler=event=>{
    setFormData({...formData,[event.target.name]:event.target.value});
  }
  const submitHandler=e=>{
    e.preventDefault();
    if(isSign){
      if(formData.password===formData.confirmPassword){
        dispatch(Register(formData));
        toast.success("Registration Successful");
        setIsSign(!isSign);
      }else{
        toast.error('Password does not match');
      }
    }else{
      dispatch(Login(formData));
      navigate('/Home');
    }
  }
  return (
    <div className='position-relative bg-auth'>
        <div className='bg-muted position-absolute top-50 start-50 translate-middle bg-white rounded-4 p-4'>
      <div>
        <h1 className='mb-4 pb-3 text-center'>{isSign ? "Sign Up" : "Sing In"}</h1>
      </div>
      <form onSubmit={submitHandler}>
        {isSign && (
          <div className="row">
          <div className="col-12 col-md-6 mb-2">
            <input type="text" className="form-control" placeholder="First name" name='firstName' onChange={ChangeHandler}/>
          </div>
          <div className="col-12 col-md-6">
            <input type="text" className="form-control" placeholder="Last name" name='lastName' onChange={ChangeHandler}/>
          </div>
        </div>
        )}
        <div className='row mt-2'>
          <div className='col-12 mb-2'>
            <input type="text" className="form-control" placeholder="Email" name='email' onChange={ChangeHandler}/>
          </div>
          <div className='col-12 mb-2'>
            <input type="password" className="form-control" placeholder="Password" name='password' onChange={ChangeHandler}/>
          </div>
          {isSign && (
            <div className='col-12 mb-2'>
            <input type="password" className="form-control" placeholder="Confirm Password" name='confirmPassword' onChange={ChangeHandler}/>
          </div>
          )}
        </div>
        <div className='row mt-2'>
          <div className='col-12'>
            <button type='submit' className='form-control btn btn-outline-danger py-2'>{!isSign ? "Sing In" :"Sing Up"}</button>
          </div>
          <div className='col-12 mt-3 text-center' role='button' onClick={()=>setIsSign(!isSign)}>
            {isSign ? 'Already Have An Account ? Sign In Now' : "Don't Have An Account ? Sign Up Now"}
          </div>
        </div>
      </form>
    </div>
        <ToastContainer />
    </div>
  )
}

export default Auth