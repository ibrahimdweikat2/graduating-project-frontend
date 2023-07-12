import axios from 'axios';
const token = JSON.parse( localStorage.getItem('user'))?.token;

const API_USER=axios.create({baseURL:'https://finalbackend-lrga.onrender.com',headers:{authorization:`Bearer ${token}`}});
const API=axios.create({baseURL:'https://finalbackend-lrga.onrender.com'});


//Books
export const getBooks=(page)=>API.get(`/api/books?page=${page}`);
export const getBookById=id=>API.get(`/api/books/find/${id}`);
export const currentSel=()=>API.get('/api/books/bestsellers');
export const topRate=()=>API.get('/api/books/toprate');



//Auth
export const signUp=formData=>API.post('/api/auth/Register',formData);
export const signIn=formData=>API.post('/api/auth/login',formData);

//Search
export const searchBooks=query=>API.get(`/api/books/search?query=${query}`);

//Cart User
export const getCart=(id)=>API_USER.get(`/api/carts/find/${id}`);
export const addToCart=(bookId,quantity)=>API_USER.post('/api/carts/addCart',{bookId,quantity});
export const deleteItem=(userId)=>API_USER.delete(`/api/carts/delete/${userId}`);

export const updateQuantity=(userId)=>API_USER.put(`/api/carts/updatequantity/${userId}`);

