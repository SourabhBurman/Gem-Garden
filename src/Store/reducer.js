import { ADD_CART, DELETE_CART, FETCH_DATA_FAILED, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, LOGIN, LOGOUT, REQUEST } from "./actiontype"

const initialState = {
    isLoading : false,
    isError : false,
    cartArray : [],
    data : {},
    isAuth : false
}
export const reducer = (state=initialState,action) => {

    switch(action.type) {
        case ADD_CART:return {...state,cartArray:[...state.cartArray,action.payload]}
        case DELETE_CART:return {...state,cartArray : state.cartArray.filter((item)=>item.id!=action.payload.id)}
        case LOGIN : return {...state,isAuth:true}
        case LOGOUT : return {...state,isAuth:false}
        default : return state
    }
}