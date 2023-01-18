import axios from 'axios';
const token = JSON.parse( localStorage.getItem('user'))?.token;

const API_USER=axios.create({baseURL:'http://localhost:5000',headers:{authorization:`Bearer ${token}`}});
const API=axios.create({baseURL:'http://localhost:5000'});


//Books
export const getBooks=()=>API.get('/api/books');
export const getBookById=id=>API.get(`/api/books/find/${id}`);


//Auth
export const signUp=formData=>API.post('/api/auth/Register',formData);
export const signIn=formData=>API.post('/api/auth/login',formData);

//Cart User
export const getCart=(id)=>API_USER.get(`/api/carts/find/${id}`);
export const addToCart=(bookId,quantity)=>API_USER.post('/api/carts/addCart',{bookId,quantity});
