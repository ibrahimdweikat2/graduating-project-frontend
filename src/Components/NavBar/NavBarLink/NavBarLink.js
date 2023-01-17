import { useState } from 'react';
import {Link} from 'react-router-dom';
const NavBarLink = () => {
  const [classHome,setClassHome]=useState('active');
  const [classBooks,setClassBooks]=useState('');
  const [classRecommend,setClassRecommend]=useState('');
  return (
    <div className='position-relative p-3 color shadow-sm p-3 mb-1'style={{height:'10vh'}}>
      <ul className="d-flex align-item-center justify-content-around w-100 position-absolute start-50 top-50 translate-middle link" style={{listStyle:'none'}}>
              <li className={`nav-item mx-2 ${classHome}`} onClick={()=>{
                setClassHome('active');
                setClassBooks('');
                setClassRecommend('');
              }}>
                <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
              </li>
              <li className={`nav-item ${classBooks}`} onClick={()=>{
                setClassHome('');
                setClassBooks('active');
                setClassRecommend('');
              }}>
                <Link className="nav-link text-dark" to="/Books">Books</Link>
              </li>
              <li className={`nav-item mx-2 ${classRecommend}`} onClick={()=>{
                setClassHome('');
                setClassBooks('');
                setClassRecommend('active');
              }}>
                <Link className="nav-link text-dark" to="/Recommended">Recomended</Link>
              </li>
            </ul>
    </div>

  )
}

export default NavBarLink