import React from 'react';
import { BsJournalText } from "react-icons/bs";
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavBar = () => {
    const navigate=useNavigate();
    const {quantity} = useSelector(state=>state.cart);
  return (
        <div className='row mt-4'>
            <div className='col-sm-4 col-12 mt-3 mt-sm-auto'>
                <div className='d-flex align-items-center justify-content-center'>
                    <BsJournalText  className='mb-2 me-1 text-primary bookIcon'/>
                    <h1 className="navbar-brand text-muted text-uppercase book">bookshop</h1>
                </div>
            </div>
            <div className='col-sm-4 col-12 mt-3 mt-sm-0'>
                <form className="d-flex align-items-center justify-content-center w-100" role="search">
                    <div className='search d-flex align-items-center border border-muted rounded-4 w-100 w-sm-auto' style={{width:'100%'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        <input className="form-control me-2 border-0" type="search" placeholder="Search" />
                    </div>
                </form>
            </div>
            <div className='col-sm-4 col-12 mt-4 mt-sm-0'>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='position-relative'>
                        <p className='cartBuy'>{quantity}</p>
                        <svg onClick={()=>navigate('/Cart')} role="button" xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="text-muted bi bi-cart2" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                        </svg>
                    </div>
                    <svg onClick={()=>navigate('/Auth')} xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" role='button' className="ms-2 text-muted bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                    </svg>
                </div>
            </div>
        </div>

  )
}

export default NavBar