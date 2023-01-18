import * as api from '../api/index';

//Books
export const fetchBooks=()=>async dispatch=>{
    try {
        const {data}=await api.getBooks();
        dispatch({type:"FETCH_BOOKS",payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const getBookById=id=>async dispatch=>{
    try {
        const {data}=await api.getBookById(id);
        dispatch({type:"FETCH_BOOK",payload:data});
    } catch (error) {
        console.log(error);
    }
}


//Auth
export const Register=formData=>async dispatch=>{
    try {
        await api.signUp(formData);
    } catch (error) {
        console.log(error);
    }
}

export const Login=formData=>async dispatch=>{
    try {
        const {data}=await api.signIn(formData);
        localStorage.setItem('user',JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}


//Cart
export const getCartItems=(id)=>async dispatch=>{
    try {
        const {data}=await api.getCart(id);
        // data?.Books?.map((book)=>dispatch({type:"FETCH_CART_USER",payload:book}))
        dispatch({type:"FETCH_CART_USER",payload:data?.Books});

    } catch (error) {
        console.log(error);
    }
}

export const addToCart=(book,quantity)=>async dispatch=>{
    const user=JSON.parse(localStorage.getItem('user'));
    try {
        if(user){
            const {data}=await api.addToCart(book?._id,quantity);
            console.log(data);
            dispatch({type:"ADD_CART_USER",payload:data?.Books});
        }
            dispatch({type:"ADD_BOOK",payload:{book,quantity}});
    } catch (error) {
        console.log(error);
    }
}