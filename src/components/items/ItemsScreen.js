import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import { enviroment } from '../../enviroment/enviroment'
import { ListComponent } from './list/ListComponent'


export const ItemsScreen = () => {

    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])
    const [isLoading, setLoading] = useState(false)
    
    useEffect( () => {
        const search = queryString.parse(window.location.search).search  
        const getItems = async () => {
        
            try{
                setLoading(true)
                const url = `${ enviroment.api_base_url }/items?q=${ search }`;
                const resp = await fetch( url ) ;
                const { results } = await resp.json(); 
                setItems( results.results );
                setCategories( results.filters[0].values );
                setLoading(false)
            } catch (e) {
                console.log(e)
            }
        }

        getItems();
    }, [])

    return (
        <div className="items_screen_content">
            <div className="container p-3">
                <div className="mb-3">
                    {   
                        categories.map((cat, index) => {
                            if (index < 6) {
                                if (index < categories.length-1 && index !== 5) {
                                    return <span className="text-dark-gray" key={`${cat['id']}-${index}`}> {cat['name']} <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path></svg> </span>
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
                   (items.length > 0 && !isLoading) ?  <ListComponent items={items} /> : !isLoading && <div>No se encontraron resultados</div>
               }

            </div>
        </div>
    )
}
