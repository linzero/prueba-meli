import { getItemsGET, getItemDetailGET } from "../api/ItemsAPI"
import { types } from "../types/types"
import { removeLoading, setLoading } from "./ui"


export const setItems = ( items ) => ({
    type:types.setItems,
    payload: {
        items
    }
})

export const setItem = ( item, description ) => ({
    type:types.setItem,
    payload: {
        item,
        description
    }
})

export const setCategories = ( categories ) => ({
    type:types.setCategories,
    payload: {
        categories
    }
})

export const getItems = ( q ) => {

    return ( dispatch ) => {
        dispatch( setLoading() )

        getItemsGET(q)
        .then(response => {
            
            if( response['data'].results )
            {   
                let results = response['data'].results;
                dispatch( setItems( results.results ) )

                if (results.results.length > 0) {
                    for (let filter of results.filters) {
                        if (filter.id === 'category') {

                            let sorted = filter.values.sort( ( a, b ) => {
                                if ( a.results < b.results ){
                                  return -1;
                                }
                                if ( a.results > b.results ){
                                  return 1;
                                }
                                return 0;
                            } )

                            dispatch( setCategories( sorted.slice(0,5) ) )
                        }
                    }

                    for (let filter of results.available_filters) {
                        if (filter.id === 'category') {
                            let sorted = filter.values.sort( ( a, b ) => {
                                if ( a.results < b.results ){
                                  return -1;
                                }
                                if ( a.results > b.results ){
                                  return 1;
                                }
                                return 0;
                            } )
                            dispatch( setCategories( sorted.slice(0,5) ) )
                        }
                    }
                }
            }

            dispatch( removeLoading() )
            
        })
        .catch(err => {
            dispatch( removeLoading() )
            console.log(err);
        })
    }
}


export const getItem = ( id ) => {

    return ( dispatch ) => {
        dispatch( setLoading() )

        getItemDetailGET(id)
        .then(response => {
            
            dispatch( removeLoading() )
            dispatch( setItem( response['data'].item, response['data'].description ) )
        })
        .catch(err => {
            dispatch( removeLoading() )
            console.log(err);
        })
    }
}