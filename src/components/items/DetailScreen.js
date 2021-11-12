import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { getItem } from '../../actions/items';
import { DetailComponent } from './detail/DetailComponent';
import { useDispatch, useSelector } from 'react-redux'

export const DetailScreen = () => {

    let { id } = useParams();

    const dispatch = useDispatch();
    const { item, categories, description } = useSelector( state => state.items );
    const { loading } = useSelector( state => state.ui );
    
    useEffect( () => {

        dispatch( getItem(id) )
        
    }, [id, dispatch])


    return (
        <div className="items_screen_content">
            <div className="container p-3">
                <div className="mb-3">
                    {   
                        categories.map((cat, index) => {
                            return <span className="text-dark-gray" key={`${new Date().getTime()}-${cat['id']}-${index}`}> {cat['name']} <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path></svg> </span>
                        })
                    }

                    <span className="text-dark-gray">{ item.category_id }</span>
                </div>
                {
                   (item && !loading) ?  <DetailComponent item={item} description={description} /> : !loading && <div>No se encontraron resultados</div>
                }
            </div>
        </div>
    )
}
