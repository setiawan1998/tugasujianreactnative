const initialState = {
    result: [],
    data: {},
    isLoading: false,
    isError: false   
}

export default function productReducers(state=initialState, action){
    switch (action.type){ 
        case "ALL_PRODUCTS_PENDING":
            return {...state, isLoading: true}    
        case "ALL_PRODUCTS_FULFILLED":
            return{...state, isLoading: false, result: action.payload.data}
        case "ALL_PRODUCTS_REJECTED":
            return {...state, isLoading: false, isError: true}    
        default:
            return state
    }
}