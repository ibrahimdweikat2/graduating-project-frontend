
const Book=(state={books:[],book:{},topRate:[],currentSel:[],search:[],numberOfPages:0},action)=>{
    switch (action.type) {
        case "FETCH_BOOKS":
            return{
                ...state,
                books:action?.payload?.books,
                numberOfPages:action?.payload?.numberOfPages
            }
            case 'FETCH_BOOK':
            return{
                ...state,
                book:action?.payload
            }
            case 'GET_TOP_RATE':
            return {
                ...state,
                topRate:action?.payload,
            }
            case 'GET_CURRENT_SEL':
            return{
                ...state,
                currentSel:action?.payload,
            }
            case "SEARCH_BOOKS":
            return {
                ...state,
                search:action?.payload
            }
        default:
            return state;
    }
}

export default Book;