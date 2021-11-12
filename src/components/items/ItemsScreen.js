import React, { useEffect } from 'react'
import queryString from 'query-string'
import { ListComponent } from './list/ListComponent'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../actions/items'


export const ItemsScreen = () => {

    const dispatch = useDispatch();
    const { items, categories } = useSelector( state => state.items );
    const { loading } = useSelector( state => state.ui );
    const navigate = useNavigate();
    
    useEffect( () => {

        const search = queryString.parse(window.location.search).search  
        if (search.length === 0) {
            navigate("/")
        } else {
            dispatch( getItems(search) )
        }
       
    }, [dispatch,navigate])

    return (
        <div className="items_screen_content">
            <div className="container p-3">
                <div className="mb-3">
                    {   
                        categories.map((cat, index) => {
                            if (index < 6) {
                                if (index < categories.length-1 && index !== 5) {
                                    return <span className="text-dark-gray" key={`${new Date().getTime()}-${cat['id']}-${index}`}> {cat['name']} <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path></svg> </span>
                                } else {
                                    return <span className="text-dark-gray" key={`${cat['id']}-${index}`}> {cat['name']} </span>
                                }
                            } else {
                                return <></>
                            }
                        })
                    }
                </div>
                {
                    (items.length > 0 && !loading) ?  <ListComponent items={items} /> : !loading && <div>No se encontraron resultados</div>
                }

            </div>
        </div>
    )
}
