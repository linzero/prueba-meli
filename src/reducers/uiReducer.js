import { types } from "../types/types";

const initialState = {
    loading:false,
}

export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.uiSetLoading:
            return {
                ...state,
                loading:true
            } 
        
        case types.uiRemoveLoading:
            return {
                ...state,
                loading:false
            } 
        default:
            return state
    }

}