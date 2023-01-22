import React,{useEffect,useState} from "react";
import StarRatings from 'react-star-ratings';
import ShoppingCart from "../Cart/ShoppingCart/ShoppingCart";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate,useLocation} from 'react-router-dom';
import {fetchBooks} from '../../action/index';
const LazyPagination=React.lazy(()=>import("../Pagination/PaginationRec"));
const useQuery=()=>{
  return new URLSearchParams(useLocation().search);
}
export default function Recommended() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {books} = useSelector(state=>state.book);
  const [sort,setSort]=useState('new');
  const [dataFilter,setDataFilter]=useState(books);
  const page=useQuery().get('page') ||1;
  useEffect(()=>{
    dispatch(fetchBooks(page));
    setDataFilter(books);
  },[dispatch,page,books])
  useEffect(()=>{
    if(sort==='new'){
      setDataFilter((prev)=>[...prev].sort((a,b)=> a?.createdAt - b?.createdAt));
    }
    else if(sort==='asc'){
      setDataFilter((prev)=>[...prev].sort((a,b)=> a?.price- b?.price));
    }else{
      setDataFilter((prev)=>[...prev].sort((a,b)=> b?.price- a?.price));
    }
  },[sort]);
  return (
    <>
      <ShoppingCart title={'Recommended Book'}/>
      <div className="container mt-5">
        <div className="text-dark my-5">
          <strong className="me-2" style={{opacity:'0.8'}}>Sort By </strong>
          <select style={{border:'none',color:'gray',opacity:'0.8'}} onChange={e=>setSort(e.target.value)}>
            <option value='new'>Newest Item</option>
            <option value='asc'>Price(asc)</option>
            <option value='desc'>price(desc)</option>
          </select>
        </div>
        <div className="recommended">
        <div className="row">
                {
                  dataFilter.map(item=>(
                    <div onClick={()=>navigate(`/BookDetails/${item?._id}`)} key={item?._id} className="recommended-card col-12 col-md-4 col-xl-3">
                  <LazyLoadImage src={item?.image} alt="*" height={500} width={300}/>
                  <div className="mt-2">
                    <h4>{item?.title}</h4>
                    <h5>{`${item?.price}$`}</h5>
                    <div className="rate d-flex">
                    <StarRatings rating={item?.rating} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>
                      <div className="review  mt-1 ms-2">
                        <p>{`${item?.review_count} reviews`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                  ))
                }
              </div>
              <div className="mt-5">
                <LazyPagination />
              </div>
        </div>
      </div>
    </>
  );
}
