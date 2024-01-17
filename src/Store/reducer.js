import { REQUEST } from "./actiontype"

const initialState = {
    isLoading : false,
    isError : false,
    cartArray : [],
    data : {},
    isAuth : false
}
export const reducer = (state=initialState,action) => {

    switch(action.type) {
        case REQUEST:return state
        default : return state
    }
}