import { types } from "../types/types";

const initialState = {
    items:[],
    categories:['Categorías'],
    item:{}
}

export const itemsReducer = ( state = initialState, action ) => {
    switch (action.type){
        case types.setCategories:
            return {
                ...state,
                categories: action.payload.categories
            }
        case types.setItems:
            return {
                ...state,
                items: action.payload.items
            }
        case types.setItem:
            return {
                ...state,
                item: action.payload.item,
                description: action.payload.description
            }
        default:
            return state
    }

}