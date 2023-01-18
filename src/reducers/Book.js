
const Book=(state={books:[],book:{}},action)=>{
    switch (action.type) {
        case "FETCH_BOOKS":
            return{
                ...state,
                books:action?.payload
            }
            case 'FETCH_BOOK':
            return{
                ...state,
                book:action?.payload
            }
        default:
            return state;
    }
}

export default Book;