
const Cart=(state={books:[],quantity:0,total:0},action)=>{
    switch (action.type) {
        case "DELETE_CART":
        return{
            books:[],
            quantity:0,
            total:0
        }
        case "FETCH_CART_USER":
        return{
            ...state,
            books:[...action?.payload?.map(book=>book)]
            ,quantity:action?.payload?.length
            ,total:action?.payload?.reduce((a,b)=>a+(b?.quantity * b?.bookId?.price),0)
        }
        case "ADD_CART_USER":
        return{
            books:[...action?.payload?.map(book=>book)]
            ,quantity:action?.payload?.length
            ,total:action?.payload?.reduce((a,b)=>a+(b?.quantity * b?.bookId?.price),0)
        }
        case 'ADD_BOOK':
        return{
            ...state,
            books:[...state.books,{bookId:action?.payload?.book,quantity:action?.payload?.quantity}],
            quantity:state?.quantity+1,
            total:state?.total+action?.payload?.quantity * action?.payload?.book?.price
        }
        case "DELETE_BOOK":
        return {
            ...state,
            books:[...state?.books.filter(book=>book?.bookId?._id!==action?.payload?.book?._id)],
            quantity:state?.quantity-1,
            total:state?.total-action?.payload?.quantity * action?.payload?.book?.price
        }
        case 'ADD_BOOK_Quantity':
        return{
            ...state,
            books:[...state?.books.filter(book=>book?.bookId?._id!==action?.payload?.book?._id),{bookId:action?.payload?.book,quantity:action?.payload?.quantity+1}],
            total:state?.total+ action?.payload?.book?.price
        }
        case "MIN_BOOK_Quantity":
        return{
            ...state,
            books:[...state?.books.filter(book=>book?.bookId?._id!==action?.payload?.book?._id),{bookId:action?.payload?.book,quantity:action?.payload?.quantity-1}],
            total:state?.total-action?.payload?.book?.price
        }
        default:
            return state;
    }
}

export default Cart;