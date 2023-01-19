import * as api from '../api/index';

//Books
export const fetchBooks=(page)=>async dispatch=>{
    try {
        const {data}=await api.getBooks(page);
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
export const deleteCart=id=>async dispatch=>{
    try {
        await api.deleteItem(id);
        dispatch({type:"DELETE_CART"});
    } catch (error) {
        
    }
}

export const getCartItems=(id)=>async dispatch=>{
    try {
        const {data}=await api.getCart(id);
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
            dispatch({type:"ADD_CART_USER",payload:data?.Books});
        }else{
            dispatch({type:"ADD_BOOK",payload:{book,quantity}});
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteItemGuset=(book,quantity)=>async dispatch=>{
    try {
        dispatch({type:"DELETE_BOOK",payload:{book,quantity}});
    } catch (error) {
        console.log(error);
    }
}

export const updateItemQuantity=(book,quantity)=>async dispatch=>{
    try {
        dispatch({type:"ADD_BOOK_Quantity",payload:{book,quantity}});
    } catch (error) {
        console.log(error);
    }
}

export const minItemQuantity=(book,quantity)=>async dispatch=>{
    try {
        dispatch({type:"MIN_BOOK_Quantity",payload:{book,quantity}});
    } catch (error) {
        console.log(error);
    }
}


//Home
export const getTopRate=()=>async dispatch=>{
    try {
        const {data}=await api.topRate();
        dispatch({type:"GET_TOP_RATE",payload:data});

    } catch (error) {
        console.log(error);
    }
}

export const getCurrentSel=()=>async dispatch=>{
    try {
        const {data}=await api.currentSel();
        dispatch({type:"GET_CURRENT_SEL",payload:data});
    } catch (error) {
        console.log(error);
    }
}


//Search
export const searchBooks=query=>async dispatch=>{
    try {
        const {data}=await api.searchBooks(query);
        dispatch({type:"SEARCH_BOOKS",payload:data});
    } catch (error) {
        console.log(error);
    }
}