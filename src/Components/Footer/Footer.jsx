import React from 'react'
import { BsJournalText } from "react-icons/bs";
import {GiPostOffice} from "react-icons/gi";
import {FiSend} from "react-icons/fi";
import {FaFacebookF,FaTwitter} from "react-icons/fa";
import {TiSocialGooglePlus} from "react-icons/ti";
export default function Footer() {
  return (
    <>
    <footer style={{height:'100%',backgroundColor:'#1B8BCB'}}>
      <div className='container-xxl'>
        <div className='row ms-5'>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div className='d-flex align-items-center justify-content-start' style={{marginTop:'6rem'}}>
                      <BsJournalText  className='mb-2 me-1 bookIcon' style={{color:'#8BC7E3'}}/>
                      <h1 className="navbar-brand text-uppercase book" style={{color:'#8BC7E3 '}}>bookshop</h1>
            </div>
            <div>
              <p style={{color:'#EAF0F0'}}>The Best E-Commerce Website BooksShop Which Contain A large Number Of Books To Buy It</p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div className='d-flex align-items-center justify-content-start' style={{marginTop:'6rem'}}>
                        <GiPostOffice  className='mb-2 me-1 bookIcon' style={{color:'#8BC7E3'}}/>
                        <h1 className="navbar-brand text-uppercase book" style={{color:'white'}}>Our Main Office</h1>
              </div>
            <div style={{fontSize:'14px',color:'#EAF0F0'}}>
              <div>
                Beta,Nablus,PS
              </div>
              <div>Tolkarem,PS</div>
              <div>P.O BOK:553254</div>
              <div>phone:+970 568227764</div>
              <div>Mail:ibrahimdweikatwork@gmail.com</div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div className='d-flex align-items-center justify-content-start' style={{marginTop:'6rem'}}>
                          <FiSend  className='mb-2 me-1 bookIcon' style={{color:'#8BC7E3'}}/>
                          <h1 className="navbar-brand text-uppercase book" style={{color:'white'}}>Keep In Touch With Us</h1>
            </div>
            <div>
              <div className='d-flex g-3 mb-3'>
                <div className='rounded-circle position-relative' style={{width:'30px',height:'30px' ,backgroundColor:'white'}}>
                    <FaFacebookF color='#1B8BCB' className='position-absolute top-50 start-50 translate-middle'/>
                </div>
                <div style={{color:'white'}} className='ms-3'>
                  FaceBook
                </div>
              </div>
              <div className='d-flex g-3'>
                  <div className='rounded-circle position-relative' style={{width:'30px',height:'30px' ,backgroundColor:'white'}}>
                      <FaTwitter color='#1B8BCB' className='position-absolute top-50 start-50 translate-middle'/>
                  </div>
                  <div style={{color:'white'}} className='ms-3'>
                    Twitter
                  </div>
              </div>
              <div className='d-flex g-3 mt-3'>
                  <div className='rounded-circle position-relative' style={{width:'30px',height:'30px' ,backgroundColor:'white'}}>
                      <TiSocialGooglePlus color='#1B8BCB' className='position-absolute top-50 start-50 translate-middle'/>
                  </div>
                  <div style={{color:'white'}} className='ms-3'>
                    Google plus
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{height:'6vh',backgroundColor:'#167DB8'}}  className='d-flex justify-content-center align-items-center mt-2'>
        &copy; 2022 BookShop Pty Ltd ALL RIGHT RESERVED
        </div>
    </footer>
    </>
  )
}
