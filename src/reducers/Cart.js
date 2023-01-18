
const Cart=(state={books:[],quantity:0,total:0},action)=>{
    switch (action.type) {
        case "FETCH_CART_USER":
        return{
            ...state,
            books:[...action?.payload?.map(book=>book)]
            ,quantity:action?.payload?.length
            ,total:action?.payload?.reduce((a,b)=>a+(b?.quantity * b?.bookId?.price),0)
        }
        case "ADD_CART_USER":
        return{
            ...state,
            books:[...action?.payload?.map(book=>book)]
            ,quantity:action?.payload?.length+1
            ,total:action?.payload?.reduce((a,b)=>a+(b?.quantity * b?.bookId?.price),0)
        }
        case 'ADD_BOOK':
        return{
            ...state,
            books:[...state.books,{bookId:action?.payload?.book,quantity:action?.payload?.quantity}],
            quantity:state?.quantity+1,
            total:state?.total+action?.payload?.quantity * action?.payload?.book?.price
        }
        default:
            return state;
    }
}

export default Cart;